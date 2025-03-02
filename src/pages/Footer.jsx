import React from 'react'
import { fb, footarrow, insta, mail, pay, phone, twi, yt } from '../assets'
import '../style.css'
import { BoxArrowInRight } from 'react-bootstrap-icons' 

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-dark text-white mt-auto py-4">
        <div className="container py-5">
          <div className="row">
            {/* <!-- First section --> */}
            <div className="col-md-2 col-sm-6 mb-4 mt-5">
              <h5>Company Info</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2 "><a href="#" className="nav-link fw-light p-0  text-white">About Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Affliate</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Fashion Blogger</a></li>
              </ul>
            </div>

            {/* <!-- Second section --> */}
            <div className="col-md-2 col-sm-6 mb-4 mt-5">
              <h5>Help & Support</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Shipping Info</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Refunds</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">How to Order</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">How to Track</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Size Guides</a></li>
              </ul>
            </div>

            {/* <!-- Third section --> */}
            <div className="col-md-2 col-sm-6 mb-4 mt-5">
              <h5>Customer Care</h5>
              <ul className="nav flex-column mt-4">
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Contact Us</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Payment Methods</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white">Pricing</a></li>
                <li className="nav-item mb-2"><a href="#" className="nav-link fw-light p-0 text-white"><img src={pay} alt="" /> </a></li>
              </ul>
            </div>

            {/* <!-- Newsletter section --> */}
            <div className="col-md-4 offset-md-2 col-sm-6 mb-4 mt-5">
              <h5 className='mb-3'>Signup For The Latest News</h5>

              <div class="col">
                <form>
                  <div class="email-form position-relative mb-5">
                    <input type="email" class="bg-dark text-white h-60 p-3 rounded-0 form-control" placeholder="Enter Email" aria-label="Email" required/>
                    <button class="submit-btn position-absolute text-white bg-dark border-0 translate-middle-y top-50" type="submit">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/>
                      </svg>
                    </button>
                  </div>
                </form>
              </div>

              <p className='fw-lighter'><img src={mail} alt="" /> bycafrica@gmail.com </p>
              <p className='fw-lighter'><img src={phone} alt="" /> +2348101375376 ; +2349053403403 </p>
            </div>
          </div>

          <div className="d-flex flex-sm-row justify-content-center py-4 my-4 border-bottom">
            <div className="list-unstyled d-flex">
              <a href="#" className="social-icon"><img src={fb} alt="" /> </a>
              <a href="#" className="social-icon"><img src={insta} alt="" /> </a>
              <a href="#" className="social-icon"><img src={twi} alt="" /> </a>
              <a href="#" className="social-icon"><img src={yt} alt="" /> </a>
            </div>
          </div>
          <div className='text-center' >
            <small>All rights Reserved  copyright bycafrica 2021.</small>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
