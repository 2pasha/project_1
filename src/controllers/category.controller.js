const categoryServices = require('../services/category.services.js');

const getAll = async (req, res) => {
  try {
    const categories = await categoryServices.getAll();
    
    res.send(categories);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const getOne = async (title, res) => {
  try {
    const foundItem = await categoryServices.getOne(title);

    if (!foundItem) {
      return res.sendStatus(404);
    }

    res.send(foundItem);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const handleGets = async (req, res) => {
  const title = req.query.title;

  if (title) {
    await getOne(title, res);
  } else {
    getAll(req, res);
  }
};

const create = async (req, res) => {
  const { title, description } = req.body;

  if (!title || !description) {
    res.sendStatus(400);

    return;
  }

  try {
    const newCategory = await categoryServices.create({ title, description });

    res.status(201).send(newCategory);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
  getOne,
  handleGets,
  create,
};
