import { Box, Button, Grid2 } from '@mui/material';
import { dishState } from '../../types.ts';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { useAppDispatch } from '../../app/hooks.ts';
import { deleteDishById } from './dishesThunk.ts';
import { deleteDishReducer } from './dishesSlice.ts';
import { NavLink, useLocation } from 'react-router-dom';

interface Props{
  dish:dishState
}

const DishComponent:React.FC<Props> = ({dish}) => {
  const dispatch = useAppDispatch();
  const {pathname} = useLocation();

  const onClickDelete = async()=>{
    dispatch(deleteDishReducer(dish));
    await dispatch(deleteDishById(dish));
  }

  return (
    <Grid2
      sx={{
        padding: '1rem',
        borderRadius: '20px',
        border: '4px solid darkblue',
      }}
      width="100%"
      container
      alignItems="center">
      <Grid2 width="30%"><img  height={80} src={`${dish.imageUrl}`} alt="dishImg" /></Grid2>
      <Grid2 width="20%">{dish.title}</Grid2>
      <Grid2>
        <strong>
          {dish.price} KGS
        </strong>
      </Grid2>
      {pathname !== "/" ? <>
        <Box margin="auto">
          <NavLink to={`/admin/editDish/${dish.id}`}>
            <Button
              variant='outlined' color={"primary"} sx={{marginLeft:'auto', marginRight:"20px"}} startIcon={<EditIcon/>}>
              Edit
            </Button>
          </NavLink>
        </Box>
        <Button onClick={onClickDelete} variant='outlined' color={"error"} startIcon={<DeleteOutlineIcon/>}>delete</Button>
      </>: ""}
    </Grid2>
  );
};

export default DishComponent;