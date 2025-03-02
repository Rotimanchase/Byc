import React from 'react'
import { b3, bfirst, bfoot, bsecond, eye, larrow, lasth, lcard, lpic } from '../assets'
import Pargin from '../component/Pargin'

const Blog = () => {
  return (
    <div>
      <div className="container">
        <div className="text-center py-5">
          <h1 className="display-4 fw-bold py-5">BYC AFRICA Blog News</h1>
        </div>

        <div className="card mb-3 border-0 py-md-5">
          <div className="row g-0 ">
            <div className="col-12 col-lg-6">
              <img
                src={bfirst}
                alt=""
                className="img-fluid rounded-start w-100"/>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card-body blog-body ms-3">
                <h3 className="card-title fw-bold">Fashion trend forecast for  Summer 2021</h3>
                <p className="card-text lead mt-4 text-muted">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                <div className="btn">
                  <a href='Blog2' className='btn rounded-0 fw-bold px-3 py-3 border-dark border-1 my-5 '>Read more <img className='ms-3' src={larrow} alt="" /></a>
                </div>
                <div className="mb-5">
                  <img className='img-fluid' src={lcard} alt="" />
                  <div className="d-flex">
                    <small className='me-5 fw-bold'>Wade Warren</small>
                    <small>Fashion Designer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>  

       <div className="container">
        <div className="card mb-3 border-0 py-md-5">
          <div className="row g-0 ">

            <div className="col-12 col-lg-6">
              <div className="card-body blog-body ms-3">
                <h3 className="card-title fw-bold">Fashion trend forecast for  Summer 2021</h3>
                <p className="card-text lead mt-4 text-muted">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                <div className="btn">
                  <button className='btn rounded-0 fw-bold px-3 py-3 border-dark border-1 my-5 '>Read more <img className='ms-3' src={larrow} alt="" /></button>
                </div>
                <div className="mb-5">
                  <img className='img-fluid' src={lcard} alt="" />
                  <div className="d-flex">
                    <small className='me-5 fw-bold'>Wade Warren</small>
                    <small>Fashion Designer</small>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <img
                src={bsecond}
                alt=""
                className="img-fluid rounded-start w-100"/>
            </div>
          </div>
        </div>

      </div>   

      <div className="container">
        <div className="card mb-3 border-0 py-5">
          <div className="row g-0 ">
            <div className="col-12 col-lg-6">
              <img
                src={b3}
                alt=""
                className="img-fluid rounded-start w-100"/>
            </div>
            <div className="col-12 col-lg-6">
              <div className="card-body blog-body ms-3">
                <h3 className="card-title fw-bold">Fashion trend forecast for  Summer 2021</h3>
                <p className="card-text lead mt-4 text-muted">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud ametAmet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet..</p>

                <div className="btn">
                  <button className='btn rounded-0 fw-bold px-3 py-3 border-dark border-1 my-5 '>Read more <img className='ms-3' src={larrow} alt="" /></button>
                </div>
                <div className="mb-5">
                  <img className='img-fluid' src={lcard} alt="" />
                  <div className="d-flex">
                    <small className='me-5 fw-bold'>Wade Warren</small>
                    <small>Fashion Designer</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

     <Pargin/>
    </div>
  )
}

export default Blog
