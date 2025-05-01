import {v2 as cloudinary} from 'cloudinary';

import {config} from 'dotenv';

config()

cloudinary.config({
cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
api_key:process.env.CLOUDINARY_API_KEY,
api_secret:process.env.CLOUDINARY_API_SECRET,
});
// cloudinary.uploader.upload(file.path, {
//   folder: "chat-images",
//   quality: "auto", // Automatically adjusts image quality
//   fetch_format: "auto", // Converts format for better compression
//   transformation: [{ width: 1000, height: 1000, crop: "limit" }] // Limits dimensions
// });


export default cloudinary;