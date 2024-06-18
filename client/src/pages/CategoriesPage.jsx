import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AddCategoryForm } from '../component/AddCategoryForm';
import { CategoryTable } from '../component/CategoryTable';
import * as api from '../api/categories';
import cn from 'classnames';
import { fetchCategories } from '../features/categories/categoriesSlice';

export const CategoriesPage = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.categories);
  
  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const [isAddingANewField, setIsAddingANewField] = useState(false);

  // const handleAddCategory = (newCategory) => {
  //   setCategories((prevState) => [...prevState, newCategory]);
  //   setIsAddingANewField(false);
  // };

  return (
    <div className="container">
      <h1 className="title">
        Categories
      </h1>

      <CategoryTable 
        categories={categories}
        // setCategories={setCategories}
      />

      <button 
        className={cn(
          'button', 
          {'is-warning': isAddingANewField, 'is-primary': !isAddingANewField}
        )}
        onClick={() => setIsAddingANewField(prevState => !prevState)}
      >
        {isAddingANewField ? 'Cancel' : 'Add new field'}
      </button>


      {/* {isAddingANewField ? <AddCategoryForm onAddCategory={handleAddCategory}   /> : ''} */}
      <AddCategoryForm />
    </div>
  );
}; 