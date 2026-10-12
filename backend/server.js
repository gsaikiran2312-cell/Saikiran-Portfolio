import app from './app.js';
import { config } from './config/env.js';

const PORT = process.env.PORT || config.port || 5000;

app.listen(PORT, '0.0.0.0', () => {
  console.log(`🚀 Portfolio API running on port ${PORT}`);
});