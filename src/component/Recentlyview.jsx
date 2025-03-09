import React from 'react'
import { recent, redvec, star } from '../assets'
import { StarFill } from 'react-bootstrap-icons'

const Recentlyview = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="big-card rounded-3 ms-5 me-5 border px-3 w- border-1 border-muted my-5 me-lg-">
            <div className="d-flex justify-content-between">
                <h5 className='pt-5 mb-3 ms-4 fw-bold'>Recently Viewed</h5>
                <p className='text-danger mb-3 pt-5 me-4'>See all <img className='ms-3 img-fluid' src={redvec} alt="" /></p>
            </div>

        <div className="product-grid gap-4 d-grid ps-4 pe-4 mb-3 border-top border-2">
            <div className="product-card rounded-3 mt-4">
                <div className="product-image cards">
                    <img src={recent} alt="Men's Boxer"/>
                </div>
                <div className="product-info ps-3">
                    <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                    <p className="product-code text-muted mb-2">BYC 1163</p>
                    <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                    <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                    <div className="ratings pb-3">
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="product-card rounded-3 mt-4">
                <div className="product-image cards">
                    <img src={recent} alt="Men's Boxer"/>
                </div>
                <div className="product-info ps-3">
                    <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                    <p className="product-code text-muted mb-2">BYC 1163</p>
                    <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                    <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                    <div className="ratings pb-3">
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="product-card rounded-3 mt-4">
                <div className="product-image cards">
                    <img src={recent} alt="Men's Boxer"/>
                </div>
                <div className="product-info ps-3">
                    <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                    <p className="product-code text-muted mb-2">BYC 1163</p>
                    <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                    <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                    <div className="ratings pb-3">
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="product-card rounded-3 mt-4">
                <div className="product-image cards">
                    <img src={recent} alt="Men's Boxer"/>
                </div>
                <div className="product-info ps-3">
                    <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                    <p className="product-code text-muted mb-2">BYC 1163</p>
                    <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                    <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                    <div className="ratings pb-3">
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
            
            <div className="product-card rounded-3 mt-4">
                <div className="product-image cards">
                    <img src={recent} alt="Men's Boxer"/>
                </div>
                <div className="product-info ps-3">
                    <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                    <p className="product-code text-muted mb-2">BYC 1163</p>
                    <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                    <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                    <div className="ratings pb-3">
                        <img src={star} alt="" />
                    </div>
                </div>
            </div>
        </div>


            {/* <div className="border-top border-3 border-primary">
            <div className="row ">
        <!-- This makes it 99% of the container width -->
            <div className="col-md "> 
                <div className="row  pt-4 col-xl-11-88 ">
                    <div className="col-lg-1"></div>
                    <!-- Product Card 1 --> 
                    <!-- col-xl-2-4 is approx 1/5 of the row -->
                    <div className="col-10 col-md-7 col-lg-2 col-xl-2-4 "> 
                        <div className="product-card mb-4 border-0 rounded-2">
                            <img src={recent} className="product-image rounded-top-2 w-100 mb-3"/>
                            <h5 className="product-title fw-bold mb-1 ps-3">MEN BOXERS</h5>
                            <p className="product-code text-muted ps-3">BYC 1163</p>
                            <p className="product-description text-muted mb-3 ps-3">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                            <p className="product-price fw-bold mb-2 ps-3">₦1,900.00</p>
                            <div className="ratings pb-3 ps-3">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product Card 2 -->
                    <div className="col-10 col-md-7 col-lg-2 col-xl-2-4">
                        <div className="product-card mb-4 border-0 rounded-2">
                            <img src={recent} className="product-image rounded-top-2 w-100 mb-3"/>
                            <h5 className="product-title fw-bold mb-1 ps-3">MEN BOXERS</h5>
                            <p className="product-code text-muted ps-3">BYC 1163</p>
                            <p className="product-description text-muted mb-3 ps-3">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                            <p className="product-price fw-bold mb-2 ps-3">₦1,900.00</p>
                            <div className="ratings pb-3 ps-3">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product Card 3 -->
                    <div className="col-10 col-md-7 col-lg-2 col-xl-2-4">
                        <div className="product-card mb-4 border-0 rounded-2">
                            <img src={recent} alt="Men Boxers" className="product-image rounded-top-2 w-100 mb-3"/>
                            <h5 className="product-title fw-bold mb-1 ps-3">MEN BOXERS</h5>
                            <p className="product-code text-muted ps-3">BYC 1163</p>
                            <p className="product-description text-muted mb-3 ps-3">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                            <p className="product-price fw-bold mb-2 ps-3">₦1,900.00</p>
                            <div className="ratings pb-3 ps-3">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product Card 4 -->
                    <div className="col-10 col-md-7 col-lg-2 col-xl-2-4">
                        <div className="product-card mb-4 border-0 rounded-2">
                            <img src={recent} alt="Men Boxers" className="product-image rounded-top-2 w-100 mb-3"/>
                            <h5 className="product-title fw-bold mb-1 ps-3">MEN BOXERS</h5>
                            <p className="product-code text-muted ps-3">BYC 1163</p>
                            <p className="product-description text-muted mb-3 ps-3">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                            <p className="product-price fw-bold mb-2 ps-3">₦1,900.00</p>
                            <div className="ratings pb-3 ps-3">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    
                    <!-- Product Card 5 -->
                    <div className="col-10 col-md-7 col-lg-2 col-xl-2-4">
                        <div className="product-card mb-4 border-0 rounded-2">
                            <img src={recent} alt="Men Boxers" className="product-image rounded-top-2 w-100 mb-3"/>
                            <h5 className="product-title fw-bold mb-1 ps-3">MEN BOXERS</h5>
                            <p className="product-code text-muted ps-3">BYC 1163</p>
                            <p className="product-description text-muted mb-3 ps-3">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</p>
                            <p className="product-price fw-bold mb-2 ps-3">₦1,900.00</p>
                            <div className="ratings pb-3 ps-3">
                                <img src={star} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-1"></div>
                </div>
            </div>
             </div>
            </div> */}
        </div>
      </div>

    </>
  )
}

export default Recentlyview
