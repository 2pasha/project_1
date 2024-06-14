const Category = require('../models/Category.model.js');

const getAll = async () => {
  return Category.find();
};

const getOne = async (title) => {
  return Category.findOne({ title });
};

const getById = async (id) => {
  return Category.findById(id);
};

const create = async ({ title, description }) => {
  return Category.create({
    title, 
    description
  })
};

const remove = async (id) => {
  await Category.deleteOne({ _id: id });
};

const update = async (id, updateData) => {
  await Category.findByIdAndUpdate(id, updateData, { new: true });

  return Category.findById(id); 
};

module.exports = {
  getAll,
  getOne,
  getById,
  create,
  remove,
  update,
};
