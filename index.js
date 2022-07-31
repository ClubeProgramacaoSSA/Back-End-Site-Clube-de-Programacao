import { createServer } from 'http';
import app from './src/app.js';
const PORT = process.env.PORT || 3000;

const server = createServer(app);

server.listen(PORT,() => console.log('Server Started on http://127.0.0.1:'+PORT));