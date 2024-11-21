import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { clearCart, selectCartDishes } from '../../components/Cart/cartSlice.ts';
import { Button, Grid2, Typography } from '@mui/material';
import CheckOutItem from '../../components/CheckOutItem/CheckOutItem.tsx';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import CancelIcon from '@mui/icons-material/Cancel';
import { useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const CheckOut = () => {
  const selectCartDish = useAppSelector(selectCartDishes);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartDishes = useAppSelector(selectCartDishes);

  const onClickCancel = () => {
    dispatch(clearCart());
    navigate('/');
  };

  const total = cartDishes.reduce((acc, cartDish) => {
    acc += cartDish.amount * cartDish.dish.price;
    return acc;
  }, 0);

  return (
    <Grid2>
      <Typography variant="h6" component="h6" color="textSecondary">
        Your orders;
      </Typography>
      {selectCartDish.length > 0 ? <>
        <Grid2 gap={2}>
          {selectCartDish.map((item) => (
            <CheckOutItem key={item.dish.id} dishCart={item} />
          ))}
        </Grid2>
        <Grid2 container gap={2}>
          <Typography variant="h4" component="p" color="black">
            total: {total}
          </Typography>
          <Button sx={{ marginLeft: 'auto' }} variant="contained" color="success" startIcon={<DeliveryDiningIcon />}>
            Order
          </Button>
          <Button onClick={onClickCancel} variant="contained" color="warning" startIcon={<CancelIcon />}>
            Cancel
          </Button>
        </Grid2>
      </> : <>
        <Typography variant="h6"
                    component="h6"
                    color="error"
                    textAlign="center">
          No Orders Yet
        </Typography>
        <Button onClick={()=> navigate("/")} variant='outlined' startIcon={<ArrowBackIcon/>}>Back</Button>
      </>}
    </Grid2>
  );
};

export default CheckOut;