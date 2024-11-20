import { configureStore } from '@reduxjs/toolkit';
import { dishesReducer } from '../containers/Dishes/dishesSlice.ts';

export const store = configureStore({
  reducer:{
    dishes:dishesReducer
  }
});


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch