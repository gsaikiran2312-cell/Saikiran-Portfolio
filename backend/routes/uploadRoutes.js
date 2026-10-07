import { Router } from 'express';
import { handleImageUpload } from '../controllers/uploadController.js';

const router = Router();

router.post('/', handleImageUpload);

export default router;
