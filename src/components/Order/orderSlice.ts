import { createSlice } from '@reduxjs/toolkit';
import { IOrders } from '../../types.ts';
import { fetchOrdersThunk } from './orderThunk.ts';

interface orderSlice {
  ordersLoading: boolean;
  fetchAllOrders: IOrders[];
}

const initialState: orderSlice = {
  ordersLoading: false,
  fetchAllOrders: [],
};

export const orderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrdersThunk.pending, (state) => {
        state.ordersLoading = true;
      })
      .addCase(fetchOrdersThunk.fulfilled, (state, { payload }) => {
        state.ordersLoading = false;
        state.fetchAllOrders = payload;
      })
      .addCase(fetchOrdersThunk.rejected, (state) => {
        state.ordersLoading = false;
      });
  },
  selectors: {
    selectOrdersLoading: (state) => state.ordersLoading,
    selectAllOrders: (state) => state.fetchAllOrders,
  },
});

export const ordersReducer = orderSlice.reducer;
export const {} = orderSlice.actions;
export const { selectOrdersLoading, selectAllOrders } = orderSlice.selectors;
