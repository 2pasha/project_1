import { useDispatch, useSelector } from 'react-redux';
import { FormForReports } from '../component/FormForReports';
import TransactionReports from '../component/TransactionReport';
import { useEffect, useState } from 'react';
import { fetchTransactions } from '../features/transactions/transactionsSlice';

export const ReportsPage = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector(state => state.transactions);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    dispatch(fetchTransactions());
  }, [dispatch]);

  const handleDateRangeChange = (startDate, endDate) => {
    const start = new Date(startDate);
    const end = new Date(endDate);
    
    const filtered = transactions.filter(transaction => {
      const transactionDate = new Date(transaction.date);

      return transactionDate >= start && transactionDate <= end;
    });

    setFilteredTransactions(filtered);
  };

  return (
    <div className="container has-text-centered">
      <h1 className="title">
        Generate statistic
      </h1>

      <FormForReports onDateRangeChange={handleDateRangeChange} />

      {console.log(filteredTransactions)}

      {filteredTransactions.length > 0 ? (
        <TransactionReports transactions={transactions} /> 
      ) : (
        <p className='mt-4'>No transactions found for the selected date range.</p>
      )}
    </div>
  );
};
