const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
}, {
  versionKey: false
});  

const Category = mongoose.model(
  "Category", 
  categorySchema, 
  "Categories",
);

module.exports = Category;
