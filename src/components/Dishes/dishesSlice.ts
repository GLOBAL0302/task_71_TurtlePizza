import { createSlice } from '@reduxjs/toolkit';
import { IDishForm, IDishState } from '../../types.ts';
import { fetchAllDishes, fetchOneDish, postOneDish } from './dishesThunk.ts';

interface dishesSliceProps{
  dishesAll:IDishState[],
  oneDish:IDishForm | null,
  postDishLoading:boolean,
  fetchLoading:boolean,
  deleteDish:{
    loading:boolean,
    dishId:string
  }
}

const initialState:dishesSliceProps={
  dishesAll:[],
  oneDish:null,
  postDishLoading:false,
  fetchLoading:false,
  deleteDish:{
    loading:false,
    dishId:''
  }
}

export const dishesSlice = createSlice({
  name: 'dishes',
  initialState,
  reducers:{
    deleteDishReducer:(state, {payload})=>{
      state.dishesAll = state.dishesAll.filter(dish => dish.id !== payload.id);
    },

  },
  extraReducers:(builder)=>{
    builder
      .addCase(postOneDish.pending, state=>{
        state.postDishLoading = true;
      })
      .addCase(postOneDish.fulfilled, state=>{
        state.postDishLoading = false;
      })
      .addCase(postOneDish.rejected, state=>{
        state.postDishLoading = false;
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

    builder
      .addCase(fetchOneDish.pending, state=>{
        state.fetchLoading = true;
      })
      .addCase(fetchOneDish.fulfilled, (state,{payload})=>{
        state.fetchLoading = false;
        state.oneDish = payload;
      })
      .addCase(fetchOneDish.rejected, state=>{
        state.fetchLoading = false;
      })
  },

  selectors:{
    selectPostLoading: (state)=> state.postDishLoading,
    selectAllDishes: (state)=> state.dishesAll,
    selectOneDish: (state)=> state.oneDish,
    selectFetchLoading: (state)=> state.fetchLoading,
  }
});

export const dishesReducer = dishesSlice.reducer;
export const {deleteDishReducer} = dishesSlice.actions;
export const {selectPostLoading, selectAllDishes, selectFetchLoading,selectOneDish} = dishesSlice.selectors;