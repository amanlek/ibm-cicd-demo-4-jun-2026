import express from 'express';
import os from 'os';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const MESSAGE = 'Hello from the IBM CI/CD Demo!';

app.get('/', (req, res) => {
  console.log(req);
  res.json({
    message: MESSAGE,
    version: process.env.APP_VERSION || '1.0.0',
    hostname: os.hostname()
  });
});

app.get('/health', (req, res) => {
  console.log(req);
  res.json({ status: 'UP' });
});

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}

export default app;

