const Transaction = require('../models/Transaction.model.js');

const getAll = async () => {
  return Transaction.find();
};

const getById = async (id) => {
  return Transaction.findById(id);
};

const create = async ({
  category,
  operation_type,
  amount,
  date,
  description
}) => {
  return Transaction.create({
    category,
    operation_type,
    amount,
    date,
    description
  });
};

const remove = async (id) => {
  await Transaction.deleteOne({ _id: id });
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
};
