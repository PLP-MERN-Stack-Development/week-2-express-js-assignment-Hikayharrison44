// middleware/errorHandler.js
module.exports = (err, req, res, next) => {
  res.status(err.statusCode || 500).json({ error: err.message || 'Internal Server Error' });
};

// utils/error.js
class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 404;
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.statusCode = 400;
  }
}

module.exports = {
  NotFoundError,
  ValidationError
};

// data/products.js
exports.products = [
  { id: '1', name: 'Laptop', description: 'High-performance laptop with 16GB RAM', price: 1200, category: 'electronics', inStock: true },
  { id: '2', name: 'Smartphone', description: 'Latest model with 128GB storage', price: 800, category: 'electronics', inStock: true },
  { id: '3', name: 'Coffee Maker', description: 'Programmable coffee maker with timer', price: 50, category: 'kitchen', inStock: false }
];