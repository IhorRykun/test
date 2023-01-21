const express = require('express');
const { getProducts } = require('../dataBase/repositories/productsRepository');
const router = express.Router();

router.get('/', async (req, res, next) => {
  const result = await getProducts();
  res.status(200).json(result);
});

router.post('/', async (req, res, next) => {
  res.json({ message: `message` });
});

router.delete('/:artivleId', async (req, res, next) => {
  res.json({ message: `message` });
});

module.exports = router;
