import Dishes from '../../components/Dishes/Dishes.tsx';
import { Button, Grid2, Typography } from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';
import Cart from '../../components/Cart/Cart.tsx';

const HomeContainer = () => {
  const { pathname } = useLocation();

  return (
    <>
      <Grid2 container>
        <Grid2>
          <Typography variant="h5" component="h5">
            Dishes
          </Typography>
        </Grid2>
        {pathname !== '/' ? (
          <>
            <Grid2 marginLeft="auto">
              <NavLink to="/admin/addNewDish">
                <Button variant="contained" color="inherit">
                  <Typography variant="body2" color="black" component="p">
                    Add new dish
                  </Typography>
                </Button>
              </NavLink>
            </Grid2>
          </>
        ) : (
          ''
        )}
      </Grid2>
      <Dishes />
      {pathname === '/' && <Cart />}
    </>
  );
};

export default HomeContainer;
