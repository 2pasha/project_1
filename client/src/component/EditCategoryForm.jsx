import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../features/categories/categoriesSlice';
import { validateDataCategory } from '../helpers/validateDataCategories';

export const EditCategoryForm = ({ category, onClose }) => {
  const dispatch =  useDispatch();
  const [title, setTitle] = useState(category.title);
  const [description, setDescription] = useState(category.description);
  const [errorMessage, setErrorMessage] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { isValid, errors } = validateDataCategory(
      title,
      description,
    );

    if (!isValid) {
      setErrorMessage(errors);

      return;
    }

    try {
      dispatch(updateCategory(
        { id: category._id, category: { title, description } }
      ));

      onClose();
    } catch (err) {
      console.error(`error updating category: ${err}`);
    }
  };

  return (
    <form className="form mb-4" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        {errorMessage.title && <p className="has-text-danger">{errorMessage.title}</p>}
      </div>

      <div className="field">
        <label className="label">Description</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
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
