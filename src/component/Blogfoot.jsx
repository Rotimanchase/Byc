import React from 'react'
import { eye, larrow, lasth, lastl, lastm, lastr, lcard, lpic,  } from '../assets'

const Blogfoot = () => {
  return (
    <>
      <div className="container-fluid">
        <div class="row g-4 py-5 mx-4">
          <div class="col-12 col-lg-4">
            <div style={{boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} class="card h-100 border-0">
              <img src={lastl} class="card-img-top" alt=""/>
              <div class="card-body blog-foot me-4 ms-4 mt-4">
                <div className="mb-5">
                  <img className='img-fluid w-100 mb-3' src={lcard} alt="" />
                  <div className="d-flex">
                    <small className='me-5 fw-bold'>Wade Warren</small>
                    <small>Fashion Designer</small>
                  </div>
                </div>
                <h3 class="card-title fw-bold">How important are clothes<br/>in your style?</h3>
                <p class="card-text mt-4 ">Amet minim mollit non deserunt ullamco est sit aliqua<br/> dolor do amet sint. Velit officia consequat duis enim<br/> velit mollit. Exercitation veniam consequat sunt nostrud<br/> amet.</p>
                <div className="btn">
                  <button className='btn rounded-0 fw-bold px-3 py-3 border-dark border-1 my-5'>Read more <img className='ms-3' src={larrow} alt="" /></button>
                </div>
              </div>
            </div>
          </div>

          <div class="col-12 col-lg-4">
            <div style={{boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} class="card h-100 border-0">
              <img src={lastm} class="card-img-top" alt=""/>
              <div class="card-body blog-foot me-4 ms-4 mt-4">
                <div className="mb-5">
                  <img className='img-fluid w-100 mb-3' src={lcard} alt="" />
                  <div className="d-flex">
                    <small className='me-5 fw-bold'>Wade Warren</small>
                    <small>Fashion Designer</small>
                  </div>
                </div>
                <h3 class="card-title fw-bold">How important are pants<br/>in your style?</h3>
                <p class="card-text mt-4 ">Amet minim mollit non deserunt ullamco est sit aliqua<br/> dolor do amet sint. Velit officia consequat duis enim<br/> velit mollit. Exercitation veniam consequat sunt nostrud<br/> amet.</p>
                <div className="btn">
                  <button className='btn rounded-0 fw-bold px-3 py-3 border-dark border-1 my-5'>Read more <img className='ms-3' src={larrow} alt="" /></button>
                </div>
              </div>
             
            </div>
          </div>
          
          <div class="col-12 col-lg-4 p">
            <div style={{boxShadow: " rgba(99, 99, 99, 0.2) 0px 2px 8px 0px"}} class="card h-100 border-0">
              <img src={lastr} class="card-img-top" alt=""/>
              <div class="card-body blog-foot me-4 ms-4 mt-4">
                <div className="mb-5">
                  <img className='img-fluid w-100 mb-3' src={lcard} alt="" />
                  <div className="d-flex">
                    <small className='me-5 fw-bold'>Wade Warren</small>
                    <small>Fashion Designer</small>
                  </div>
                </div>
                <h3 class="card-title fw-bold">How important are shoes<br/> in your style?</h3>
                <p class="card-text mt-4 ">Amet minim mollit non deserunt ullamco est sit aliqua<br/> dolor do amet sint. Velit officia consequat duis enim<br/> velit mollit. Exercitation veniam consequat sunt nostrud<br/> amet.</p>
                <div className="btn">
                  <button className='btn rounded-0 fw-bold px-3 py-3 border-dark border-1 my-5 '>Read more <img className='ms-3' src={larrow} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blogfoot
