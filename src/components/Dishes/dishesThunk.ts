import { createAsyncThunk } from '@reduxjs/toolkit';
import { IDishForm, IDishState } from '../../types.ts';
import { axiosApi } from '../../axiosApi.ts';

export const postOneDish = createAsyncThunk<void, IDishForm>('dishes/postOneDish', async (oneDish) => {
  await axiosApi.post('/dishes.json', oneDish);
});

export const fetchAllDishes = createAsyncThunk<IDishState[], void>('dishes/fetchAllDishes', async () => {
  const { data } = await axiosApi.get('dishes.json');
  return Object.keys(data).map((dishId) => {
    return {
      id: dishId,
      ...data[dishId],
    };
  });
});

export const fetchOneDish = createAsyncThunk<IDishForm, string>('dishes/fetchOneDish', async (dishId) => {
  const { data } = await axiosApi.get(`dishes/${dishId}.json`);
  return data;
});

export const deleteDishById = createAsyncThunk<void, IDishState>('dishes/deleteDishById', async (dish) => {
  await axiosApi.delete(`dishes/${dish.id}.json`);
});

export const updateDishInfo = createAsyncThunk<void, { dishId: string | undefined; dish: IDishForm }>(
  'dishes/updateDishInfo',
  async ({ dishId, dish }) => {
    await axiosApi.put(`dishes/${dishId}.json`, dish);
  },
);
