import { configureStore } from '@reduxjs/toolkit';
import { dishesReducer } from '../components/Dishes/dishesSlice.ts';
import { cartReducer } from '../components/Cart/cartSlice.ts';
import { ordersReducer } from '../components/Order/orderSlice.ts';

export const store = configureStore({
  reducer:{
    dishes:dishesReducer,
    cart:cartReducer,
    orders:ordersReducer,
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch