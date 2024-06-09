import fs from 'fs';

const path = './data/products.json';

class ProductManager {
    constructor() {
        this.products = [];
        this.loadProducts();
    }

    loadProducts() {
        try {
            const data = fs.readFileSync(path, 'utf-8');
            this.products = JSON.parse(data);
        } catch (error) {
            this.products = [];
        }
    }

    saveProducts() {
        const data = JSON.stringify(this.products, null, 2);
        fs.writeFileSync(path, data, 'utf-8');
    }

    addProduct(title, description, price, status, stock, category, thumbnail) {
        const newProduct = {
            id: this.products.length + 1,
            title,
            description,
            price,
            status,
            stock,
            category,
            thumbnail
        };
        this.products.push(newProduct);
        this.saveProducts();
        return newProduct;
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        return this.products.find(product => product.id === id);
    }

    updateProduct(id, updatedProduct) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            this.products[index] = { ...this.products[index], ...updatedProduct };
            this.saveProducts();
            return this.products[index];
        }
        return null;
    }

    deleteProduct(id) {
        const index = this.products.findIndex(product => product.id === id);
        if (index !== -1) {
            const deletedProduct = this.products[index];
            this.products.splice(index, 1);
            this.saveProducts();
            return deletedProduct;
        }
        return null;
    }
}

export default ProductManager;
