const Transaction = require('../models/Transaction.model.js');

const getAll = async () => {
  return Transaction.find();
};

const getById = async (id) => {
  return Transaction.findById(id);
};

const create = async ({
  category,
  operationType,
  amount,
  date,
  description,
}) => {
  return Transaction.create({
    category,
    operationType,
    amount,
    date,
    description,
  });
};

const remove = async (id) => {
  await Transaction.deleteOne({ _id: id });
};

const update = async (id, updateDate) => {
  await Transaction.findByIdAndUpdate(id, updateDate, { new: true });

  return Transaction.findById(id);
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
