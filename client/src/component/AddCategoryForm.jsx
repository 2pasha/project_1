import { useState } from 'react';
import * as api from '../api/categories';


export const AddCategoryForm = ({ onAddCategory }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { title, description } = formData;
    const newCategory = { title, description };

    try {
      const addedCategory = await api.add(newCategory);

      onAddCategory(addedCategory);
      setFormData({
        title: '',
        description: ''
      });
    } catch (error) {
      console.error('failed to add category', error);
    }


    console.log('Submitted data:', formData);
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <div className="field">
        <label className="label">Title</label>
        <div className="control">
          <input 
            className="input" 
            type="text" 
            placeholder="Enter new title"
            name="title"
            value={formData.title}
            onChange={handleChange} 
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
            value={formData.description}
            onChange={handleChange}
          />
        </div>
      </div>
      
      <div className="control">
        <button className="button is-primary">Submit</button>
      </div>
    </form>
  );
};