import { createSlice } from '@reduxjs/toolkit';
import { dishState } from '../../types.ts';
import { fetchAllDishes, postOneDish } from './dishesThunk.ts';

interface dishesSliceProps{
  dishesAll:dishState[],
  postDish:boolean,
  fetchLoading:boolean
}

const initialState:dishesSliceProps={
  dishesAll:[],
  postDish:false,
  fetchLoading:false
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers:{
    deleteDishReducer:(state, {payload})=>{
      state.dishesAll = state.dishesAll.filter(dish => dish.id !== payload.id);
    }
  },
  extraReducers:(builder)=>{
    builder
      .addCase(postOneDish.pending, state=>{
        state.postDish = true;
      })
      .addCase(postOneDish.fulfilled, state=>{
        state.postDish = false;
      })
      .addCase(postOneDish.rejected, state=>{
        state.postDish = false;
      })

    builder
      .addCase(fetchAllDishes.pending, state=>{
        state.fetchLoading = true;
      })
      .addCase(fetchAllDishes.fulfilled, (state,{payload})=>{
        state.fetchLoading = false;
        state.dishesAll = payload
      })
      .addCase(fetchAllDishes.rejected, state=>{
        state.fetchLoading = false;
      })
  },
  selectors:{
    selectPostLoading: (state)=> state.postDish,
    selectAllDishes: (state)=> state.dishesAll,
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {deleteDishReducer} = dishesSlice.actions;
export const {selectPostLoading, selectAllDishes} = dishesSlice.selectors;