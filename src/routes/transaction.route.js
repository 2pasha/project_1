const express = require('express');
const router = express.Router();

const transactionController = require('../controllers/transaction.controller.js');

router.get('/', transactionController.getAll);

router.get('/:id', transactionController.getById);

router.post('/', transactionController.create);

router.delete('/:id', transactionController.remove);

router.patch('/:id', transactionController.update);

module.exports = router;