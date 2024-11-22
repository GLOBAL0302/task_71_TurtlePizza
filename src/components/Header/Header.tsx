import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material';
import LocalPizzaIcon from '@mui/icons-material/LocalPizza';
import { NavLink, useLocation } from 'react-router-dom';
const Header = () => {
  const { pathname } = useLocation();

  return (
    <Box margin="100px">
      <AppBar>
        <Toolbar>
          <LocalPizzaIcon />
          <Typography variant="h5" color="inherit" component="h5" sx={{ textDecoration: 'underline' }}>
            Turtle Pizza
          </Typography>
          {pathname !== '/' && pathname !== '/checkOut' ? (
            <>
              <Button variant="contained" color="inherit" sx={{ marginLeft: 'auto', marginRight: '20px' }}>
                <NavLink to="/admin">
                  <Typography variant="body2" color="black" component="div">
                    Dishes
                  </Typography>
                </NavLink>
              </Button>
              <Button variant="contained" color="inherit">
                <NavLink to="/orders">
                  <Typography variant="body2" color="black" component="p">
                    Orders
                  </Typography>
                </NavLink>
              </Button>
            </>
          ) : (
            ''
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
