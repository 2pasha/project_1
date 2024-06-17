import { TableButtons } from './TableButtons';

export const CategoryTable = ({ categories }) => {

  console.log(categories);

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
              <td><TableButtons /></td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};
