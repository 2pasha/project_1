'use strict';

const express = require('express');
const cors = require('cors');
const categoryRouter = require('./routes/category.route.js');
const transactionRouter = require('./routes/transaction.route.js');

const createServer = () => {
  const app = express();

  app.use(cors());

  app.use('/category', express.json(), categoryRouter);
  app.use('/transaction', express.json(), transactionRouter);

  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
};

module.exports = {
  createServer,
};
