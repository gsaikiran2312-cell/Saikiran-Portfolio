import { Router } from 'express';
import { getPortfolio, updatePortfolio, resetPortfolio } from '../controllers/portfolioController.js';

const router = Router();

router.get('/', getPortfolio);
router.put('/', updatePortfolio);
router.post('/reset', resetPortfolio);

export default router;
