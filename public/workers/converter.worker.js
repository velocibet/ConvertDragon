self.onmessage = async (e) => {
  const { file, targetFormat } = e.data;
  const bitmap = await createImageBitmap(file);
  const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
  const ctx = canvas.getContext('2d');
  
  ctx.drawImage(bitmap, 0, 0);
  
  const blob = await canvas.convertToBlob({ type: `image/${targetFormat}` });
  
  self.postMessage({ blob, fileName: file.name.replace(/\.[^/.]+$/, "") + `.${targetFormat}` });
};