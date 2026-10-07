import crypto from 'crypto';
import { getCloudinaryConfig } from '../config/cloudinary.js';
import { logger } from '../utils/logger.js';

export const uploadToCloudinary = async (base64Image, folderName = 'portfolio') => {
  const { cloudName, apiKey, apiSecret } = getCloudinaryConfig();

  const timestamp = Math.floor(Date.now() / 1000);
  const stringToSign = `folder=${folderName}&timestamp=${timestamp}${apiSecret}`;
  const signature = crypto.createHash('sha1').update(stringToSign).digest('hex');

  const formData = new URLSearchParams();
  formData.append('file', base64Image);
  formData.append('api_key', apiKey);
  formData.append('timestamp', timestamp.toString());
  formData.append('signature', signature);
  formData.append('folder', folderName);

  logger.info(`Transmitting image payload to Cloudinary (${cloudName})...`);

  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
    method: 'POST',
    body: formData,
  });

  const data = await response.json();

  if (response.ok && data.secure_url) {
    logger.info('Cloudinary upload success:', data.secure_url);
    return {
      url: data.secure_url,
      publicId: data.public_id,
    };
  } else {
    logger.error('Cloudinary upload error payload:', data);
    throw new Error(data.error?.message || 'Failed to upload image to Cloudinary');
  }
};
