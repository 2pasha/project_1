const { Category } = require('../models/Category.model.js');

const getOne = async (title) => {
  return Category.findOne({ title });
};

module.exports = {
  getOne,
};
