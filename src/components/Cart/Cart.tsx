import { Button, Grid2, Typography } from '@mui/material';
import { useAppSelector } from '../../app/hooks.ts';
import { selectCartDishes } from './cartSlice.ts';
import { IDishCart } from '../../types.ts';
import { NavLink } from 'react-router-dom';

const Cart = () => {
  const cartDishes:IDishCart[] = useAppSelector(selectCartDishes);

  const total = cartDishes.reduce((acc, cartDish)=>{
    acc += cartDish.amount * cartDish.dish.price
    return acc;
  }, 0)

  return (
    <Grid2
      sx={{
        padding: '2rem',
        border:"2px dashed black"
      }}
      container
      alignItems="center"
      marginTop={10}>
      <Grid2>
        <Typography variant="h5" component='p' color="black">
           Total Order : <strong style={{textDecoration:'underline'}}>{total}</strong>
        </Typography>
      </Grid2>
      <Grid2 marginLeft="auto">
          <Button disabled={cartDishes.length === 0} variant="contained"  color="inherit">
            <NavLink to="/checkOut">
            Checkout
            </NavLink>
          </Button>
      </Grid2>
    </Grid2>
  );
};

export default Cart;