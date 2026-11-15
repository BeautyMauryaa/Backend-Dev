const express = require("express");
const app = express();
app.use(express.json());

// Sample data
const products = [
    { id: 1, name: "iPhone", category: "electronics" },
    { id: 2, name: "Samsung TV", category: "electronics" },
    { id: 3, name: "Running Shoes", category: "fashion" },
    { id: 4, name: "Phone Cover", category: "accessories" },
    { id: 5, name: "Laptop", category: "electronics" },
    { id: 6, name: "Jacket", category: "fashion" }
];

// 1. Filter products & Pagination (GET /products?category=electronics&page=1&limit=2)
app.get("/products", (req, res) => {
    let result = [...products];
    const { category, page = 1, limit = 10 } = req.query;

    // Filter by category if provided
    if (category) {
        result = result.filter(
            product => product.category.toLowerCase() === category.toLowerCase()
        );
    }

    // Pagination logic
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const startIndex = (pageNum - 1) * limitNum;
    const endIndex = startIndex + limitNum;
    const paginatedProducts = result.slice(startIndex, endIndex);

    res.status(200).json({
        message: "Products fetched successfully",
        totalResults: result.length,
        page: pageNum,
        limit: limitNum,
        products: paginatedProducts
    });
});

// 2. Fetch one product using its ID (GET /products/:id)
app.get("/products/:id", (req, res) => {
    const productid = parseInt(req.params.id);
    const foundproduct = products.find(p => p.id === productid);

    if (!foundproduct) {
        return res.status(404).json({ message: "product not found" });
    }

    res.status(200).json({
        message: "product fetched successfully",
        product: foundproduct
    });
});

const port = 3000;
app.listen(port, () => {
    console.log(`server running on port ${port}`);
});