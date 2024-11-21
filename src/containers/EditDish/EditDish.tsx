import DishForm from '../../components/DishForm/DishForm.tsx';
import { useAppDispatch, useAppSelector } from '../../app/hooks.ts';
import { selectFetchLoading, selectOneDish } from '../../components/Dishes/dishesSlice.ts';
import { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchOneDish, updateDishInfo } from '../../components/Dishes/dishesThunk.ts';
import { CircularProgress } from '@mui/material';
import { dishForm } from '../../types.ts';

const EditDish = () => {

  const dispatch = useAppDispatch();
  const oneDish = useAppSelector(selectOneDish);
  const fetchLoading = useAppSelector(selectFetchLoading);

  const {id}= useParams();


  const getOneDish = useCallback(async () => {
    if(id){
      await dispatch(fetchOneDish(id));
    }
  },[id]);


  useEffect(() => {
    void getOneDish();
  }, [dispatch, getOneDish]);


  const updateDish = async(dish:dishForm)=>{
    await dispatch(updateDishInfo({dish:dish,  dishId: id}))
  }

  return (
    <>
      {
        fetchLoading ? <CircularProgress/> :
          <>
        {oneDish && <DishForm oneDish={oneDish} updateDish={updateDish} isEdit/>}
          </>
      }
    </>
  );
};

export default EditDish;