import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/categories/categoriesSlice';
import transactionReducer from '../features/transactions/transactionsSlice';

const store = configureStore({
  reducer: {
    categories: categoryReducer,
    transactions: transactionReducer
  }
});

export default store;
