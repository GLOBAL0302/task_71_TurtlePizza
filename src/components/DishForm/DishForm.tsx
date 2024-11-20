import { Box, Button, CircularProgress, Grid2, TextField } from '@mui/material';
import { useState } from 'react';
import { dishForm } from '../../types.ts';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { postOneDish } from '../../containers/Dishes/dishesThunk.ts';
import { selectPostLoading } from '../../containers/Dishes/dishesSlice.ts';


const initialState:dishForm = {
  title:"",
  price:0,
  imageUrl:""
}


const DishForm = () => {
  const [dishInfo, setDishInfo] = useState(initialState);
  const dispatch = useAppDispatch();
  const postDish = useAppSelector(selectPostLoading)

  const handleDishInfo = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDishInfo((prevState)=>({
      ...prevState,
      [event.target.name]:event.target.value
    }))
  }

  const onSubmit = async (event:React.FormEvent)=>{
    event.preventDefault();
    await dispatch(postOneDish(dishInfo));
  }

  return (
    <Grid2 onSubmit={onSubmit} container spacing={2} component="form">
      <TextField onChange={handleDishInfo} name="title" id="title" label="title" type="text" variant="filled" value={dishInfo.title} fullWidth/>
      <TextField onChange={handleDishInfo} name="price" id="price" label="price" type="number" variant="filled" value={dishInfo.price}  fullWidth/>
      <TextField onChange={handleDishInfo} name="imageUrl" id="imageUrl"  label="Image" type="url" variant="filled" value={dishInfo.imageUrl}  fullWidth/>
      {
        dishInfo.imageUrl  &&
        <Box component="div"  width="100%" textAlign='center'>
          <img width={"60%"} src={`${dishInfo.imageUrl}`} alt="dishPic" />
        </Box>
      }
      <br/>
      <Button disabled={postDish} variant="contained" type="submit" color="success" sx={{marginLeft: "auto"}}>
        Save
        {postDish && <CircularProgress size={20} sx={{marginLeft:"10px"}}/>}
      </Button>
    </Grid2>
  );
};

export default DishForm;