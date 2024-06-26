const transactionServises = require('../services/transaction.services.js');

const getAll = async (req, res) => {
  try {
    const transactions = await transactionServises.getAll();

    res.send(transactions);
  } catch (error) {
    res.sendStatus(500).send({ error: error.message });
  }
};

const getById = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const transaction = await transactionServises.getById(id);

  if (!transaction) {
    res.sendStatus(404);

    return;
  }

  res.send(transaction);
};

const create = async (req, res) => {
  const newData = req.body;
  const { category, operationType, amount, date } = newData;

  if (!category || !amount || !operationType) {
    res.sendStatus(400);

    return;
  }

  try {
    const newTransaction = await transactionServises.create(newData);

    res.status(201).send(newTransaction);
  } catch (error) {
    res.status(500).send({ error: error.message });
  }
};

const remove = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  if (!(await transactionServises.getById(id))) {
    res.sendStatus(404);

    return;
  }

  await transactionServises.remove(id);
  res.sendStatus(204);
};

const update = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    res.sendStatus(400);

    return;
  }

  const newData = req.body;
  const { category, operationType, amount, date } = newData;

  if (!category || !operationType || !amount || !date) {
    res.sendStatus(400);

    return;
  }

  try {
    const transaction = await transactionServises.getById(id);

    if (!transaction) {
      return res.sendStatus(404);
    }

    const updatedTransaction = await transactionServises.update(id, newData);

    res.send(updatedTransaction);
  } catch {
    res.status(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
