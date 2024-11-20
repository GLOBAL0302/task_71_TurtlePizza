
import './App'
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.tsx';
import Dishes from './containers/Dishes/Dishes.tsx';
import { Container } from '@mui/material';

const App = () => {

  return (
    <>
      <Header/>
      <Container>
        <Routes>
          <Route path="/admin" element={<Dishes/>}/>
          <Route path="/" element={<Dishes/>}/>
        </Routes>
      </Container>
    </>
  )
};

export default App
