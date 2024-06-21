import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateTransaction } from '../features/transactions/transactionsSlice';
import { validateDataTransaction } from '../helpers/validateDataTransaction';
import { formatDate } from '../helpers/formatDate';
import { fetchCategories } from '../features/categories/categoriesSlice';

export const EditTransactionForm = ({ transaction, onClose }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories);

  console.log(categories);
  console.log(transaction);

  const [category, setCategory] = useState(transaction.category);
  const [operationType, setOperationType] = useState(transaction.operationType);
  const [amount, setAmount] = useState(transaction.amount);
  const [date, setDate] = useState(formatDate(transaction.date));
  const [description, setDescription] = useState(transaction.description);

  const [errorMessage, setErrorMessage] = useState({});

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);


  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateDataTransaction(
      category,
      operationType,
      amount,
      date,
      description,
    );

    if (!isValid) {
      setErrorMessage(errors);

      return;
    }

    setErrorMessage({});

    try {
      dispatch(updateTransaction(
        { id: transaction._id, transaction: {
          category,
          operationType,
          amount,
          date,
          description,
        } }
      ));

      onClose();
    } catch (err) {
      console.error(`error updating transaction: ${err}`);
    };
  } 
  
  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <div className="field">
        <label className="label">Category</label>
        <div className="select">
          <select
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <option value="">Choose the option</option>
            {categories.map(category => (
              <option
                key={category._id}
                value={category.title}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>
        {errorMessage.category && <p className="has-text-danger">{errorMessage.category}</p>}
      </div>

      <div className="field">
        <label className="label">Type</label>
        <div className="select">
          <select
            value={operationType}
            onChange={e => setOperationType(e.target.value)}
          >
            <option value=''>Choose the operation type</option>
            <option
              value="exprenses"
            >
              expenses (-)
            </option>
            <option
              value="revenues"
            >
              revenues (+)
            </option>
          </select>
        </div>
        {errorMessage.operationType && <p className="has-text-danger">{errorMessage.operationType}</p>}
      </div>

      <div className="field">
        <label className="label">Amount</label>
        <div className="control">
          <input 
            className="input" 
            type='number' 
            placeholder="Enter amount"
            name="amount"
            value={amount}
            onFocus={() => setAmount('')}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        {errorMessage.amount && <p className="has-text-danger">{errorMessage.amount}</p>}
      </div>

      <div className="field">
        <label className="label">Date</label>
        <div className="control">
          <input 
            className="input" 
            type='date' 
            placeholder="Select data of transaction"
            name="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        {errorMessage.date && <p className="has-text-danger">{errorMessage.date}</p>}
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="Enter new description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {errorMessage.description && <p className="has-text-danger">{errorMessage.description}</p>}
      </div>
      
      <div className="control">
        <button className="button is-primary mr-4">Submit</button>
        <button
          className="button is-warning" 
          type="button"
          onClick={onClose}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
