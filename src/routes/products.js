import express from 'express';
import ProductManager from '../managers/ProductManager.js';

const router = express.Router();
const productManager = new ProductManager('./data/products.json');

router.get('/', (req, res) => {
    res.json(productManager.getProducts());
});

router.get('/:pid', (req, res) => {
  const product = productManager.getProductById(parseInt(req.params.pid));
  if (product) {
    res.json(product);
  } else {
    res.status(404).send('Product not found');
  }  
});

router.post('/', (req, res) => {
    const newProduct = productManager.addProduct(req.body);
    res.status(201).json(newProduct);
});

router.put('/:pid', (req, res) => {
    const updatedProduct = productManager.updateProduct(parseInt(req.params.pid), req.body);
    if (updatedProduct) {
        res.json(updatedProduct);
    } else {
        res.status(404).send('Product not found');
    }
});    

router.delete('/:pid', (req, res) => {
    const deletedProduct = productManager.deleteProduct(parseInt(req.params.pid));
    if (deletedProduct) {
        res.json(deletedProduct);
    } else {
        res.status(404).send('Product not found');
    }
});

export default router;
