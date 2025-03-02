import React, { use, useState } from 'react'
import { byc, cart, heart, user, vector } from '../assets'

const Navbar = () => {
    const [isSearchActive, setIsSearchActive] = useState(false);
  return (
    <>
      <nav class="navbar navbar-expand-lg py-5">
        <div class="container-fluid">
            {/* <!-- Hamburger menu for mobile --> */}
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarContent" aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            
            {/* <!-- Centered logo --> */}
            <a class="navbar-brand navbar-brand-center justify-content-center d- d-lg-block" href="/">
              <img className='px-2 py-1' src={byc} alt="" />
            </a>
            
            {/* <!-- Mobile logo (left-aligned) --> */}
            {/* <a class="navbar-brand d-lg-none" href="#">
                <div class="bg-danger text-white px-2 py-1 fw-bold">BYC</div>
            </a> */}
            
            {/* <!-- Right-aligned icons for mobile --> */}
            <div class="d-flex d-lg-none ms-auto me-2">
                <a href="" class="text-dark me-3"><img src={vector} alt="" /></a>
                <a href="Account" class="text-dark me-3"><img src={user} alt="" /></a>
                <a href="#" class="text-dark me-3"><img src={heart} alt="" /></a>
                <a href="carts" class="text-dark"><img src={cart} alt="" /></a>
            </div>
            
            {/* <!-- Collapsible navbar content --> */}
            <div class="collapse navbar-collapse" id="navbarContent">
                {/* <!-- Left navigation items --> */}
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-5">
                    <li class="nav-item me-3 ">
                        <a class="nav-link " href="#">Shop Products</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="blog">Blog</a>
                    </li>
                    <li class="nav-item me-3">
                        <a class="nav-link" href="#">FAQ</a>
                    </li>
                </ul>
                
                {/* <!-- Right navigation items --> */}
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0 me-5">
                    <li class="nav-item  me-3">
                        <a class="nav-link" href="about">About Us</a>
                    </li>
                    <li class="nav-item  me-3">
                        <a class="nav-link" href="contact">Contact</a>
                    </li>
                    {/* <!-- Icons only visible on desktop --> */}
                    <li class="nav-item me-3 d-none d-lg-block ms-3" >
                        {/* {
                            !isSearchActive && (
                                <a class="nav-link" href="" onClick={() => setIsSearchActive(true)}><img src={vector} alt="" />
                                    <Searchnav/>
                                </a>
                            )
                        } */}
                        <a class="nav-link" href=""><img src={vector} alt="" /></a>
                    </li>
                    <li class="nav-item me-3 d-none d-lg-block">
                        <a class="nav-link" href="Account"><img src={user} alt="" /></a>
                    </li>
                    <li class="nav-item me-3 d-none d-lg-block">
                        <a class="nav-link" href="#"><img src={heart} alt="" /></a>
                    </li>
                    <li class="nav-item me-3 d-none d-lg-block">
                        <a class="nav-link" href="carts"><img src={cart} alt="" /></a>
                    </li>
                </ul>
            </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar

