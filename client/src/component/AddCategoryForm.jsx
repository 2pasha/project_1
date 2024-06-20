import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addCategory } from '../features/categories/categoriesSlice';


export const AddCategoryForm = ({ setIsAddingANewField }) => {
  const dispatch = useDispatch();

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await dispatch(addCategory({ title, description }));
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