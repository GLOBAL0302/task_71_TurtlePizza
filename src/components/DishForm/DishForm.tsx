import { Box, Button, CircularProgress, Grid2, TextField } from '@mui/material';
import { useState } from 'react';
import { dishForm } from '../../types.ts';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { fetchAllDishes, postOneDish } from '../Dishes/dishesThunk.ts';
import {selectPostLoading } from '../Dishes/dishesSlice.ts';
import { useNavigate } from 'react-router-dom';


interface Props{
  updateDish?:(dish:dishForm) => void;
  oneDish?: dishForm
  isEdit?: boolean
}


const initialState:dishForm = {
  title:"",
  price:"",
  imageUrl:""
}


const DishForm:React.FC<Props> = ({oneDish = initialState,updateDish, isEdit= false}) => {
  const [dishInfo, setDishInfo] = useState( oneDish )
  const dispatch = useAppDispatch();
  const postDishLoader = useAppSelector(selectPostLoading)
  const navigate = useNavigate();

  const handleDishInfo = (event:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setDishInfo((prevState)=>({
      ...prevState,
      [event.target.name]:event.target.value
    }))
  }

  const onSubmit = async (event:React.FormEvent)=>{
    event.preventDefault();
    if(isEdit && updateDish){
      updateDish(dishInfo);
    }else{
      await dispatch(postOneDish(dishInfo));
    }
    await dispatch(fetchAllDishes());
    navigate("/admin")
  }

  return (
    <Grid2 onSubmit={onSubmit} container spacing={2} component="form">
      <TextField onChange={handleDishInfo} name="title" id="title" label="title" type="text" variant="filled" value={dishInfo.title} fullWidth/>
      <TextField onChange={handleDishInfo} name="price" id="price" label="price" type="number" variant="filled" value={dishInfo.price}  fullWidth/>
      <TextField onChange={handleDishInfo} name="imageUrl" id="imageUrl"  label="Image" type="url" variant="filled" value={dishInfo.imageUrl}  fullWidth/>
      {
        dishInfo.imageUrl  &&
        <Box component="div"  width="100%" textAlign='center'>
          <img width={"20%"} src={`${dishInfo.imageUrl}`} alt="dishPic" />
        </Box>
      }
      <br/>
      <Button disabled={postDishLoader} variant="contained" type="submit" color="success" sx={{marginLeft: "auto"}}>
        <>{isEdit ? "Save Edit":"Submit Dish"}</>
        {postDishLoader && <CircularProgress size={20} sx={{marginLeft:"10px"}}/>}
      </Button>
    </Grid2>
  );
};

export default DishForm;