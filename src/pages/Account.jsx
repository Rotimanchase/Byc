import React from 'react'

const Account = () => {
  return (
    <div>
      <div className="border border-1 border-muted my-5 mx-5 py-5 rounded-3">
        <div className="row ">
            <div className="col-md-12 col-lg-6 border-end border-2 border-muted my-5">
                <div className="text-center ">
                    <h4 className='fw-bolder mb-5'>Login</h4>
                </div>
                <div className="py-3 ms-md-5 justify-content-center">
                <form className='mb-3 me-md-5' action="">
                    <label className='mb-2 fs-5 fw-light form-label' htmlFor="Phone">Email addres</label>
                    <input className='w-100 form-control  border-danger rounded-2 p-3 border-1' type="email" name="email" id="email" />
                </form>

                <form className='mb-3 me-md-5' action="">
                    <label className='mb-2 fs-5 fw-light form-label' htmlFor="password">Password</label>
                    <input className='w-100 form-control  border-danger rounded-2 p-3 border-1' type="password" name="Phone" id="phone" />
                </form>

                <div className="d-md-flex justify-content-between me-md-5">
                    <div className="d-flex gap-3">
                        <div className="inp">
                         <input type="checkbox" style={{width: ""}} name="" id="checkbox" />
                        </div>
                        <p className="mt-">Remember Me</p>
                    </div>

                    <p>Forgot your password?</p>
                </div>
                
                <div className="me-md-5 pb-5">
                    <button  className='btn border-0 bg-danger w-100 fw-bold fs-6 p-3 rounded-3 mt-2 outline-0 text-white'>Login</button>
                </div>
                </div>
                
            </div>
            <div className="col-md-12 col-sm-10 col-lg-6 ps-md-5 my-5">
                <div className="text-center pb-md-4 mb-5">
                    <h4 className='fw-bolder mb-md-5 pb-5'>Create your an account</h4>
                    <p className='pb-5'>Create your customer account in just a few clicks!<br/> 
                    You can register using your e-mail address </p>
                </div>

                <div className="create-btn mt-5 pt-5 me-md-5">
                    <button  className='btn border-0 bg-danger w-100 fw-bold fs-6 p-3 rounded-3 mt-2 outline-0 text-white'>CREATE AN ACCOUNT VIA E-MAIL
                    </button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Account
