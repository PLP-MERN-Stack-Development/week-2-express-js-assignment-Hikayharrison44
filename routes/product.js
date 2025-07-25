// routes/products.js
const express = require('express');
const router = express.Router();
const {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
  getProductStats
} = require('../controllers/productsController');

router.get('/', getAllProducts);
router.get('/search', searchProducts);
router.get('/stats', getProductStats);
router.get('/:id', getProductById);
router.post('/', createProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;

// controllers/productsController.js
const { products } = require('../data/products');
const { NotFoundError, ValidationError } = require('../utils/error');

exports.getAllProducts = (req, res) => {
  const { category, page = 1, limit = 10 } = req.query;
  let result = [...products];
  if (category) result = result.filter(p => p.category === category);
  const start = (page - 1) * limit;
  res.json(result.slice(start, start + parseInt(limit)));
};

exports.getProductById = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  res.json(product);
};

exports.createProduct = (req, res, next) => {
  const { name, description, price, category, inStock } = req.body;
  if (!name || !price || !category) return next(new ValidationError('Missing required fields'));
  const newProduct = {
    id: Date.now().toString(),
    name,
    description,
    price,
    category,
    inStock
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
};

exports.updateProduct = (req, res, next) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return next(new NotFoundError('Product not found'));
  Object.assign(product, req.body);
  res.json(product);
};

exports.deleteProduct = (req, res, next) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return next(new NotFoundError('Product not found'));
  products.splice(index, 1);
  res.status(204).end();
};

exports.searchProducts = (req, res) => {
  const { name } = req.query;
  const result = products.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
  res.json(result);
};

exports.getProductStats = (req, res) => {
  const stats = {};
  products.forEach(p => {
    stats[p.category] = (stats[p.category] || 0) + 1;
  });
  res.json(stats);
};