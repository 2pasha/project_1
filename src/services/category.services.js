const Category = require('../models/Category.model.js');

const getAll = async () => {
  return Category.find();
};

const getOne = async (title) => {
  return Category.findOne({ title });
};

const create = async ({ title, description }) => {
  return Category.create({
    title: title, 
    description: description
  })
};

module.exports = {
  getAll,
  getOne,
  create,
};
