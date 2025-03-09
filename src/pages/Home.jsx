import React, { useState, useEffect } from 'react';
import { arrowleft, arrowright, eye, firstimg, fleft, fmid, fright,  pic1, pic2, pic3, sleft, smid, sright, tbl, tbr, ttr } from '../assets';
import Blogfoot from '../component/Blogfoot';

const Home = () => {

  const [text, setText] = useState("yourself");
  const texts = ["yourself", "Men", "Women", "kids"];
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      setText((defaultText) => {
        const currentText = texts.indexOf(defaultText);
        const nextText = (currentText + 1) % texts.length;
        return texts[nextText];
      });
    }, 2000); // 3000 ms = 3 seconds
    
    return () => clearInterval(intervalId);
  }, []);

  const images = [
    pic3,
    pic2,
    pic1,
    pic1,
    pic3,
    pic2
  ];
  const [itemsPerSlide, setItemsPerSlide] = useState(3);

  useEffect(() => {
    const updateItemsPerSlide = () => {
      setItemsPerSlide(window.innerWidth < 768 ? 1 : 3);
    };
    updateItemsPerSlide();
    window.addEventListener("resize", updateItemsPerSlide);
    return () => window.removeEventListener("resize", updateItemsPerSlide);
  }, []);

  // Group images dynamically
  const groupedImages = [];
  for (let i = 0; i < images.length; i += itemsPerSlide) {
    groupedImages.push(images.slice(i, i + itemsPerSlide));
  }

  return (
    <>
      <div className="container">
        <div className="col text-center my-5">
          <h3>Your body deserves comfort</h3>
          <h1 className="display-3 fw-bold">Get the best for {text}</h1>
        </div>

        <div className="row">
          <div className="col-lg-12 d-md-block text-center pb-5" >
            <div className="d-grid gap-2 d-md-block justify-content-center d-md-flex" >
              <button className="btn btn1 border-dark border-2 btn-dark fw-bold " type="button">Shop Now</button>
              <button className="btn btn1 border-dark border-2 fw-bold" type="button">Learn more</button>


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
          {/* <div className="col-12 col-lg-3 ">
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
          </div> */}
       <div id="carouselExampleControls" className="carousel slide" data-bs-ride="false">
        <div className="carousel-inner text-center">
          {groupedImages.map((group, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <div className="d-flex justify-content-center">
                {group.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    className="d-block img-fluid mx-2"
                    alt={`Slide ${index * itemsPerSlide + idx + 1}`}
                    style={{ width: `${80 / itemsPerSlide}%`, objectFit: "cover" }}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
        {/* Styled Carousel Buttons */}
        <button
          className="carousel-control-prev position-absolute top-50 start-0 translate-middle-y btn btn-secondary bg- text-dark border-0 p-3 ms-md-5"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
          style={{ width: "70px", height: "70px", opacity: "1" }}>
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next position-absolute top-50 end-0 translate-middle-y btn btn-secondary bg- text-dark border-0 p-3 me-md-5"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
          style={{ width: "70px", height: "70px", opacity: "1" }}>
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
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
