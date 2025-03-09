import React from 'react'
import { address, conta, maile, phn } from '../assets'
import Recentlyview from '../component/Recentlyview'

const Contact = () => {
  return (
    <>
      <div className="container-fluid">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb py-5 ms-5">
            <li className="breadcrumb-item bd-item"><a href="/">Home</a></li>
            <li className="breadcrumb-item bd-item active" aria-current="page">Contact Us</li>
        </ol>
        </nav>


        <div className="text-center">
          <h1 className="display-4 fw-bold py-5">CONTACT US</h1>
        </div>

        <div className="row">
          <div className="col col-lg-12 px-5 py-5">
            <img className=' img-fluid w-100' src={conta} alt="" />
          </div>
        </div>

        <div className="row box-cont border-0 rounded-4 mx-5 py-5 my-5 bg-light d-flex">
          <div className="d-flex col-md-7 col-lg-4 gap-4 align-items-center px-5 py-5">
            <img src={address} alt="" />
            <p className='fs-6'><span className='fs-4 fw-bold'>ADDRESS</span><br/> ( Head Office ) <br/>175 Cameroun Road Aba, Abia State.</p>
          </div>

          <div className="d-flex col-md-7 col-lg-4 gap-4 align-items-center px-5 py-5">
            <img src={phn} alt="" />
            <p className='fs-5'><span className='fs-4 fw-bold'>PHONE</span><br/>08101375376 09053403403</p>
          </div>

          <div className="d-flex col-md-7 col-lg-4  gap-4 align-items-center px-5 py-5">
            <img src={maile} alt="" />
            <p className='fs-5'><span className='fs-4 fw-bold'>EMAIL ADDRESS</span><br/>BYCAFRICA@gmail.com</p>
          </div> 
        </div>

        <div className="text-left ms-5">
          <h1 className="display-5 fw-bold py-5">Drop a Message</h1>
        </div>

        <div className="row ms-5">
          <div className="col-md-12 col-lg-7 mb-5">
            <form className='' action="">
              <label className='mb-4 fs-5 form-label' htmlFor="Phone">Phone</label>
              <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="Phone" name="Phone" id="" />
            </form>
          </div>

          <div className="col-md-12 col-lg-7 mb-5">
            <form className='' action="">
              <label className='mb-4 fs-5 form-label' htmlFor="Email address">Email address</label>
              <input className='w-75 form-control  border-danger rounded-2 p-3 border-1' type="email" name="Phone" id="" />
            </form>
          </div>

          <div className="col-md-12 col-lg-7 mb-5">
            <form className='' action="">
              <label className='mb-4 fs-5 form-label' htmlFor="Note">Notes</label>
              <textarea className='w-75  form-control border-danger rounded-2 p-3 border-1' type="text" rows={5} name="Phone" id="" />
            </form>
          </div>

          <div className="col-md-12 col-lg-7 mb-5">
            <button className='bg-danger w-75 p-3 rounded-3 border-0 text-white'>Submit</button>
          </div>
        </div>
      </div>

      <Recentlyview/>
    </>
  )
}

export default Contact
