import fs from 'fs';

const path = './data/carts.json';

class CartManager {
    constructor() {
        this.carts = [];
        this.loadCarts();
    }

    loadCarts() {
        try {
            const data = fs.readFileSync(path, 'utf-8');
            this.carts = JSON.parse(data);
        } catch (error) {
            this.carts = [];
        }
    }

    saveCarts() {
        const data = JSON.stringify(this.carts, null, 2);
        fs.writeFileSync(path, data, 'utf-8');
    }

    addCart() {
        const newCart = {
            id: this.carts.length + 1,
            products: [],
        };
        this.carts.push(newCart);
        this.saveCarts();
        return newCart;
    }

    getCartById(id) {
        return this.carts.find(cart => cart.id === id);
    }

    updateCart(id, updatedCart) {
        const index = this.carts.findIndex(cart => cart.id === id);
        if (index !== -1) {
            this.carts[index] = { ...this.carts[index], ...updatedCart };
            this.saveCarts();
            return this.carts[index];
        }
        return null;
    }

    deleteCart(id) {
        const index = this.carts.findIndex(cart => cart.id === id);
        if (index !== -1) {
            const deletedCart = this.carts[index];
            this.carts.splice(index, 1);
            this.saveCarts();
            return deletedCart;
        }
        return null;
    }
}

export default CartManager;
