import express from "express";
import productRoutes from './api/routers/products.routes.js';
import 'dotenv/config.js';

const app = express();

app.set('trust proxy', 1);
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api', productRoutes);

app.listen(process.env.SERVER_PORT, 'localhost', () => {
    console.log(`API rodando na porta ${process.env.SERVER_PORT}`);
});