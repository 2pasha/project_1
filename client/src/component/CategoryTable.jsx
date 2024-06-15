import { TableButtons } from './TableButtons';

export const CategoryTable = () => {
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
          <tr>
            <td>1</td>
            <td>Food</td>
            <td>Some text here can be</td>
            <td><TableButtons /></td>
          </tr>
        </tbody>
      </table>
  );
};
