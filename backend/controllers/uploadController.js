import { uploadToCloudinary } from '../services/cloudinaryService.js';

export const handleImageUpload = async (req, res, next) => {
  try {
    const { image } = req.body;
    if (!image) {
      return res.status(400).json({ success: false, message: 'No image file or base64 string provided in request body' });
    }

    const result = await uploadToCloudinary(image, 'portfolio');
    res.json({
      success: true,
      url: result.url,
      public_id: result.publicId,
      message: 'Image successfully uploaded to Cloudinary!'
    });
  } catch (err) {
    next(err);
  }
};
