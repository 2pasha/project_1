import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchTransactions = createAsyncThunk(
  '/transaction',
  async () => {
    return axios.get('/transaction')
      .then(res => res.data)
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
  }
});

export default transactionSlice.reducer;
