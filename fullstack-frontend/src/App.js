
import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Navbar from './layout/Navbar';
import SaleNavbar from './layout/SaleNavbar';
import SalespersonNavbar from './layout/SalespersonNavbar';
import ProductNavbar from './layout/ProductNavbar';
import CustomerNavbar from './layout/CustomerNavbar';
import Home from './pages/Home';
import SalespersonPage from './pages/SalespersonPage';
import ProductPage from './pages/ProductPage';
import CustomerPage from './pages/CustomerPage';
import SalePage from './pages/SalePage';
import AddSale from './Sale/AddSale';
import EditProduct from './Product/EditProduct';
import EditSalesperson from './Salesperson/EditSalesperson';

function App() {
  return (
    <Router>
      <div className='App' style={{ display: 'flex' }}>
        <div className='navbars'>
        <Navbar />
        <CustomerNavbar/>
        <ProductNavbar/>
        <SalespersonNavbar/>
        <SaleNavbar/>
        </div>
        
        <Routes>
          <Route path='/sale' element={<SalePage/>} />
          <Route path='/salesperson' element={<SalespersonPage/>} />
          <Route path='/product' element={<ProductPage/>} />
          <Route path='/customer' element={<CustomerPage/>} />
          <Route path='/' element={<Home/>} />
          < Route path = "/createuser" element = {<AddSale/>}/>
          < Route path ="/editproduct/:id" element = {<EditProduct/>}/>
          < Route path ="/editsalesperson/:id" element = {<EditSalesperson/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
