import React from 'react'
import { cartdel, cboxer, checkpay, round1, round2, wishlove } from '../assets'

const Checkout = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="border border-muted border-3 rounded-3 mx-5 my-5">
            <h4 className='fw-bold py-4 ps-5 fs-3'>Order Summary  1 item(s) </h4>

            <div className="border-top border-muted border-3 pt-4 mx-5">
              <div className="row">
                <div className="col-md-12 col-lg-2 mt-5">
                <img className='img-fluid h-' src={cboxer} alt="" />
                </div>

                <div className="col-md-12 col-lg-5 mt-5">
                <h1 className='fw-bold text-dark fs-3 pb-2'>MEN BOXERS<br/> BYC 1166</h1>
                <p className='fs-4 fw-light pb-4'>100% Cotton 12 Pieces Of Mens Boxer </p>
                <h3 className="fw-bold pb-2">₦2,800.00</h3>
                <p className='lead pb-2'>Quantity: <span className='ms-4'>1</span></p>
                <div className="d-lg-flex gap-3 mb-5  btn-cart2 ">
                    {/* <button className='btn border border-danger fw-lighter fs-6 mt-2 bg-white rounded-3 border-1 outline-0 text-danger'><img className='img-fluid me-2' src={wishlove} alt="" />Wishlist</button> */}
                    <a style={{fontSize: "13px", padding: "15px 70px"}} class="btn fw-light btn-danger" href="Modifycart" role="button">MODIFY CART</a>
                    {/* <a href='Modifycart' role='button'  className='btn border-0 bg-danger fw-lighter fs-6 rounded-3 mt-2 outline-0 text-white'>MODIFY CART</a> */}
                </div>
                </div>

                <div className="col-md-12 col-lg-5 border-start mt-5 border-2 border-muted h-50">
                  <div className="d-flex justify-content-between gap-3">
                    <p className='lead pb-2'>Subtotal</p>
                    <p className='lead mt- me-md-4 pe-md-5'>₦2,800.00</p>
                  </div>
                  <div className="d-flex justify-content-between gap-3 mb-3">
                    <p className='lead'>Delivery fee</p>
                    <p className='lead me-md-4 pe-md-5'>₦2,800.00</p>
                  </div>

                  <div className="pt-4 btn-cart2 me-5 border-top border-3 border-muted">
                    <div className="justify-content-between d-lg-flex">
                        <p className="lead fw-bold">Total</p>
                        <p className="lead fw-bold pe-md-4">₦2,800.00</p>
                    </div>
                   </div>
                </div>
              </div>
            </div>

            <div className="border-top border-muted border-3 mx-md-5">
                <div className="row">
                    <div className="col-md-12 col-lg-6">
                        <h3 className='fw-bold pt-5 pb-3'>SHIPPING ADDRESS</h3>
                    </div>
                    <div className="col-md-12 col-lg-6">
                        <h3 className='fw-bold pt-5 pb-3'>CHECKOUT</h3>
                    </div>
                </div>
            </div>

            <div className="border-top border-muted border-3 py-4 mx-md-5">
                <div className="row">
                  <div className="col-md-12 col-lg-6 mb-5">
                    <form className='mb-3' action="">
                      <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">Full name</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">Company name (optional)</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">Country / Region</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">Town / City</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">State</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">State</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fw-light fs-5 form-label' htmlFor="Phone">Phone</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <form className='mb-3' action="">
                      <label className='mb-2 fw-light fs-5 form-label' htmlFor="Phone">Email address</label>
                      <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
                    </form>

                    <button  className='btn border-0 bg-danger w-75 fw-light fs-6 p-3 rounded-3 mt-2 outline-0 text-white'>submit</button>
                    
                  </div>

                  <div className="col-md-12 col-lg-6 mb-5 mt-5">
                    <div style={{backgroundColor: "#FFF8F8"}} className="border-0 rounded-3 ps-4 pt-5">
                        <div className="d-flex gap-4 ms-">
                            <div className="img">
                                <img className='img-fluid' src={round1} alt="" />
                            </div>
                            <p> Direct bank transfer</p>
                        </div>

                        <div style={{width: "65%"}} className="bg-light border-0 mb-5 mt-3 rounded-4 ms-md-5">
                            <div style={{fontSize: "12px"}} className="ps-3 py-3">
                                <small className="text-muted ">Make your payment directly into our bank account.<br/> Please use your Order ID as the payment reference. <br/>Your order will not be shipped until the funds have cleared in our account.</small>
                            </div>
                        </div>

                        <div className="d-md-flex gap-4 pb-md-5">
                            <div className="img mt-3">
                                <img className='img-fluid' src={round2} alt="" />
                            </div>
                            <p className='mt-3'>Secured Online Payment</p>
                            <div className="">
                                <img className='mb-md-4 img-fluid' src={checkpay} alt="" />
                            </div>
                        </div>
                        
                        <div className="ms-md-5 py-5 mt-5">
                            <small className=''>Your personal data will be used to process your order, support your<br/> experience throughout 
                            this website, and for other purposes described in our privacy policy.</small>
                        </div>
                    </div>

                    <div className="">
                        <button  className='btn border-0 bg-danger w-100 fw-light fs-6 p-3 rounded-3 mt-5 outline-0 text-white'>Place order</button>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div> 
    </>
  )
}

export default Checkout
