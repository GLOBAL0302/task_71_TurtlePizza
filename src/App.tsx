import './App';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import { Container } from '@mui/material';
import HomeContainer from './containers/Home/HomeContainer.tsx';
import AddNewDish from './containers/addNewDish/AddNewDish.tsx';
import EditDish from './containers/EditDish/EditDish.tsx';
import CheckOut from './containers/CheckOut/CheckOut.tsx';
import Orders from './containers/Orders/Orders.tsx';

const App = () => {
  return (
    <>
      <Header />
      <Container>
        <Routes>
          <Route path="/admin" element={<HomeContainer />} />
          <Route path="/admin/addNewDish" element={<AddNewDish />} />
          <Route path="/admin/editDish/:id" element={<EditDish />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/" element={<HomeContainer />} />
          <Route path="/checkOut" element={<CheckOut />} />
          <Route path="*" element={<h2>Such Page does not Exist</h2>} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
