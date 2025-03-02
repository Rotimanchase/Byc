import React from 'react'
import { wishcart, wishlove } from '../assets'

const Wishlistbtn = () => {
  return (
    <div>
      <div className="col">
        <div className="d-lg-flex gap-2 mb-3 ">
            <button className='border border-danger mt-1 bg-white rounded-2 border-2 outline-0 text-danger py-1 px-3'><img className='img-fluid me-2' src={wishlove} alt="" />Wishlist</button>
            <button  className='border-0 bg-danger rounded-2 mt-1 outline-0 text-white py-1 px-3'><img className='img-fluid me-2' src={wishcart} alt="" />Buy Now</button>
        </div>
      </div>
    </div>
  )
}

export default Wishlistbtn
