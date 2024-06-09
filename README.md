Esta es una API para gestionar productos y carritos de un sistema de e-commerce. La API está construida con Node.js, Express y utiliza ES6 Modules.

### Productos

- `GET /api/products`: Obtiene todos los productos.
- `GET /api/products/:pid`: Obtiene un producto por ID.
- `POST /api/products`: Crea un nuevo producto.
- `PUT /api/products/:pid`: Actualiza un producto por ID.
- `DELETE /api/products/:pid`: Elimina un producto por ID.

### Carritos

- `POST /api/carts`: Crea un nuevo carrito.
- `GET /api/carts/:cid`: Obtiene un carrito por ID.
- `POST /api/carts/:cid/product/:pid`: Añade un producto al carrito.

## Estructura del Proyecto
├── data

│ ├── products.json
│ └── carts.json

├── managers
│ ├── ProductManager.js
│ └── CartManager.js

├── routes
│ ├── products.js
│ └── carts.js

├── app.js

└── package.json

Descripción de los Archivos
app.js: Configuración principal de la aplicación, define las rutas y el puerto del servidor.

routes/products.js: Define las rutas y controladores para los productos.

routes/carts.js: Define las rutas y controladores para los carritos.

managers/ProductManager.js: Maneja la lógica y operaciones relacionadas con los productos.

managers/CartManager.js: Maneja la lógica y operaciones relacionadas con los carritos.

data/products.json: Archivo JSON que almacena los productos.

data/carts.json: Archivo JSON que almacena los carritos.


