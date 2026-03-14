import { ref } from 'vue';
import heic2any from 'heic2any';
import * as pdfjsLib from 'pdfjs-dist/legacy/build/pdf.mjs';
import JSZip from 'jszip';
import { jsPDF } from 'jspdf';

pdfjsLib.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.4.168/pdf.worker.min.mjs`;

export const useImageConverter = () => {
  const isProcessing = ref(false);
  const resultBlob = ref<Blob | null>(null);
  const resultFileName = ref("");

  const processWithWorker = (
    file: Blob | File,
    targetFormat: string,
    originalName: string
  ): Promise<{ blob: Blob; fileName: string }> => {
    return new Promise((resolve, reject) => {
      // const workerUrl = new URL('/workers/converter.worker.js', import.meta.url).href;
      // const worker = new Worker(workerUrl, { type: 'module' });
      const worker = new Worker('/workers/converter.worker.js');
      worker.postMessage({ file, targetFormat, originalName });
      worker.onmessage = (e: MessageEvent<{ blob: Blob; fileName: string }>) => {
        resolve(e.data);
        worker.terminate();
      };
      
      worker.onerror = (err) => {
        worker.terminate();
        reject(err);
      };
    });
  };

  const fileToDataURL = (file: Blob | File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  const convert = async (input: File | File[], targetFormat: string = 'png') => {
    isProcessing.value = true;
    const files = Array.isArray(input) ? input : [input];
    const zip = new JSZip();

    let imageExtension = targetFormat.toLowerCase();
    if (imageExtension === 'jpg') imageExtension = 'jpeg';
    if (imageExtension === 'tif') imageExtension = 'tiff';

    try {
      if (targetFormat === 'pdf') {
        const doc = new jsPDF();

        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          if (!file) continue;

          let currentFile: Blob | File = file;
          const ext = file.name.split('.').pop()?.toLowerCase();

          if (ext === 'heic' || ext === 'heif') {
            const converted = await heic2any({ blob: file, toType: 'image/jpeg' });
            const source = Array.isArray(converted) ? converted[0] : converted;
            if (!source) throw new Error("HEIC conversion failed");
            currentFile = source;
          }

          const imgData = await fileToDataURL(currentFile);
          const imgProps = doc.getImageProperties(imgData);
          const pdfWidth = doc.internal.pageSize.getWidth();
          const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;

          if (i > 0) doc.addPage();
          doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight);
        }

        resultBlob.value = doc.output('blob');
        const firstFile = files[0];
        resultFileName.value = files.length === 1 && firstFile
          ? `${firstFile.name.split('.')[0]}.pdf`
          : 'combined.pdf';
      } else {
        for (const file of files) {
          const extension = file.name.split('.').pop()?.toLowerCase();
          const baseName = file.name.substring(0, file.name.lastIndexOf('.'));

          if (extension === 'heic' || extension === 'heif') {
            const converted = await heic2any({ blob: file, toType: 'image/jpeg', quality: 0.9 });
            const source = Array.isArray(converted) ? converted[0] : converted;
            if (!source) throw new Error("HEIC conversion failed");

            const result = await processWithWorker(source, targetFormat, file.name);

            if (files.length === 1) {
              resultBlob.value = result.blob;
              resultFileName.value = result.fileName;
            } else {
              zip.file(result.fileName, result.blob);
            }
          } else if (extension === 'pdf') {
            const arrayBuffer = await file.arrayBuffer();
            const pdf = await pdfjsLib.getDocument({
              data: arrayBuffer,
              cMapUrl: 'https://cdn.jsdelivr.net/npm/pdfjs-dist@4.4.168/cmaps/',
              cMapPacked: true,
            }).promise;

            for (let i = 1; i <= pdf.numPages; i++) {
              const page = await pdf.getPage(i);
              const viewport = page.getViewport({ scale: 2 });
              const canvas = document.createElement('canvas');
              const context = canvas.getContext('2d');

              canvas.height = viewport.height;
              canvas.width = viewport.width;

              await page.render({ canvasContext: context!, viewport }).promise;

              const imgBlob = await new Promise<Blob>((res) => {
                canvas.toBlob((b) => {
                  if (!b) return;
                  res(b);
                }, `image/${imageExtension}`);
              });

              zip.file(`${baseName}_${i}.${targetFormat}`, imgBlob);
            }
          } else {
            const result = await processWithWorker(file, targetFormat, file.name);

            if (files.length === 1) {
              resultBlob.value = result.blob;
              resultFileName.value = result.fileName;
            } else {
              zip.file(result.fileName, result.blob);
            }
          }
        }

        const firstFile = files[0];

        if (
          files.length > 1 ||
          (files.length === 1 && firstFile && firstFile.name.toLowerCase().endsWith('.pdf'))
        ) {
          resultBlob.value = await zip.generateAsync({ type: 'blob' });
          resultFileName.value =
            files.length === 1 && firstFile
              ? `${firstFile.name.split('.')[0]}_converted.zip`
              : `convert_dragon_batch.zip`;
        }
      }

      isProcessing.value = false;
    } catch (error) {
      console.error("Conversion failed:", error);
      isProcessing.value = false;
      alert("변환 중 오류가 발생했습니다.");
    }
  };

  const download = () => {
    if (!resultBlob.value) return;
    const url = URL.createObjectURL(resultBlob.value);
    const link = document.createElement('a');
    link.href = url;
    link.download = resultFileName.value;
    link.click();
    URL.revokeObjectURL(url);
  };

  return { convert, download, isProcessing, resultBlob, resultFileName };
};