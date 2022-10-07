import React from 'react';
import PublicLayout from '../layout';
import Home from '../components/Home';
import About from '../components/About';
import Products from '../components/Products';
import ProductDetail from '../components/ProductDetail';
import Contact from '../components/Contact';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import Cart from '../components/Cart';
import Checkout from '../components/Checkout';
import UploadImg from '../components/forms/upload';


function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<PublicLayout />}>
                    <Route path='/' element={<Home />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/products' element={<Products />} />
                    <Route path='/products/:id' element={<ProductDetail />} />
                    <Route path='/checkout' element={<Checkout />} />
                    <Route path='/cart' element={<Cart />} />
                    <Route path='/contact' element={<Contact />} />
                    <Route path='/uploadimg' element={<UploadImg />} />
                </Route>
            </Routes>

        </Router>
    );
}

export default AppRouter;
