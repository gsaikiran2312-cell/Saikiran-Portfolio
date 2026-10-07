import * as portfolioRepo from '../repositories/portfolioRepository.js';
import { defaultPortfolioData } from '../models/portfolioModel.js';

export const fetchPortfolioData = async () => {
  return portfolioRepo.getPortfolioData();
};

export const updatePortfolioData = async (newData) => {
  const success = portfolioRepo.savePortfolioData(newData);
  if (!success) {
    throw new Error('Failed to update portfolio data in repository');
  }
  return newData;
};

export const resetPortfolioData = async () => {
  const success = portfolioRepo.resetPortfolioData();
  if (!success) {
    throw new Error('Failed to reset portfolio data to default state');
  }
  return defaultPortfolioData;
};
