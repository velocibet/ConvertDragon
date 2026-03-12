export const useImageConverter = () => {
  const isProcessing = ref(false);
  const resultBlob = ref<Blob | null>(null);
  const resultFileName = ref("");

  const convert = (file: File, targetFormat: string = 'png') => {
    isProcessing.value = true;
    const worker = new Worker('/workers/converter.worker.js');

    worker.postMessage({ file, targetFormat });

    worker.onmessage = (e) => {
      const { blob, fileName } = e.data;
      resultBlob.value = blob;
      resultFileName.value = fileName;
      isProcessing.value = false;
      worker.terminate();
    };
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

  return { convert, download, isProcessing, resultBlob };
};