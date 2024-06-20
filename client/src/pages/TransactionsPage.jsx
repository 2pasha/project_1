import { useState } from 'react';
import { AddTransactionForm } from '../component/AddTransactionForm';
import { TransactionTable } from '../component/TransactionTable';

export const TransactionsPage = () => {
  const [isAddingANewField, setIsAddingANewField] = useState(false);
  const [editingTransaction, seteditingTransaction] = useState(null);

  return (
    <div className="container">
      <h1 className="title">
        Transaction
      </h1>

      <TransactionTable />

      {!editingTransaction && !isAddingANewField && (
        <button 
          className='button is-primary'
          onClick={() => setIsAddingANewField(prevState => !prevState)}
        >
          Add new field
        </button>
      )}

      {isAddingANewField && (
        <AddTransactionForm setIsAddingANewField={setIsAddingANewField} />
      )}
    </div>
  );
};
