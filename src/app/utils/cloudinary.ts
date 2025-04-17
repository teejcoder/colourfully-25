import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

export async function uploadToCloudinary(buffer: Buffer): Promise<{
  secure_url: any; public_id: string; url: string 
}> {
  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      { resource_type: 'image' },
      (error, result) => {
        if (error) {
          console.error('Cloudinary upload error:', error);
          reject(new Error('/error'));
        } else {
          resolve(result as { secure_url: any; public_id: string; url: string });
        }
      }
    );
    uploadStream.end(buffer);
  });
}