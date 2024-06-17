import { useEffect, useState } from 'react';
import { AddCategoryForm } from '../component/AddCategoryForm';
import { CategoryTable } from '../component/CategoryTable';
import * as api from '../api/categories';
import cn from 'classnames';

export const CategoriesPage = () => {
  const [categories, setCategories] = useState([]);
  const [isAddingANewField, setIsAddingANewField] = useState(false);

  const loadCategories = () => api.getAll().then(setCategories);

  useEffect(() => {
    loadCategories();
  }, []);

  const handleAddCategory = (newCategory) => {
    setCategories((prevState) => [...prevState, newCategory]);
    setIsAddingANewField(false);
  };

  return (
    <div className="container">
      <h1 className="title">
        Categories
      </h1>

      <CategoryTable categories={categories} />

      <button 
        className={cn(
          'button', 
          {'is-warning': isAddingANewField, 'is-primary': !isAddingANewField}
        )}
        onClick={() => setIsAddingANewField(prevState => !prevState)}
      >
        {isAddingANewField ? 'Cancel' : 'Add new field'}
      </button>


      {isAddingANewField ? <AddCategoryForm onAddCategory={handleAddCategory}   /> : ''}
    </div>
  );
}; 