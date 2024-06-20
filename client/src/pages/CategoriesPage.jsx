import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddCategoryForm } from '../component/AddCategoryForm';
import { CategoryTable } from '../component/CategoryTable';
import { fetchCategories } from '../features/categories/categoriesSlice';

export const CategoriesPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [isAddingANewField, setIsAddingANewField] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);

  return (
    <div className="container">
      <h1 className="title">
        Categories
      </h1>

      <CategoryTable
        editingCategory={editingCategory}
        setEditingCategory={setEditingCategory}
      />


      {!editingCategory && !isAddingANewField && (
        <button 
          className='button is-primary'
          onClick={() => setIsAddingANewField(prevState => !prevState)}
        >
          Add new field
        </button>
      )}

      {isAddingANewField && (
        <AddCategoryForm setIsAddingANewField={setIsAddingANewField} />
      )}
    </div>
  );
}; 