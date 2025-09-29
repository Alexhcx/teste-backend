import express from "express";
import productRoutes from './api/routers/products.routes.js';
import 'dotenv/config.js';
import path from 'path';
import { fileURLToPath } from 'url';
// import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

app.set('trust proxy', 1);
app.use(express.json());

// app.use(cors({
//   origin: 'http://localhost:3001'
// }));

app.use(express.static(path.join(__dirname, 'public')));

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api', productRoutes);

app.listen(process.env.PORT, 'localhost', () => {
    console.log(`API rodando na porta ${process.env.PORT}`);
});