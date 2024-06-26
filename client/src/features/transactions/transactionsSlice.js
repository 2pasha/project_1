import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  '/transaction',
  async () => {
    return axios.get('/transaction')
      .then(res => res.data)
  }
);

export const addTransaction = createAsyncThunk(
  '/transaction/addTransaction',
  async (newTransaction) => {
    const responce = await axios.post('/transaction', newTransaction);

    return responce.data;
  }
);

export const deleteTransaction = createAsyncThunk(
  '/transaction/deleteTransaction',
  async (transactionId) => {
    await axios.delete(`/transaction/${transactionId}`);

    return transactionId;
  }
);

export const updateTransaction = createAsyncThunk(
  '/transaction/updateCategory',
  async ({ id, transaction }) => {
    const responce = await axios.patch(`/transaction/${id}`, transaction);

    return responce.data;
  }
);

const transactionSlice = createSlice({
  name: 'transaction',
  initialState: {
    transactions: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTransactions.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTransactions.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = action.payload;
      })
      .addCase(fetchTransactions.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(addTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions.push(action.payload);
      })
      .addCase(addTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteTransaction.fulfilled, (state, action) => {
        state.loading = false;
        state.transactions = state.transactions.filter(transaction => transaction._id !== action.payload);
      })
      .addCase(deleteTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateTransaction.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateTransaction.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.transactions.findIndex(transaction => (
          transaction._id === action.payload._id
        ));

        if (index !== -1) {
          state.transactions[index] = action.payload;
        }
      })
      .addCase(updateTransaction.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
  }
});

export default transactionSlice.reducer;
