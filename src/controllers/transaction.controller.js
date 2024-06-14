const transactionServises = require('../services/transaction.services.js');

const getAll = async (req, res) => {
  try {
    const transactions = await transactionServises.getAll();

    res.send(transactions);
  } catch (error) {
    res.sendStatus(500).send({ error: error.message });
  }
};

module.exports = {
  getAll,
};
