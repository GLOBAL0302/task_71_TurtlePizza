import { createAsyncThunk } from '@reduxjs/toolkit';
import { dishForm } from '../../types.ts';
import { axiosApi } from '../../axiosApi.ts';

export const postOneDish = createAsyncThunk<void, dishForm>(
  'dishes/postOneDish',
  async(oneDish)=>{
    await axiosApi.post("/dishes.json", oneDish)
  }
)