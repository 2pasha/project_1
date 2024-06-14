const mongoose = require('mongoose');

const transactionSchema = new mongoose.Schema({
  category: { type: String, required: true },
  operation_type: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, required: true, default: Date.now },
  description: { type: String },
}, {
  versionKey: false
});

const Transaction = mongoose.model(
  "Transaction",
  transactionSchema,
  "Transactions"
);

module.exports = Transaction;
