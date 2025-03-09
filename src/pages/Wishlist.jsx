import React, { useState } from 'react'
import { bbox, star, w1box, w2box } from '../assets';
import Wishlistbtn from '../component/Wishlistbtn';

const Wishlist = () => {
    const [isHovered, setIsHovered] = useState(false);
    
  return (
    <>
       <div className="container-fluid">
       <nav aria-label="breadcrumb ">
        <ol className="breadcrumb ms-5 py-5">
            <li className="breadcrumb-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item active" aria-current="page">Wishlist</li>
        </ol>
        </nav>


      <div className=" mx-5 mt-5 ">
          <div className=" d-md-flex justify-content-between">
            <h5 className='pt-5 fs-3 mb-5 ms-md-4 fw-bold'>Wishlist</h5>  
          </div>


          <div className="product-grid gap-4 d-grid px-4 mb-5" >
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


          <div className="product-grid gap-4 d-grid px-4 mb-3 my-5" >
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

export default Wishlist
