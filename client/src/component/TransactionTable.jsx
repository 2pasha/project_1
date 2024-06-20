import { useDispatch, useSelector } from 'react-redux';
import { TableButtons } from './TableButtons';
import { useEffect } from 'react';
import { fetchTransactions } from '../features/transactions/transactionsSlice';

export const TransactionTable = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

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
