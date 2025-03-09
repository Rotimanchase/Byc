import React, { useState } from 'react'
import Pargin from './Pargin'
import { bxs1, bxs2, bxs3, bxs4, bxs5, recent, star, wishcart, wishlove } from '../assets'
import Recentlyview from './Recentlyview'
// import Wishlistbtn from './Wishlistbtn'
import SortBtn from './SortBtn'
import ViewToggle from './ViewToggle'
import { Products } from './usefulData/Products'
import { Link } from 'react-router-dom'



const Product = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <>
      <div className="container-fluid mt-4 mx-md- mt-md-5">

        <div className="border border-muted rounded-lg p-md-5 mx-5 p-4 p-md-">
            <div className="d-flex justify-content-between align-items-center mb-3">
                <p className="font-weight-bold text-lg">All Products</p>
                <SortBtn />
            </div>
            <div className="border-top border-muted"></div>
            <div className=" justify-content-end d-flex py-4">
                <ViewToggle  />
            </div>
            <div className="product-grid gap-4 d-grid mb-5 pt-5 border-top border-2 mb-5 ">
                {Products.map((prod, index) => (
                    <div
                        key={index}
                        className="product-card">
                        <Link
                            to="/Product"
                            className="card border-0 text-decoration-none rounded-3 h-100 position-relative hover-bg-light "
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}>
                            <img
                                src={prod.image}
                                alt="Product Image"
                                className="card-img-top" />
                            <div className="card-body">
                                <h5 className="card-title fw-bold text-uppercase text-dark">
                                    {prod.productName}
                                </h5>
                                <p className="card-text text-muted">{prod.productCode}</p>
                                <small className="text-muted">{prod.productDescription}</small>
                                <p className="fw-bold">{prod.productPrice}</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <img src={star} alt="Star Icon" />
                                </div>

                            </div>

                            <div className="card-footer">
                                 {hoveredIndex === index && (
                                    <div className="d-lg-flex gap-3 my-2 mb-4 w-100">
                                        <Link to="/Product">
                                            <button className="btn border-danger d-flex align-items-center gap-2">
                                                <img src={wishlove} alt="Add to Wishlist" className="h-20 w-20" />
                                                <span className="text-danger font-weight-bold">Wishlist</span>
                                            </button>
                                        </Link>
                                        <Link to="/Product">
                                            <button className="btn btn-danger d-flex align-items-center gap-2">
                                                <img src={wishcart} alt="Add to Cart" className="h-20 " />
                                                <span className="text-white font-weight-bold">Buy Now</span>
                                            </button>                                            
                                        </Link>
                                    </div>
                                )}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            <div className="d-flex justify-content-center mt-5 pt-5">
                <Pargin />
            </div>
        </div>

      </div>
        <div className=''>
            <Recentlyview />
        </div>
    </>
  )
}

export default Product
