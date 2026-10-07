import { config } from './env.js';

export const getCloudinaryConfig = () => {
  const { cloudName, apiKey, apiSecret } = config.cloudinary;
  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error('Cloudinary API credentials missing in backend environment (.env)');
  }
  return { cloudName, apiKey, apiSecret };
};
