import express from "express";
import productRoutes from './api/routers/products.routes.js';

const app = express();
const port = 3000;

app.set('trust proxy', 1);
app.use(express.json());

app.get('/health', (req, res) => {
    res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.use('/api', productRoutes);

app.listen(port, 'localhost', () => {
    console.log('API rodando na porta 3000');
});