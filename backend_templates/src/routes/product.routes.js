import express from 'express'
import { createProduct, deleteProduct, getProductById, getProducts, productView, updateProduct } from '../controllers/product.controller.js'



const productRoutes = express.Router()


productRoutes.post('/product', createProduct);
productRoutes.get('/products', getProducts);
productRoutes.get('/product/:id', getProductById);
productRoutes.put('/product/:id', updateProduct);
productRoutes.delete('/product/:id', deleteProduct);

productRoutes.post('/product-view', productView);

export default productRoutes;