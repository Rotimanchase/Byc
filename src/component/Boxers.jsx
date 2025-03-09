import React, { useState } from 'react'
import { bbox, star, w1box, w2box } from '../assets'
import ViewToggle from './ViewToggle'
import SortBtn from './SortBtn'
import Wishlistbtn from './Wishlistbtn'

const Boxers = () => {
    const [isHovered, setIsHovered] = useState(false);
  return (
    <>
       <div className="container-fluid">
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb py-5 ms-5">
            <li className="breadcrumb-item bd-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item  bd-item">Men</li>
            <li className="breadcrumb-item bd-item active text-danger" aria-current="page">Boxers</li>
        </ol>
        </nav>


      <div className=" mx-5 px-3 mt-5 my-5 ">
          <div className=" d-md-flex justify-content-between">
            <h5 className='pt-5 fs-3 mb-3 ms-md-4 fw-bold'>Boxers</h5>

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
                      <img src={bbox} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1161</p>
                      <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
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
                      <img src={w1box} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1162</p>
                      <small className="product-description text-muted">Fashionable Men's Underwear Boxer<br/> Cotton Underwear 3 In 1</small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4">
                  <div className="product-image cards">
                      <img src={bbox} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1163</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4">
                  <div className="product-image cards">
                      <img src={w2box} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1165</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4">
                  <div className="product-image cards">
                      <img src={bbox} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1166</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>


              
          </div>


          <div className="product-grid gap-4 d-grid ps-4 pe-4 mb-3 my-5" >
              <div className="product-card rounded-3 mt-4"  onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}>
                  <div className="product-image cards">
                      <img src={bbox} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1161</p>
                      <small className="product-description text-muted">Long Cotton Adjustable Strap Camsole /<br/> Tank Top - whte</small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
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
                      <img src={w1box} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1162</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4">
                  <div className="product-image cards">
                      <img src={bbox} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1163</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4">
                  <div className="product-image cards">
                      <img src={w2box} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC 1163</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
                      <div className="ratings pb-3">
                          <img src={star} alt="" />
                      </div>
                  </div>
              </div>
              
              <div className="product-card rounded-3 mt-4">
                  <div className="product-image cards">
                      <img src={w1box} alt="Men's Boxer"/>
                  </div>
                  <div className="product-info ps-3">
                      <h5 className="product-title my-3 fw-bold mb-2">MEN BOXERS</h5>
                      <p className="product-code text-muted mb-2">BYC-501LMS</p>
                      <small className="product-description text-muted">Amet minim mollit non deserunt<br/> ullamco est sit . </small>
                      <p className="product-price fw-bold mt-2 mb-2">₦2,800.00</p>
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

export default Boxers

