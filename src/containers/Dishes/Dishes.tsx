import { Box, Button, Grid2, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useCallback, useEffect, useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow.tsx';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectAllDishes } from './dishesSlice.ts';
import { fetchAllDishes } from './dishesThunk.ts';
import DishComponent from '../../components/DishComponent/DishComponent.tsx';

const Dishes = () => {
  const {pathname} = useLocation();
  const dispatch = useAppDispatch();
  const [modal, setModal] = useState(false);
  const dishesAll = useAppSelector(selectAllDishes);

  const fetchDishes = useCallback(async () => {
    await dispatch(fetchAllDishes());
  }, [])

  useEffect(() => {
    void fetchDishes()
  }, []);

  const handleModal = () => setModal((prev) => !prev);

  return (
    <Box component="div">
      <Grid2 container >
        <Grid2>
          <Typography variant="h5" component='h5'>
            Dishes
          </Typography>
        </Grid2>
        {pathname ==="/admin" ? <>
          <Grid2 marginLeft='auto'>
            <Button onClick={handleModal} variant="contained"  color="inherit">
              <Typography variant="body2" color="black" component="p">
                Add new dish
              </Typography>
            </Button>
          </Grid2></> : ""}
      </Grid2>
      <ModalWindow modalOpen={modal} onChangeModal={handleModal}/>
      <Grid2 marginTop={3} container spacing={2}>
        {dishesAll.map((dish) => (
          <DishComponent key={dish.id} dish={dish}/>
        ))}
      </Grid2>
    </Box>
  );
};

export default Dishes;