import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchCategories = createAsyncThunk(
  'category',
  async () => {
    return axios.get('/category')
      .then(res => res.data)
  }
);

export const addCategory = createAsyncThunk(
  'category/addCategory',
  async(newCategory) => {
    const responce = await axios.post('/category', newCategory);

    return responce.data;
  }
);

const cateforySlice = createSlice({
  name: 'category',
  initialState: {
    categories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = action.payload;
      })
      .addCase(fetchCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default cateforySlice.reducer;
