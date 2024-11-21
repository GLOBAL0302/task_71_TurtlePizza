import { Button, Grid2, Typography } from '@mui/material';
import { IDishCart } from '../../types.ts';
import DeleteIcon from '@mui/icons-material/Delete';
import { useAppDispatch } from '../../app/hooks.ts';
import { deleteFromCart } from '../Cart/cartSlice.ts';

interface Props{
  dishCart:IDishCart
}

const CheckOutItem:React.FC<Props> = ({dishCart}) => {
  const dispatch = useAppDispatch();
  const total = dishCart.amount * dishCart.dish.price;


  return (
    <Grid2
      marginBottom={2}
      sx={{
        border:'2px solid silver',
        padding: 2,
        borderRadius: '20px',
      }}
      alignItems="center"
      container>
      <Grid2 width="20%" container alignItems="center" gap={2}>
        <img
          style={{borderRadius: '20px'}}
          width={100}
          src={`${dishCart.dish.imageUrl}`}
          alt="dishImg" />
        <Typography variant="body2" color="textSecondary">
          {dishCart.dish.title}
        </Typography>
      </Grid2>
      <Grid2 width="10%">
        <Typography variant="body2" color="textSecondary">
          x{dishCart.amount}
        </Typography>
      </Grid2>
      <Grid2 width="20%">
        <Typography variant="body2" color="textSecondary">
         Price:  {dishCart.dish.price}
        </Typography>
      </Grid2>
      <Grid2>
        <Typography variant="body2" color="textSecondary">
          {total} KGS
        </Typography>
      </Grid2>
      <Grid2 marginLeft="auto">
        <Button onClick={()=>dispatch(deleteFromCart(dishCart.dish))} variant="contained"  color="error" startIcon={<DeleteIcon/>}>
          Delete
        </Button>
      </Grid2>
    </Grid2>
  );
};

export default CheckOutItem;