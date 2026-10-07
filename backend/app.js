import express from 'express';
import cors from 'cors';
import portfolioRoutes from './routes/portfolioRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();

app.use(cors());
app.use(express.json({ limit: '25mb' }));

// Health Check Endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', serverTime: new Date().toISOString() });
});

// API Routes
app.use('/api/portfolio', portfolioRoutes);
app.use('/api/upload', uploadRoutes);

// Global Error Handler
app.use(errorHandler);

export default app;
