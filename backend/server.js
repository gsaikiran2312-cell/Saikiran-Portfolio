import app from './app.js';
import { config } from './config/env.js';
import { logger } from './utils/logger.js';

const PORT = config.port;

app.listen(PORT, () => {
  logger.info(`🚀 Portfolio Express Enterprise Backend running on http://localhost:${PORT}`);
});
