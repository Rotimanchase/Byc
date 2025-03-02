import React, { useState } from 'react'
import Pargin from './Pargin'
import { bxs1, bxs2, bxs3, bxs4, bxs5, recent, star } from '../assets'
import Recentlyview from './Recentlyview'
import Wishlistbtn from './Wishlistbtn'
import SortBtn from './SortBtn'
import ViewToggle from './ViewToggle'

const Product = () => {
    const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <div className="container-fluid">
        <div className="border mx-5 px-3 mt-5 border-1 border-muted rounded-3">
          <div className=" d-md-flex justify-content-between">
            <h5 className='pt-5 mb-3 ms-md-4 fw-bold'>All Products</h5>

            <div className="mt-4">
              <SortBtn/>
            </div>    
          </div>

          <div className="border-top border-2 border-muted py-4 d-flex justify-content-end">
            <ViewToggle/>
          </div>

          <div class="product-grid gap-4 d-grid ps-4 pe-4 mb-3 border-top border-2" >
              <div class="product-card rounded-3 mt-4"  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-2598ABC</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole /<br/> Tank Top - whte</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>

                      <div className={`transition-${isHovered ? 'show' : 'hide'
                         }`} style={{opacity: isHovered ? 1 : 0, transform: isHovered ? 'translateY(0)' : 'translateY(15px)', transition: 'all 0.3s ease', pointerEvents: isHovered ? 'auto' : 'none'}}>
                            <Wishlistbtn/>
                      </div>

                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-4" >
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>

                      {/* <div className={`translate-all duration-300 ease-in-out ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
                         }`}>
                            <Wishlistbtn/>
                      </div> */}
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-4">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-4">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-4">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>


              <div class="product-card rounded-3 mt-1">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - whte</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-1">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-1">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-1">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div class="product-card rounded-3 mt-1">
                  <div class="product-image cards">
                      <img src={recent} alt="Men's Boxer"/>
                  </div>
                  <div class="product-info ps-3">
                      <h5 class="product-title my-3 fw-bold mb-2">CAMISOLE</h5>
                      <p class="product-code text-muted mb-2">BYC-501LMS</p>
                      <small class="product-description text-muted">Long Cotton Adjustable Strap Camisole <br/> Tank Top - black</small>
                      <p class="product-price fw-bold mt-2 mb-2">₦1,900.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>

              {/* <div className="boxers"> */}
                <div class="product-card rounded-3 mt-4">
                    <div class="product-image cards">
                        <img src={bxs1} alt="Men's Boxer"/>
                    </div>
                    <div class="product-info ps-3">
                        <h5 class="product-title my-3 fw-bold mb-2">BOXERS</h5>
                        <p class="product-code text-muted mb-2">BYC 1161</p>
                        <small class="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                        <p class="product-price fw-bold mt-2 mb-2">₦1,800.00</p>
                        <div className="ratings pb-3">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="product-card rounded-3 mt-4">
                    <div class="product-image cards">
                        <img src={bxs2} alt="Men's Boxer"/>
                    </div>
                    <div class="product-info ps-3">
                        <h5 class="product-title my-3 fw-bold mb-2">BOXERS</h5>
                        <p class="product-code text-muted mb-2">BYC 1201</p>
                        <small class="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                        <p class="product-price fw-bold mt-2 mb-2">₦1,800.00</p>
                        <div className="ratings pb-3">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="product-card rounded-3 mt-4">
                    <div class="product-image cards">
                        <img src={bxs3} alt="Men's Boxer"/>
                    </div>
                    <div class="product-info ps-3">
                        <h5 class="product-title my-3 fw-bold mb-2">BOXERS</h5>
                        <p class="product-code text-muted mb-2">KBY-3204</p>
                        <small class="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                        <p class="product-price fw-bold mt-2 mb-2">₦10,000.00</p>
                        <div className="ratings pb-3">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="product-card rounded-3 mt-4">
                    <div class="product-image cards">
                        <img src={bxs4} alt="Men's Boxer"/>
                    </div>
                    <div class="product-info ps-3">
                        <h5 class="product-title my-3 fw-bold mb-2">BOXERS</h5>
                        <p class="product-code text-muted mb-2">KBY-3204</p>
                        <small class="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                        <p class="product-price fw-bold mt-2 mb-2">₦12,000.00</p>
                        <div className="ratings pb-3">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
                
                <div class="product-card rounded-3 mt-4">
                    <div class="product-image cards">
                        <img src={bxs5} alt="Men's Boxer"/>
                    </div>
                    <div class="product-info ps-3">
                        <h5 class="product-title my-3 fw-bold mb-2">BOXERS</h5>
                        <p class="product-code text-muted mb-2">KBY-3204</p>
                        <small class="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                        <p class="product-price fw-bold mt-2 mb-2">₦10,000.00</p>
                        <div className="ratings pb-3">
                            <img src={star} alt="" />
                        </div>
                    </div>
                </div>
              {/* </div> */}
          </div>

          <div className="border-prod">
            <Pargin/>
          </div>

        </div>

        
      </div>
      <Recentlyview/>
    </>
  )
}

export default Product
