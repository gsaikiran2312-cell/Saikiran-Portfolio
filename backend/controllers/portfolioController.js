import * as portfolioService from '../services/portfolioService.js';
import { validatePortfolioData } from '../models/portfolioModel.js';

export const getPortfolio = async (req, res, next) => {
  try {
    const data = await portfolioService.fetchPortfolioData();
    res.json({ success: true, data });
  } catch (err) {
    next(err);
  }
};

export const updatePortfolio = async (req, res, next) => {
  try {
    const newData = req.body;
    const { isValid, message } = validatePortfolioData(newData);
    if (!isValid) {
      return res.status(400).json({ success: false, message });
    }

    const updatedData = await portfolioService.updatePortfolioData(newData);
    res.json({ success: true, message: 'Portfolio data updated dynamically!', data: updatedData });
  } catch (err) {
    next(err);
  }
};

export const resetPortfolio = async (req, res, next) => {
  try {
    const defaultData = await portfolioService.resetPortfolioData();
    res.json({ success: true, message: 'Portfolio reset to initial default state.', data: defaultData });
  } catch (err) {
    next(err);
  }
};

export const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (email === 'gsaikiran2312@gmail.com' && password === 'gsaikiran2312@') {
      return res.json({
        success: true,
        message: 'Authentication successful! Welcome Admin.',
        token: 'gsk_admin_jwt_token_2026',
        user: { name: 'GANDHUDI SAI KIRAN', email: 'gsaikiran2312@gmail.com', role: 'Admin' }
      });
    }
    return res.status(401).json({
      success: false,
      message: 'Invalid login credentials. Please check your email and password.'
    });
  } catch (err) {
    next(err);
  }
};

