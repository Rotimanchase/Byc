import React from 'react'
import { cartdel, cboxer, cplus, wishlove } from '../assets'
import Blogfoot from '../component/Blogfoot'
import Recentlyview from '../component/Recentlyview'

const Carts = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="border border-muted border-2 pe-5 ps-5 rounded-3 mx-5 ">
          <h4 className='fw-bold py-4'>Cart 1 item(s)</h4>

          <div className=" border-top border-bottom border-2 border-muted pt-5 pb-3">
            <div className="row">
              <div className="col-md-12 col-lg-2 mt-4">
                <img className='img-fluid h-' src={cboxer} alt="" />
              </div>

              <div className="col-md-12 col-lg-5 mt-3">
                <h1 className='fw-bold text-dark fs-3 pb-2'>MEN BOXERS<br/> BYC 1166</h1>
                <p className='fs-5 fw-light pb-2'>100% Cotton 12 Pieces Of Mens Boxer </p>
                <div className="d-lg-flex gap-3 mb-5  btn-cart">
                  <button className='btn border border-danger fw-lighter fs-6 mt-2 bg-white rounded-3 border-1 outline-0 text-danger'><img className='img-fluid me-2' src={wishlove} alt="" />Wishlist</button>
                  <button  className='btn border-0 bg-danger fw-lighter fs-6 rounded-3 mt-2 outline-0 text-white'><img className='img-fluid me-2' src={cartdel} alt="" />Remove</button>
                </div>
              </div>

                <div className="col-md-12 col-lg-2 border-end border-start mb-5 text-center border-2 border-muted ">
                  <div className="mt-3">
                    <p className='lead pb-1'>Quantity</p>
                    <img src={cplus} alt="" />
                  </div>       
                </div>

              <div className="col-md-12 col-lg-3 ps-md-5 mt-3">
                <p className='lead ms-4 pb-2'>Unit Price</p>
                <h3 className="fw-bold ">₦2,800.00</h3>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-end">
            <div className="col-md-12 col-lg-5  my-5">
              <h4 className='fw-bold mb-4'>CART TOTALS</h4>

              <div className="d-flex justify-content-between">
                <p className='lead'>Subtotal</p>
                <p className='lead me-md-4 pe-md-5'>₦2,800.00</p>
              </div>
              <div className="d-flex justify-content-between mb-5">
                <p className='lead'>Total</p>
                <p className='lead me-md-4 pe-md-5'>₦2,800.00</p>
              </div>

              <div className="d-lg-flex gap-4 pt-5 btn-cart2">
                  <a class="btn fw-light border-1 border border-danger text-danger  btn-light" href="product" role="button">Continue Shopping</a>
                  <a class="btn fw-light fs-6  btn-danger" href="checkout" role="button">Proceed to Checkout</a>
                </div>
            </div>
          </div>
        </div>

      </div>
      <Recentlyview/>
    </>
    // border-left border-right border-3 border-primary
  )
}

export default Carts

