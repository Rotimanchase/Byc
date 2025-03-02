import React from 'react'
import { vector } from '../assets'

const Searchnav = () => {
  return (
    <div>
      <div className="d-none d-md-flex align-items-center">
      {!isSearchActive ? (
        <a href="/">
          <img src={vector} alt="logo" />
        </a>
      ) : (
        <div className="d-flex align-items-center border-bottom border-secondary pb-1">
          <input
            type="text"
            placeholder="Search Products"
            className="form-control border-0 bg-transparent w-100"
            style={{ width: '555px', boxShadow: 'none', outline: 'none' }}
          />
          <button 
            onClick={() => setIsSearchActive(false)} 
            className="btn btn-link p-0 ml-2">
            <img src={vector} alt="search" style={{ width: '20px', height: '20px', cursor: 'pointer' }} />
          </button>
        </div>
      )}
    </div>
    </div>
  )
}

export default Searchnav
