import { createAsyncThunk } from '@reduxjs/toolkit';
import { dishForm, dishState } from '../../types.ts';
import { axiosApi } from '../../axiosApi.ts';

export const postOneDish = createAsyncThunk<void, dishForm>(
  'dishes/postOneDish',
  async(oneDish)=>{
    await axiosApi.post("/dishes.json", oneDish)
  }
);

export const fetchAllDishes = createAsyncThunk<dishState[], void>(
  "dishes/fetchAllDishes",
  async()=>{
    const {data} = await axiosApi.get("dishes.json");
    return Object.keys(data).map((dishId)=>{
      return {
        id:dishId,
        ...data[dishId],
      }
    })
  }
);

export const deleteDishById = createAsyncThunk<void, dishState>(
  "dishes/deleteDishById",
  async (dish)=>{
    await axiosApi.delete(`dishes/${dish.id}.json`)
  }
);

export const updateDishInfo = createAsyncThunk<void, {dishId:string, dish:dishForm}>(
  "dishes/updateDishInfo",
  async({dishId, dish})=>{
    await axiosApi.put(`dishes/${dishId}.json`, dish)
  }
)