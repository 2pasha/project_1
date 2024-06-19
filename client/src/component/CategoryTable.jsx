import { TableButtons } from './TableButtons';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteCategory, fetchCategories } from '../features/categories/categoriesSlice';

export const CategoryTable = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector(state => state.categories);

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  const handleDelete = (categoryId) => {
    dispatch(deleteCategory(categoryId));
  };

  return (
    <table className="table is-striped is-hoverable is-fullwidth is-bordered">
        <thead>
          <tr>
            <th className='has-text-centered'>№</th>
            <th className='has-text-centered'>Title</th>
            <th className='has-text-centered'>Description</th>
            <th className='has-text-centered'>Controll</th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => (
            <tr key={category._id}>
              <td>{index + 1}</td>
              <td>{category.title}</td>
              <td>{category.description}</td>
              <td><TableButtons onDelete={() => handleDelete(category._id)} /></td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};
