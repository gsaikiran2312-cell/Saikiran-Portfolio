import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { defaultPortfolioData } from '../models/portfolioModel.js';
import { logger } from '../utils/logger.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DB_FILE = path.join(__dirname, '..', 'db.json');

export const getPortfolioData = () => {
  try {
    if (!fs.existsSync(DB_FILE)) {
      savePortfolioData(defaultPortfolioData);
      return defaultPortfolioData;
    }
    const rawData = fs.readFileSync(DB_FILE, 'utf-8');
    return JSON.parse(rawData);
  } catch (err) {
    logger.error('Error reading db.json, returning fallback dataset:', err);
    return defaultPortfolioData;
  }
};

export const savePortfolioData = (data) => {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    logger.info('Portfolio data successfully saved to db.json');
    return true;
  } catch (err) {
    logger.error('Error writing portfolio data to db.json:', err);
    return false;
  }
};

export const resetPortfolioData = () => {
  return savePortfolioData(defaultPortfolioData);
};
