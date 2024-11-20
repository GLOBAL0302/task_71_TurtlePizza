import { createSlice } from '@reduxjs/toolkit';
import { dishState } from '../../types.ts';
import { postOneDish } from './dishesThunk.ts';

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
  },
  selectors:{
    selectPostLoading: (state)=> state.postDish
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {} = dishesSlice.actions;
export const {selectPostLoading} = dishesSlice.selectors;