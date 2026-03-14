self.onmessage = async (e) => {
  const { file, targetFormat, originalName } = e.data;
  
  try {
    const imageBitmap = await createImageBitmap(file);
    const canvas = new OffscreenCanvas(imageBitmap.width, imageBitmap.height);
    const ctx = canvas.getContext('2d');
    
    ctx.drawImage(imageBitmap, 0, 0);

    const type = targetFormat === 'jpg' ? 'image/jpeg' : `image/${targetFormat}`;
    const blob = await canvas.convertToBlob({ type, quality: 0.9 });

    const baseName = originalName.substring(0, originalName.lastIndexOf('.'));
    const fileName = `${baseName}.${targetFormat}`;

    self.postMessage({ blob, fileName });
  } catch (error) {
    self.postMessage({ error: error.message });
  }
};
