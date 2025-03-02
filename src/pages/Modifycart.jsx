import React from 'react'
// import star from 'react-bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { marrowl, marrowr, mboxer, mboxers, mcart, mnum, mplus, mrange, mrater, msize, mstar1, mstar2, redvec, star, wishcart, wishlove } from '../assets'
import Recentlyview from '../component/Recentlyview'

const Modifycart = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="border border-2 border-muted rounded-3 mx-5 my-5">
            <div className="row">
                <div className="col-md-12 col-lg-5 py-5 ps-md-5">
                    <div className='mb-5'>
                        <img className='img-fluid' src={mboxer} alt="" />
                    </div>
                    <div className="d-flex gap-2">
                        <img className='img-fluid modi-arrow' src={marrowl} alt="" />
                        <img className='img-fluid' src={mboxers} alt="" />
                        <img className='img-fluid modi-arrow' src={marrowr} alt="" />
                    </div>
                </div>
                <div className="col-md-12 col-lg-7 py-5 pe-md-5">
                    <h4 className="fw-bold pb-3">MEN BOXERS<br/> BYC 1166</h4>
                    <p className="lead pb-2">100% Cotton 12 Pieces Of Mens Boxer </p>
                    <div className="ratings pb-3">
                        <img className='img-fluid' src={star} alt="" />
                    </div>

                    <div className="border-top border-muted border-3 me-md-5">
                        <div className="mt-5">
                            <h4 className="fw-bold fs-3 mb-4">₦2,800.00</h4>
                            <img className='img-fluid w-50 mt-3' src={msize} alt="" />
                        </div>

                        <div className="d-md-flex gap-3 mb-4 mt-4">
                            <div className="mt-1">
                             <img className='img-fluid' src={mplus} alt="" />
                            </div>
                            <div className="btn-modi">
                              <button className='border border-danger mt-2 bg-white rounded-3 border-1 outline-0 text-danger '><img className='img-fluid me-2' src={wishlove} alt="" />Wishlist</button>
                            </div>
                        </div>

                        <div className="btn-modi2 pb-5">
                            <button  className='btn py-3 border-0 w-50 w-md-100 bg-danger rounded-3 mt-2 outline-0 text-white'><img className='img-fluid me-2' src={mcart} alt="" /><span className='me-5 pe-5'>Add to Cart</span></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="border border-2 px-5 border-muted rounded-3 mx-5 my-5 ">
            <div className="pb-2 pt-5 ">
                <h3 className='fw-bold'>Product Description</h3>
            </div>

            <div className="border-top border-3 me-md-5 border-muted pb-5">
                <p style={{fontSize: "18.4px"}} className='w-100 text-muted mt-4'>This set of boxers will make you feel comfortable. The hem doesn't ravel. It is made from cotton which allows aeration around your body. It suitable for both adults and teenagers.<br/> These pair of boxers give good fit and sits appropriately, they ensure there is no unsightly bulge and they also give support to an important part of your body, which overall improves<br/> your confidence. It has a comfortable cotton material. It comes in different beautiful colors and patterns. It has cool and comfortable fit with flexible hem that doesn't ravel and comes<br/> tag -free for maximum comfort. Soft breathable fabric for air movement and forms to your body for best Fit.<br/> It is made of 100% premium cotton and is perfect for crotch, so you don't have to worry about ugly bumps.<br/> For pure organic softness and premium lingerie support, pair this four-in-one suit with yourself or the special man in your life.</p>
            </div>
        </div>

        <div className="border border-muted border-2 mx-5 rounded-3">
            <div className="pt-4 pb-3 ms-5">
                <h4 className='fw-bold'>Customer Reviews</h4>
            </div>

            <div className="border-top pro-rate border-2 mx-md-5 border-muted">
                <p className="lead mt-4">PRODUCT RATINGS (1129)</p>

                <div className="row pb-5">
                    <div className="col-md-12 col-lg-7">
                        <div className="d-lg-flex  gap-4">
                            <div className="rating mt-3 me-5">
                                <img className='img-fluid' src={mrater} alt="" />
                            </div>
                            <div  className="star me-3">
                                 <img className='w-100 img-fluid' src={mstar1} alt="" />
                            </div>
                            <div className="num mt-4">
                                <img className='img-fluid' src={mnum} alt="" />
                            </div>
                            <div className="rang mt-4 pt-2">
                                 <img className='img-fluid' src={mrange} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="last-all">
                <div className="d-flex border-bottom border-2 border-muted mx-md-5 justify-content-between">
                    <h5 className="lead">PRODUCT REVIEWS (438)</h5>
                    <p className='text-danger '>See all <img className='ms-3 img-fluid' src={redvec} alt="" /></p>
                </div>
            </div>
            
            <div className="border-bottom border-2 mx-5 border-muted">
                <div className="col-md my-5">
                    <h5 className='fw-bold'>Good product</h5>
                    <small className='fw-light'>The product lasts, the design is perfect i love it</small>
                    <div className="d-md-flex gap-4 mt-2 ">
                        <div className="img text-warning">
                            {/* <img className=' img-fluid' src={mstar2} alt="" /> */}
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <p className='fw-light'>12-08-2021 by JAMES JOHN</p>
                    </div>
                </div>
            </div>

            <div className="border-bottom border-3 mx-5 border-muted">
                <div className="col-md my-5">
                    <h5 className='fw-bold'>Good product</h5>
                    <small className='fw-light'>The product lasts, the design is perfect i love it</small>
                    <div className="d-md-flex gap-4 mt-2 ">
                        <div className="img text-warning">
                            {/* <img className=' img-fluid' src={mstar2} alt="" /> */}
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <p className='fw-light'>12-08-2021 by JAMES JOHN</p>
                    </div>
                </div>
            </div>

            <div className=" mx-5">
                <div className="col-md my-5">
                    <h5 className='fw-bold'>Looks nice</h5>
                    <small className='fw-light'>The product lasts, the design is perfect i love it</small>
                    <div className="d-md-flex gap-4 mt-2 ">
                        <div className="img text-warning">
                            {/* <img className=' img-fluid' src={mstar2} alt="" /> */}
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-half"></i>
                        </div>
                        <p className='fw-light'>12-08-2021 by JAMES JOHN</p>
                    </div>
                </div>
            </div>

        </div>
      </div>

      <Recentlyview/>
    </>
  )
}

export default Modifycart
