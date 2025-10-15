import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, Box } from '@mui/material';
import {CssBaseline} from '@mui/material';

//Contexto
import { CartProvider } from './context/CartContext';

//Componentes
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import CartDrawer from './components/Cart/CartDrawer';

//Paginas
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import CategoryPage from './pages/CategoryPage';

//Tema personalizado

const theme = createTheme({
  palette:{
    primary:{
      main: '#1976d2',
    },
    secondary:{
      main: '#dc004e',
    },
  },
  typography:{
    fontFamily: '"Roboto","Helvetica","Arial", sans-serif'
  },
});

function App(){
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <CartProvider>
        <Router>
          <Box sx={{display:'flex', flexDirection:'column', minHeight:'100vh'}}>
            <Header/>
            <Box component='main' sx={{flexGrow:1}}>
              <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/product/:id' element={<ProductDetail/>}/>
              <Route path='/category/:category' element={<CategoryPage/>}/>
            </Routes>
            </Box>
            <Footer/>
            <CartDrawer/>
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
};

export default App;