import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';

const app = express();
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = process.env.PORT || 3000;
const distPath = join(__dirname, 'dist');

// Serve static files from dist
app.use(express.static(distPath));

// SPA fallback - serve index.html for all routes
app.use((req, res) => {
  const indexPath = join(distPath, 'index.html');
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).json({ error: 'dist/index.html not found' });
  }
});

app.listen(PORT, () => {
  console.log(`🚀 SPIROLINK Frontend Server running on port ${PORT}`);
  console.log(`📁 Serving from: ${distPath}`);
});
