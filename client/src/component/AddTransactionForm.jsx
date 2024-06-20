import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCategories } from '../features/categories/categoriesSlice';

export const AddTransactionForm = ({ setIsAddingANewField }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector(state => state.categories)

  console.log(categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch])

  const handleCancel = () => {
    
    setIsAddingANewField(false);
  }

  return (
    <form 
      className="form"
      // onSubmit={handleSubmit}
      autoComplete='off'
    >
      <div className="field">
        <label className="label">Category</label>
        <div className="select">
          <select>
            {categories.map(category => (
              <option
                key={category._id}
                // value={category.title}
              >
                {category.title}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Type</label>
        <div className="select">
          <select>
            <option
              // value={category.title}
            >
              Expenses
            </option>
            <option
              // value={category.title}
            >
              Revenues
            </option>
          </select>
        </div>
      </div>

      <div className="field">
        <label className="label">Amount</label>
        <div className="control">
          <input 
            className="input" 
            type='number' 
            placeholder="Enter amount"
            name="amount"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="Enter new description"
            name="description"
            // value={description}
            // onChange={(e) => setDescription(e.target.value)}
          />
        </div>
      </div>
      
      <div className="control">
        <button className="button is-primary mr-4">Submit</button>
        <button
          className="button is-warning" 
          type="button"
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};
