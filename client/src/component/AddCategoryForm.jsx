import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../features/categories/categoriesSlice';
import { validateDataCategory } from '../helpers/validateDataCategories';


export const AddCategoryForm = ({ setIsAddingANewField }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
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
      dispatch(addCategory({ title, description }));
      setTitle('');
      setDescription('');
      setIsAddingANewField(false);
    } catch (error) {
      console.error('Error adding category:', error);
    }
  };

  const handleCancel = () => {
    setTitle('');
    setDescription('');
    setIsAddingANewField(false);
  }

  return (
    <form 
      className="form"
      onSubmit={handleSubmit}
      autoComplete='off'
    >
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="Enter new title"
            name="title"
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
          onClick={handleCancel}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};