import { TableButtons } from './TableButtons';

export const TransactionTable = () => {
  const transactions = [{
    _id:"666beaeaaa9800b99c2986b6",
    category:"new two",
    operation_type:"revenues",
    amount:600,
    date:"2011-09-23T00:00:00.000Z",
    description:"12345"
  }]

  return (
    <>
      <table className="table is-striped is-hoverable is-fullwidth is-bordered">
        <thead>
          <tr>
            <th className='has-text-centered'>№</th>
            <th className='has-text-centered'>Category</th>
            <th className='has-text-centered'>Type</th>
            <th className='has-text-centered'>Amount</th>
            <th className='has-text-centered'>Description</th>
            <th className='has-text-centered'>Controll</th>
          </tr>
        </thead>
        <tbody>
          {transactions.length > 0 ? (
            transactions.map((transaction, index) => (
              <tr key={transaction._id}>
                <td>{index + 1}</td>
                <td>{transaction.category}</td>
                <td>{transaction.operation_type}</td>
                <td>{transaction.amount}</td>
                <td>{transaction.description}</td>
                <td><TableButtons 
                  onDelete={() => {}}
                  onEdit={() => {}}
                /></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6">No data yet</td>
            </tr>
          )}
        </tbody>
      </table>

      {/* {editingCategory && (
        <EditCategoryForm category={editingCategory} onClose={handleCloseEdit} />
      )} */}
    </>
  );
};
