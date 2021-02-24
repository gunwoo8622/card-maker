class ImageUploader {
  async upload(file) {
    const data = new FormData();
    data.append('file', file);
    data.append('upload_preset', 'oweoob6k');
    const reult = await fetch(
      'https://api.cloudinary.com/v1_1/du73ue368/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    return await reult.json();
  }
}

export default ImageUploader;
