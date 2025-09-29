import express from "express";
import productRoutes from './api/routers/products.routes.js';
import cors from 'cors';

const app = express();
const port = 3000;

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:3001'
}));

app.use('/api', productRoutes);

app.listen(port, () => {
  console.log(`Connection ok on port ${port}`);
});