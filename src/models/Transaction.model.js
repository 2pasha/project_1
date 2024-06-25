const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema(
  {
    category: { type: String, required: true },
    operationType: { type: String, required: true },
    amount: { type: Number, required: true },
    date: { type: Date, required: true },
    description: { type: String },
  },
  {
    versionKey: false,
  }
);

const Transaction = mongoose.model(
  'Transaction',
  transactionSchema,
  'Transactions'
);

module.exports = Transaction;
