import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateCategory } from '../features/categories/categoriesSlice';

export const EditCategoryForm = ({ category, onClose }) => {
  const dispatch =  useDispatch();
  const [title, setTitle] = useState(category.title);
  const [description, setDescription] = useState(category.description);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(updateCategory(
        { id: category._id, category: { title, description } }
      ));

      onClose();
    } catch (err) {
      console.error('error updating category: error');
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
