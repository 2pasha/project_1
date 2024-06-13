const categoryServices = require('../services/category.services.js');

const getOne = async (req, res) => {
  const title = req.query.title;

  if (!title) {
    res.sendStatus(400);
  }

  const foundItem = await categoryServices.getOne(title);

  if (!foundItem) {
    res.statusCode(404);
    return;
  }

  res.send(foundItem);
};

module.exports = {
  getOne,
};
