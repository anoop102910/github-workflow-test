import express from 'express';
import dotenv from 'dotenv';    
import { config } from './config/config';

dotenv.config();

const app = express();
const port = config.port;

app.use(express.json());

app.get('/', (_req, res) => {
  res.json({ message: 'Hello from Express!' });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});