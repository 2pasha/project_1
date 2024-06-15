import { AddCategoryForm } from '../component/AddCategoryForm';
import { CategoryTable } from '../component/CategoryTable';

export const CategoriesPage = () => {
  return (
    <div className="container">
      <h1 className="title">
        Categories
      </h1>

      <CategoryTable />

      <button className='button is-primary'>Add new field</button>

      <AddCategoryForm />
    </div>
  );
}; 