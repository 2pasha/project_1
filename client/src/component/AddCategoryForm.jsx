import { useState } from 'react';

export const AddCategoryForm = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();

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