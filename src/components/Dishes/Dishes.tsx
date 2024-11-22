import { Box, Grid2 } from '@mui/material';
import { useParams } from 'react-router-dom';
import { useCallback, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectAllDishes } from './dishesSlice.ts';
import { fetchAllDishes, fetchOneDish } from './dishesThunk.ts';
import DishComponent from './DishComponent.tsx';

const Dishes = () => {
  const dispatch = useAppDispatch();
  const dishesAll = useAppSelector(selectAllDishes);
  const { id } = useParams();

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchAllDishes());
    if (id) {
      await dispatch(fetchOneDish(id));
    }
  }, [id]);

  useEffect(() => {
    void fetchDishes();
  }, []);

  return (
    <Box component="div">
      <Grid2 marginTop={3} container spacing={2}>
        {dishesAll.map((dish) => (
          <DishComponent key={dish.id} dish={dish} />
        ))}
      </Grid2>
    </Box>
  );
};

export default Dishes;
