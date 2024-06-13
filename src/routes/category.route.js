const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller.js');

router.get('/', categoryController.handleGets);

router.post('/', categoryController.create);

module.exports = router;
