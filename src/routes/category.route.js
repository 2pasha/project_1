const express = require('express');
const router = express.Router();
const Category = require('../models/Category.model.js');
const categoryController = require('../controllers/category.controller.js');

router.get('/category', categoryController.getOne);

// router.post('/category', (req, res) => {
//   const { title, description } = req.body;

//   const categoryInstance = new Category({
//     title: title,
//     description: description
//   });

//   return categoryInstance.save()
//     .then(() => {
//       res.send(categoryInstance);
//     })
//     .catch(err => {
//       res.send(err);
//     });
// });

module.exports = router;
