import {createSlice} from '@reduxjs/toolkit';
import {createAsyncThunk} from '@reduxjs/toolkit';
import {ProductsStateType} from '../../types';

export const fetchProducts = createAsyncThunk('fetchProducts', async () => {
  const res = await fetch(
    'https://s3-eu-west-1.amazonaws.com/api.themeshplatform.com/products.json',
  );
  const {data} = await res?.json();
  return data;
});

const initialState: ProductsStateType = {
  isLoading: false,
  data: [],
  isError: false,
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchProducts.pending, state => {
      state.isLoading = true;
    });
    builder.addCase(fetchProducts.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      state.data = [...payload];
    });
    builder.addCase(fetchProducts.rejected, state => {
      state.isError = true;
    });
  },
});

export default productsSlice.reducer;
