const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller.js');

router.get('/', categoryController.handleGets);

router.get('/:id', categoryController.getById);

router.post('/', categoryController.create);

router.delete('/:id', categoryController.remove);

router.patch('/:id', categoryController.update);

module.exports = router;
