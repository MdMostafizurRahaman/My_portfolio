// Simple redirector script to run the client
import { spawn } from 'child_process';
import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
import http from 'http';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting frontend portfolio application...');

// Create a simple proxy server on port 5000
const app = express();
const server = http.createServer(app);

// Add a simple route that forwards requests to the client
app.use((req, res) => {
  res.redirect(`http://localhost:3000${req.url}`);
});

// Start server on port 5000 (required by .replit config)
server.listen(5000, () => {
  console.log('Proxy server listening on port 5000');
});

// Run the Vite dev server for the client on port 3000
const clientProcess = spawn('npm', ['run', 'dev'], {
  cwd: path.join(__dirname, '../client'),
  stdio: 'inherit',
  shell: true
});

clientProcess.on('error', (err) => {
  console.error('Failed to start client:', err);
  process.exit(1);
});

process.on('SIGINT', () => {
  clientProcess.kill();
  process.exit(0);
});

process.on('SIGTERM', () => {
  clientProcess.kill();
  process.exit(0);
});