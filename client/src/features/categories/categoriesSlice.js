import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:3005';
axios.defaults.baseURL = 'https://personal-finance-rz2s.onrender.com';

export const fetchCategories = createAsyncThunk(
  '/category',
  async () => {
    return axios.get('/category')
      .then(res => res.data)
  }
);

export const addCategory = createAsyncThunk(
  '/category/addCategory',
  async(newCategory) => {
    const responce = await axios.post('/category', newCategory);

    return responce.data;
  }
);

export const deleteCategory = createAsyncThunk(
  '/category/deleteCategory',
  async (categoryId) => {
    await axios.delete(`/category/${categoryId}`);

    return categoryId;
  }
);

export const updateCategory = createAsyncThunk(
  '/category/updateCategory',
  async ({ id, category }) => {
    const responce = await axios.patch(`/category/${id}`, category);

    return responce.data;
  }
);

const categorySlice = createSlice({
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
      })
      .addCase(addCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories.push(action.payload);
      })
      .addCase(addCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(deleteCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(deleteCategory.fulfilled, (state, action) => {
        state.loading = false;
        state.categories = state.categories.filter(category => category._id !== action.payload);
      })
      .addCase(deleteCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateCategory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateCategory.fulfilled, (state, action) => {
        state.loading = false;

        const index = state.categories.findIndex(category => (
          category._id === action.payload._id
        ));

        if (index !== -1) {
          state.categories[index] = action.payload;
        }
      })
      .addCase(updateCategory.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export default categorySlice.reducer;
