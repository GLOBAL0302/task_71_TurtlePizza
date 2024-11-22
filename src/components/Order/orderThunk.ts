import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosApi } from '../../axiosApi.ts';

export const fetchOrdersThunk = createAsyncThunk('orders/fetchOrdersThunk', async () => {
  const { data } = await axiosApi.get('/orders.json');
  return Object.keys(data).map((order) => {
    return {
      orderId: order,
      ordersInfo: data[order],
    };
  });
});
