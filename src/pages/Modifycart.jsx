import React, { useState } from 'react'
// import star from 'react-bootstrap-icons'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { bbox, bxs1, bxs2, marrowl, marrowr, mboxer, mboxers, mcart, mnum, modminus, modplus, mplus, mrange, mrater, msize, mstar1, mstar2, redvec, star, w1box, w2box, wishcart, wishlove } from '../assets'
import Recentlyview from '../component/Recentlyview'

const Modifycart = ({basePrice=2800}) => {
    const images = [
        bbox,
        w1box,
        w2box,
        bbox,
        w1box,
        bxs1,
        bxs2,
        bxs1,
      ];

      const [currentIndex, setCurrentIndex] = useState(0);
      const [count, setCount] = useState(1);
      const [totalPrice, setTotalPrice] = useState(basePrice);

      const handlePrev = () => {
          setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
      };
  
      const handleNext = () => {
          setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
      };

        const handleIncrease = () => {
            setCount((prevCount) => {
            const newCount = prevCount + 1;
            setTotalPrice(newCount * basePrice);
            return newCount;
            });
        };

      const handleDecrease = () => {
        if (count > 1) {
          setCount((prevCount) => {
            const newCount = prevCount - 1;
            setTotalPrice(newCount * basePrice);
            return newCount;
          });
        }
      };    
    
  return (
    <>
      <div className="container-fluid">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb py-5 ms-5">
            <li className="breadcrumb-item bd-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item  bd-item">Men</li>
            <li className="breadcrumb-item bd-item active text-danger" aria-current="page">Cart</li>
        </ol>
        </nav>


        <div className="border border-2 border-muted rounded-3 mx-5 my-5">
            <div className="row">
                <div className="col-md-12 col-lg-5 py-5 ps-md-5">
                    <div id="carousel" className="carousel slide text-center">
                        {/* Main Image Display */}
                        <div className="carousel-inner mb-3 ">
                            <div className="carousel-item active d-flex justify-content-center">
                                <img src={images[currentIndex]} className="d-block w-75 img-fluid" alt={`slide ${currentIndex + 1}`} />
                            </div>
                        </div>

                        {/* Navigation Buttons + Thumbnails in the same row */}
                        <div className="d-flex align-items-center justify-content-center mt-5">
                            {/* Previous Button */}
                            <button className="btn btn-secondary me-5" type="button" onClick={handlePrev}>
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>

                            {/* Thumbnails */}
                            <div className="d-flex gap-2 thumbs">
                                {images
                                    .slice(currentIndex + 1, currentIndex + 5)
                                    .concat(images.slice(0, Math.max(0, 4 - (images.length - currentIndex - 1)))) // Wrap-around thumbnails
                                    .map((img, index) => (
                                        <div key={index} className="col-auto">
                                            <img
                                                src={img}
                                                className="img-fluid rounded"
                                                style={{ width: "80px", height: "60px", cursor: "pointer" }}
                                                alt={`thumbnail ${index}`}
                                                onClick={() => setCurrentIndex((currentIndex + index + 1) % images.length)}
                                            />
                                        </div>
                                    ))}
                            </div>

                            {/* Next Button */}
                            <button className="btn btn-secondary ms-5" type="button" onClick={handleNext}>
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
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
                            <h4 className="fw-bold fs-3 mb-4">₦{totalPrice.toLocaleString()}.00</h4>
                            <img className='img-fluid w-50 mt-3' src={msize} alt="" />
                        </div>

                        <div className="d-md-flex gap- mb-4 mt-4">
                            <div className="d-flex align-items-center ">
                                <button className="btn btn-danger py-3 px-4 rounded-0 " onClick={handleDecrease}><img src={modminus} alt="" /></button>
                                <input type="text" value={count} disabled className="form-control bg-white border-0 fs-5 text-center w-25" />
                                <button className="btn btn-danger py-3 px-4 rounded-0" onClick={handleIncrease}><img src={modplus} alt="" /></button>
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
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
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
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
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
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-fill"></i>
                            <i className="bi bi-star-half"></i>
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
