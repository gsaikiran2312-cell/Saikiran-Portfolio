import app from './app.js';
import { config } from './config/env.js';

const PORT = config.port;

app.listen(PORT, () => {
  console.log(`🚀 Portfolio running on http://localhost:${PORT}`);
});

