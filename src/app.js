import express from 'express';
const app = express();
import displayRoutes from 'express-routemap';
import productsRouter from './routes/products.js';
import cartsRouter from './routes/carts.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const PORT = 8080;

app.listen(PORT, () => {
  displayRoutes(app);
  console.log(`Server running on port ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Welcome my server (Backend Primera Entrega)');
});
