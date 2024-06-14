const Transaction = require('../models/Transaction.model.js');

const getAll = async () => {
  return Transaction.find();
};

module.exports = {
  getAll,
};
