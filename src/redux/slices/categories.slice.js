import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../helpers/api';

const initialState = {
  latte: [],
  espresso: [],
  popular: [],
  post: {
    id: 0, name: '', image: '', price: 0,
  },
  status: 'idle',
  error: null,
};

export const getCoffeePosts = createAsyncThunk(
  'data/getCoffeePosts',
  async () => {
    const response = await api.get('/posts');
    return response.data;
  },
);

export const getCoffeePost = createAsyncThunk(
  'data/getCoffeePost',
  async (id) => {
    const response = await api.get(`/posts/${id}`);
    return response.data;
  },
);

/* eslint-disable no-param-reassign */
const categoryDataSlice = createSlice({
  name: 'data',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // get coffees
    builder.addCase(getCoffeePosts.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.popular = action.payload.popular;
      state.espresso = action.payload.espresso;
      state.latte = action.payload.latte;
    });

    builder.addCase(getCoffeePost.fulfilled, (state, action) => {
      state.status = 'succeeded';
      state.post = action.payload;
    });
  },
});

export default categoryDataSlice.reducer;
