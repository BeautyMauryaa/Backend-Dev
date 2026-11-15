// you need to support:
// - Fetch all products.
// - Fetch one product using its ID.
// - Fetch products by category.
// - Search products by name.
// One possible API design:
// Requirement  Endpoint
// All products GET /products
// One product  GET /products/:id
// Filter by category   GET /products?category=electronics
// Search by name   GET /products?search=phone

const express = require("express");
const app = express();
app.use(express.json());

const products = [
    { id: 1, name: "iPhone", category: "electronics" },
    { id: 2, name: "Samsung TV", category: "electronics" },
    { id: 3, name: "Running Shoes", category: "fashion" },
    { id: 4, name: "Phone Cover", category: "accessories" }
];

// 1. Fetch all products, filter by category, or search by name (Combined endpoint)
app.get("/products", (req, res) => {
    let result = products;
    const { category, search } = req.query;

    // Filter by category if provided
    if (category) {
        result = result.filter(
            product => product.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Search by name if provided
    if (search) {
        result = result.filter(
            product => product.name.toLowerCase().includes(search.toLowerCase())
        );
    }

    res.status(200).json({
        message: "Products fetched successfully",
        count: result.length,
        products: result
    });
});

// 2. Fetch one product using its ID
app.get("/products/:id", (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);

    if (!product) {
        return res.status(404).json({ message: "Product not found" });
    }

    res.status(200).json({
        message: "Product fetched successfully",
        product: product
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});