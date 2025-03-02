import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './component/Navbar';
import Footer from './pages/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog'
import Blog2 from './component/Blog2';
import Carts from './pages/Carts';
import Product from './component/Product'
import Checkout from './pages/Checkout';
import Modifycart from './pages/Modifycart';
import Account from './pages/Account';
import Searchnav from './component/Searchnav';
import ViewToggle from './component/ViewToggle';
import SortBtn from './component/SortBtn';
import ProductCardG from './component/ProductCardsG';


const Display = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route index element={<Home/>} />
          <Route path='about' element={<About/>} />
          <Route path='contact' element={<Contact/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='blog2' element={<Blog2/>}/>
          <Route path='carts' element={<Carts/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='modifycart' element={<Modifycart/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='sortbtn' element={<SortBtn/>}/>
          <Route path='viewtoggle' element={<ViewToggle/>}/>
          <Route path='productcardG' element={<ProductCardG/>}/>
          <Route path='searchnav' element={<Searchnav/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  )
}

export default Display
