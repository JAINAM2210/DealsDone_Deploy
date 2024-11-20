import Home from './component/home/Home';
import AddProduct from './component/Sellerpage/Addproduct/AddProduct'; 
import DetailView from './component/details/DetailView';
import DataProvider from './context/DataProvider';
import Cart from './component/cart/Cart';
import SellerPage from './component/Sellerpage/Sellerpage'
import ProfilePage from './component/ProfilePage/ProfilePage'
import AboutUsPage from './component/AboutusPage/AboutusPage'
import {Box} from '@mui/material';
import Payment from './component/payment/payment';
import PaymentDecision from './component/payment/paymentdecision';
import PaymentConfirmation from './component/payment/paymentConfirmation';
import PaymentFail from './component/payment/paymentFailure';
import CartProvider  from './context/CartProvider';


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {

  const token = localStorage.getItem('token');
  const islogedin = localStorage.getItem('islogedin');
  

  return (
    <DataProvider> 
    <CartProvider>
      <BrowserRouter>
      
      <Box style={{marginTop:54}}>
        <Routes>
          <Route path='/' element={  <Home /> }/>
          <Route path='/product/:id' element={<DetailView />} />
          <Route path='/add-product' element={<AddProduct />} /> {/* This route should load AddProduct */}
          <Route path='/sellerpage' element={<SellerPage />} />
          <Route path='/profilepage' element={<ProfilePage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/aboutus" element={<AboutUsPage />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/paymentdecision" element={<PaymentDecision />} />
          <Route path="/payment-success" element={<PaymentConfirmation />} />
          <Route path="/payment-fail" element={<PaymentFail />} />
        </Routes>
      </Box>
      </BrowserRouter>
    </CartProvider>
    </DataProvider>
  );
}

export default App;
