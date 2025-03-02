import React from 'react';
import { arrowleft, arrowright, eye, firstimg, fleft, fmid, fright,  pic1, pic2, pic3, sleft, smid, sright, tbl, tbr, ttr } from '../assets';
import Blogfoot from '../component/Blogfoot';

const Home = () => {
  return (
    <>
      <div className="container">
        <div className="col text-center my-5">
          <h3>Your body deserves comfort</h3>
          <h1 className="display-3 fw-bold">Get the best for yourself</h1>
        </div>

        <div className="row">
          <div className="col-lg-12 d-md-block text-center pb-5" >
            <div class="d-grid gap-2 d-md-block justify-content-center d-md-flex" >
              <button className="btn btn1 border-dark border-2 btn-dark fw-bold " type="button">Shop Now</button>
              <button className="btn btn1 border-dark border-2 fw-bold" type="button">Learn more</button>

              {/* <div class="d-grid gap-2 justify-content-center d-md-flex">
                <button class="btn btn-dark btn1 me-md-2" type="button">Button</button>
                <button class="btn btn1 " type="button">Learn more</button>
              </div> */}
            </div>
          </div>

          

        </div>

          <div className="container-fluid ">
              <div className="row justify-content-center py-5 ">
                <img className='img-fluid' src={firstimg} alt="" />
              </div>
          </div>
         
      </div>

      <div className="container-fluid">
        <div className="text-center py-5">
          <h1 className="fw-bold">Checkout BYC New Arrivals</h1>
        </div>

        <div className="row align-item-center ms-5 me-5 py-5">
          <div className="col-12 col-lg-4">
            <div className="cards border-0">
              <div className="card-img-top">
                <img src={sleft} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title mt-5">
                  <h2 className='fw-bold'>Men Underwears</h2>
                  <p>Parturient Venenatis Etiam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="cards border-0">
              <div className="card-img-top">
                <img src={smid} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title mt-5">
                  <h2 className='fw-bold'>Men Underwears</h2>
                  <p>Parturient Venenatis Etiam</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-4">
            <div className="cards border-0">
              <div className="card-img-top">
                <img src={sright} alt="" />
              </div>
              <div className="card-body">
                <div className="card-title mt-5">
                  <h2 className='fw-bold'>Men Underwears</h2>
                  <p>Parturient Venenatis Etiam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-12 text-center py-5">
          <button className="btn btn1 fw-bold border-dark border-1">View All</button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="row me-5 ms-5 pt-5 home-card">
          <div className="col-12 col-lg-6 byc-card">
            <div className="card h-100 bg-light border-0 py-5 justify-content-center align-items-left ">
              <div className="card-title byc-text ps-3  ms-lg-5">
                <h1 className="text-muted fw-bold pt-5">BYC Collection 2021</h1>
                <h1 className="display-3 fw-bolder">BYC Collection</h1>
                <p className="text-muted">The best everyday option in a Super Saver range within a<br/> reasonable price. It is our responsibility to keep you<br/> 100 percent stylish. Be smart & trendy with us.</p>
                <button className="btn fw-bold btn1 border-dark border-1 mt-5">Explore</button>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6">
            <div className="card h-100 cards border-0">
              <div className="card-img">
                <img src={ttr} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="row pe-5 ps-5 pt-3 pb-5 ">
        <div className="col-12 col-lg-6 byc-card">
            <div className="card h-100 cards border-0">
              <div className="card-img">
                <img src={tbl} alt="" />
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-6 ">
            <div className="card h-100 cards border-0">
              <div className="card-img">
                <img src={tbr} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="col-12 col-lg-12 text-center py-5">
          <button className="btn btn1 fw-bold border-dark border-1">View All</button>
        </div>
      </div>

      <div className="container-fluid">
        <div className="text-center py-5">
          <h1 className="display-5 fw-bold">Shop By Category</h1>
        </div>
        
        <div className="row">
          <div className="col-h3 text-center py-4 justify-content-center d-flex gap-5">
            <h3 className=" fw-light border-bottom border-1 pb-3">For Women</h3>
            <h3 className=" fw-light border-1 border-bottom border-dark text-muted">For Men</h3>
            <h3 className=' fw-light'>For Kids</h3>
          </div>
        </div>
        

        <div className="row pb-5">
          <div className="col btn2 text-center justify-content-center gap-2 d-flex">
            <button className="btn btn-lg border-2 border-light">T-Shirt</button>
            <button className="btn btn-lg border-2 border-light">Singlets</button>
            <button className="btn btn-lg bg-danger text-white fw-light border-0">Pants</button>
            <button className="btn btn-lg border-2 border-light fw-light">Boxer</button>
          </div>
        </div>

        <div className="row py-5 g-0 justify-content-center position-relative">
          <div className="col-12 col-lg-3 ">
            <div className="cards border-0">
              <div className="card-img-top">
                <img className='' src={pic1} alt="" />
              </div>
              <div className="card-body">
                  <div className="card-title ms-3">
                    <h6 className='fw-bold'>WOMEN PANTS <span className='fw-lighter'>BYC-501LMS</span></h6>
                    <p>#2,000.00</p>
                  </div>
                </div>
            </div>
          </div>

          <div className="col-12 col-lg-3">
            <div className="cards border-0">
              <div className="card-img">
                <img src={pic2} alt="" />         
              </div>
              <div className="card-body">
              <div className="card-title ms-3">
                  <h6 className='fw-bold'>WOMEN PANTS <span className='fw-lighter'>BYC-501LMS</span></h6>
                  <p>#2,000.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-lg-3 ">
            <div className="cards border-0">
              <div className="card-img">
                <img src={pic3} alt="" />
              </div>
              <div className="card-body">
              <div className="card-title ms-3">
                  <h6 className='fw-bold'>WOMEN PANTS <span className='fw-lighter'>BYC-501LMS</span></h6>
                  <p>#2,000.00</p>
                </div>
              </div>
            </div>
          </div>

          <div className="arrow-btn position-absolute start-0 top-50 d-flex justify-content-between translate-middle-y" >
            <button className='btn '><img src={arrowleft} className=''></img></button>
            <button className='btn '><img src={arrowright} className=''></img></button>
          </div>
        </div>

        <div className="col-12 col-lg-12 text-center py-5">
           <button className="btn btn1 fw-bold border-dark border-1">View All</button>
        </div>

        <div className="text-center py-5">
          <h1 className="fw-bold">BYC AFRICA Blog News</h1>
        </div>

      </div>

      <Blogfoot/>

      <div className="col-12 col-lg-12 text-center mb-5 py-5">
          <button className="btn btn1 fw-bold border-dark border-1">View All</button>
      </div>
    </>
  )
}

export default Home
