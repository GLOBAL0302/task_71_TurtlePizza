import { createAsyncThunk } from '@reduxjs/toolkit';
import { RootState } from '../../app/store.ts';
import { axiosApi } from '../../axiosApi.ts';

export const postOrdersThunk = createAsyncThunk<void, void, { state: RootState }>(
  'cart/postOrdersThunk',
  async (_arg, thunkAPI) => {
    const orders = thunkAPI.getState().cart.cartDishes.map((order) => {
      return {
        [order.dish.id]: order.amount,
      };
    });
    axiosApi.post('/orders.json', orders);
  },
);
