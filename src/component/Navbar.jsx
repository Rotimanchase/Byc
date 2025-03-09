import React, { useState, useEffect } from 'react'
import { byc, cart, heart, user, vector, wcart, wheart, wuser, wvector } from '../assets'
import { ChevronDown, ChevronRight, Icon } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Navbar = () => {
    const [showSearch, setShowSearch] = useState(false);
    // const [isMobileView, setIsMobileView] = useState(false);

    // useEffect(() => {
    //     const handleResize = () => {
    //         setIsMobileView(window.innerWidth < 992);
    //     };

    //     handleResize();

    //     window.addEventListener('resize', handleResize);

    //     return () => window.removeEventListener('resize', handleResize);
    // }, [])

    // const SearchBar = () => {
    //     <input type="text" className='form-control' placeholder='Search Product' autoFocus/>
    //     {isMobileView ? null : (
    //         <button
    //         className='btn btn-outline-secondary'>
    //             Close
    //         </button>
    //     )}
    // }

    const toggleSearch = () => {
        setShowSearch(!showSearch);
    };

    const location = useLocation();
    const path = location.pathname;

    const darkBgPage = ['/wishlist'];
    const isDarkBg = darkBgPage.includes(path)


    const [openMenus, setOpenMenus] = useState({});

    const toggleSubMenu = (menuKey, e) => {
        e.preventDefault();
        e.stopPropagation(); // Prevent event bubbling
        console.log("Toggling:", menuKey, "Current state:", openMenus);
        setOpenMenus(prevState => ({
            ...prevState,
            [menuKey]: !prevState[menuKey]
        }));
    };

  return (
    <>
      <nav className={`navbar py-5 navbar-expand-lg ${isDarkBg ? 'navbar-dark bg-dark text-white' : 'navbar-light bg-light text-dark'}`}>
        <div className="container-fluid">
            {/* <!-- Hamburger menu for mobile --> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
            {/* <!-- Centered logo --> */}

            {!showSearch ? (
                <a className="navbar-brand navbar-brand-center justify-content-center d- d-lg-block" href="/">
                    <img className='px-2 py-1' src={byc} alt="" />
                </a>
            ) : (
                <div className={`nav-search bodin d-flex align-items-center border-bottom pb-1 ${isDarkBg ? 'border-light' : 'border-secondary'}`}  style={{width: "40%"}}>
                    <input type="text" placeholder='Search Product' className='form-control border-0 bg-transparent w-100' />
                    <button onClick={() => setShowSearch(false)} className='btn btn-link p-0 ms-2'>
                        <img src={vector} alt="" className='w-5 h-5 cursor-pointer'/>
                    </button>
                </div>
            )
            }
           
            
            {/* <!-- Mobile logo (left-aligned) --> */}
            {/* <a className="navbar-brand d-lg-none" href="#">
                <div className="bg-danger text-white px-2 py-1 fw-bold">BYC</div>
            </a> */}
            
            {/* <!-- Right-aligned icons for mobile --> */}
            <div className="d-flex d-lg-none ms-auto me-2">
                <a href="#" className="text-dark me-3"><img src={vector} alt="" /></a>
                <a href="Account" className="text-dark me-3"><img src={user} alt="" /></a>
                <a href="wishlist" className="text-dark me-3"><img src={heart} alt="" /></a>
                <a href="carts" className="text-dark"><img src={cart} alt="" /></a>
            </div>
            
            {/* <!-- Collapsible navbar content --> */}
            <div className="collapse navbar-collapse " id="navbarContent">
                {/* <!-- Left navigation items --> */}
                <ul className="navbar-nav  me-auto mb-em2 mb-lg-0 ms-5">
                    
                <li className="nav-item dropdown me-3">
    <a href="#" role='button' id='shopDropdown' data-bs-toggle="dropdown" 
       onClick={(e) => toggleSubMenu("shopDropdown", e)}
       className={`nav-link dropdown ${isDarkBg ? 'text-white' : 'text-dark'}`}>
       Shop Products
    </a>    
    <ul className={`dropdown-menu ${openMenus["shopDropdown"] ? "show" : ""}`} aria-labelledby='shopDropdown'>
        <li>
            <a className='dropdown-item all-products' href="product">ALL PRODUCTS</a>
        </li>
        <li></li>
        <li className='dropdown-header text-white gap-5 d-flex py-2 bg-danger'>
            <a className='text-white fs-5 fw-bold text-decoration-none'
               href="#" 
               onClick={(e) => toggleSubMenu('children', e)}>
               CHILDREN <ChevronDown/>
            </a>

            <a href="" className="text-white fs-5 fw-bold text-decoration-none"
               onClick={(e) => toggleSubMenu('men', e)}>
               MEN <ChevronDown/>
            </a>

            <a href="" 
               className="text-white fs-5 fw-bold text-decoration-none"
               onClick={(e) => toggleSubMenu('women', e)}>
               WOMEN <ChevronDown/>
            </a> 
        </li>

        {/* Children Submenu */}
        <li className={`dropdown-submenu ${openMenus["children"] ? "show" : ""}`}>
            <ul className="dropdown-menu dropdown-menu-end submenu">
                <li>
                    <a className='dropdown-item' href="#"
                       onClick={(e) => toggleSubMenu('male', e)}>
                       Male
                    </a>
                    {/* Male Submenu */}
                    <ul className={`dropdown-menu dropdown-menu-end submenu ${openMenus["male"] ? "show" : ""}`}>
                        <li className='dropdown-item'>Boxers</li>
                        <li className='dropdown-item'>Pants</li>
                        <li className='dropdown-item'>T-shirts</li>
                        <li className='dropdown-item'>Singlet</li>
                        <li className='dropdown-item'>Towels</li>
                    </ul>
                </li>

                <li>
                    <a href="#" className="dropdown-item"
                       onClick={(e) => toggleSubMenu('female', e)}>
                       Female
                    </a>
                    {/* Female Submenu */}
                    <ul className={`dropdown-menu dropdown-menu-end submenu ${openMenus["female"] ? "show" : ""}`}>
                        <li className='dropdown-item'>Boxers</li>
                        <li className='dropdown-item'>Pants</li>
                        <li className='dropdown-item'>T-shirts</li>
                        <li className='dropdown-item'>Singlet</li>
                        <li className='dropdown-item'>Towels</li>
                    </ul>
                </li>
            </ul>
        </li>

        {/* Men Submenu */}
        <li className={`dropdown-submenu ${openMenus["men"] ? "show" : ""}`}>
            <ul className="dropdown-menu submenu">                                
                <li className='dropdown-item'>Boxers</li>
                <li className='dropdown-item'>Pants</li>
                <li className='dropdown-item'>T-shirts</li>
                <li className='dropdown-item'>Singlet</li>
                <li className='dropdown-item'>Towels</li>
            </ul>
        </li>

        {/* Women Submenu */}
        <li className={`dropdown-submenu ${openMenus["women"] ? "show" : ""}`}>
            <ul className="dropdown-menu submenu">                                
                <li className='dropdown-item' >Boxers</li>
                <li className='dropdown-item'>Pants</li>
                <li className='dropdown-item'>T-shirts</li>
                <li className='dropdown-item'>Singlet</li>
                <li className='dropdown-item'>Towels</li>
            </ul>
        </li>
    </ul>
</li>
                    <li className="nav-item me-3">
                        <a  className={`nav-link ${isDarkBg ? 'text-white' : 'text-dark'}`} href="blog">Blog</a>
                    </li>
                    <li className="nav-item me-3">
                        <a  className={`nav-link ${isDarkBg ? 'text-white' : 'text-dark'}`} href="#">FAQ</a>
                    </li>
                </ul>
                
                {/* <!-- Right navigation items --> */}
                <ul className="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li className="nav-item  me-3">
                        <a  className={`nav-link ${isDarkBg ? 'text-white' : 'text-dark'}`} href="AboutUs">About Us</a>
                    </li>
                    <li className="nav-item  me-3">
                        <a  className={`nav-link ${isDarkBg ? 'text-white' : 'text-dark'}`} href="ContactUs">Contact</a>
                    </li>
                    {/* <!-- Icons only visible on desktop --> */}
                    <li className="nav-item me-3 d-none d-lg-block ms-3">
                        {!showSearch && (
                            <a className="nav-link" href="#"><img src={isDarkBg ? wvector : vector} alt="" 
                            onClick={toggleSearch}/></a>
                        )} 
                    </li>
                    <li className="nav-item me-3 d-none d-lg-block">
                        <a className="nav-link" href="Account"><img src={isDarkBg ? wuser : user} alt="" /></a>
                    </li>
                    <li className="nav-item me-3 d-none d-lg-block" >
                        <a className="nav-link" href="wishlist"><img src={isDarkBg ? wheart : heart} alt="" /></a>
                    </li>
                    <li className="nav-item me-3 d-none d-lg-block">
                        <a className="nav-link" href="carts"><img src={isDarkBg ? wcart : cart} alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>

        {/* {isMobileView && (
            <div className={`mobile-search-container ${isDarkBg ? 'dark-mode' : 'light-mode'}`}>
                <SearchBar/>
            </div>
        )} */}
      </nav>
    </>
  )
}

export default Navbar

