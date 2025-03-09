import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
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
import ViewToggle from './component/ViewToggle';
import SortBtn from './component/SortBtn';
import Camsole from './pages/Camsole';
import Boxers from './component/Boxers';
import Wishlist from './pages/Wishlist';


const Display = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <div>
          {/* <ReusableBreadCrumbs/> */}
        <Routes>
          <Route index element={<Home/>} />
          <Route path='AboutUs' element={<About/>} />
          <Route path='ContactUs' element={<Contact/>}/>
          <Route path='blog' element={<Blog/>}/>
          <Route path='Blogs' element={<Blog2/>}/>
          <Route path='carts' element={<Carts/>}/>
          <Route path='product' element={<Product/>}/>
          <Route path='checkout' element={<Checkout/>}/>
          <Route path='modifycart' element={<Modifycart/>}/>
          <Route path='account' element={<Account/>}/>
          <Route path='sortbtn' element={<SortBtn/>}/>
          <Route path='viewtoggle' element={<ViewToggle/>}/>
          <Route path='camsole' element={<Camsole/>}/>
          <Route path='boxers' element={<Boxers/>}/>
          <Route path='wishlist' element={<Wishlist/>}/>
        </Routes>
        </div>
        <Footer/>
      </Router>
    </>
  )
}

export default Display
