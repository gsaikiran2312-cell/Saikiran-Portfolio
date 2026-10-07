import { Router } from 'express';
import { getPortfolio, updatePortfolio, resetPortfolio, loginAdmin } from '../controllers/portfolioController.js';

const router = Router();

router.get('/', getPortfolio);
router.put('/', updatePortfolio);
router.post('/reset', resetPortfolio);
router.post('/login', loginAdmin);

export default router;

