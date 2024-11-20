import { Box, Button, Grid2, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';
import ModalWindow from '../../components/ModalWindow/ModalWindow.tsx';
import DishForm from '../../components/DishForm/DishForm.tsx';
import { dishState } from '../../types.ts';

const Dishes = () => {
  const {pathname} = useLocation();
  const [modal, setModal] = useState(false);

  const [dishesAll, setDishesAll] = useState<dishState[]>();

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
      <ModalWindow modalOpen={modal} onChangeModal={handleModal}>
        <DishForm/>
      </ModalWindow>
    </Box>
  );
};

export default Dishes;