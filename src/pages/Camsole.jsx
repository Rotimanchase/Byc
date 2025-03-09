import React, { useState } from 'react'
import Wishlistbtn from '../component/Wishlistbtn'
import SortBtn from '../component/SortBtn'
import ViewToggle from '../component/ViewToggle'
import { recent, star } from '../assets'

const Camsole = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="container-fluid">
      <div className="border mx-5 px-3 mt-5 border-1 border-muted rounded-3">
          <div className=" d-md-flex justify-content-between">
            <h5 className='pt-5 mb-3 ms-md-4 fw-bold'>Camsole</h5>

            <div className="mt-4">
              <SortBtn/>
            </div>    
          </div>

          <div className="border-top border-2 border-muted pt-4 d-flex justify-content-between">
            <div className="pt-2 ms-3">
                <small className="text-muted pt-md-">6 Product Found</small>
            </div>

            <div className="vt mb-2">
                <ViewToggle/>
            </div>
          </div>

          <div className="product-grid gap-4 d-grid ps-4 pe-4 mb-3 border-top border-2" >
              <div className="product-card rounded-3 mt-4"  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                  <div className="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p className="product-code text-muted mb-2">BYC-2598ABC</p>
                      <small className="product-description text-muted">Long Cotton Adjustable Strap Camisole /<br/> Tank Top - whte</small>
                      <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>

                      <div className={`transition-${isHovered ? 'show' : 'hide'
                         }`} style={{opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.3s ease', pointerEvents: isHovered ? 'auto' : 'none'}}>
                            <Wishlistbtn/>
                      </div>

                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4" >
                  <div className="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p className="product-code text-muted mb-2">BYC-501LMS</p>
                      <small className="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
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
                      <h5 className="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p className="product-code text-muted mb-2">BYC-501LMS</p>
                      <small className="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
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
                      <h5 className="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p className="product-code text-muted mb-2">BYC-501LMS</p>
                      <small className="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
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
                      <h5 className="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p className="product-code text-muted mb-2">BYC-501LMS</p>
                      <small className="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p className="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>


              
          </div>
        </div>
      </div>
    </>
  )
}

export default Camsole
