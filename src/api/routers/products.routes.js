import { Router } from 'express';
import * as productController from '../controllers/products.controller.js';
import upload from '../middleware/upload.js';

const router = Router();

router.post('/products', upload.single('image'), productController.createProduct);

router.get('/products', productController.getAllProducts);

router.get('/products/:id', productController.getProductById);

router.put('/products/:id', upload.single('image'), productController.updateProduct);

router.delete('/products/:id', productController.deleteProduct);

export default router;