class ProductManager {
    constructor(products=[]) {
        this.products = products;
        this.nextId = 1;
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        if (this.products.some(product => product.code === code)) {
            console.log("Ya existe un producto con el mismo código.");
            return;
        }

        const newProduct = {
            id: this.nextId++,
            title,
            description,
            price,
            thumbnail,
            code,
            stock
        };

        this.products.push(newProduct);
    }

    getProducts() {
        return this.products;
    }

    getProductById(id) {
        const product = this.products.find(product => product.id === id);

        if (product) {
            return product;
        } else {
            console.log("Producto no encontrado.");
        }
    }
}

const productManager = new ProductManager();

productManager.addProduct("remeras", "Color negro", 400, "imagen1.jpg", "A23", 20);
productManager.addProduct("zapatillas", "Color blanco", 600, "imagen2.jpg", "W71", 30);

const allProducts = productManager.getProducts();
console.log("Todos los productos:", allProducts);

const productById = productManager.getProductById(1);
console.log("Producto por ID:", productById);

const nonExistentProduct = productManager.getProductById(3);