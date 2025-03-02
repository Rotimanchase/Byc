import React, { useState } from 'react';

const SortBtn = ({ defaultSort = "Most Sold" }) => {
  const [selectedSort, setSelectedSort] = useState(defaultSort);
  const sortOptions = ["Most Sold", "Newest", "Oldest", "Price: High to Low", "Price: Low to High"];

  const handleSortChange = (option) => {
    setSelectedSort(option);
    // Add your sorting logic here or emit an event to parent component
  };

  return (
    <div className="dropdown">
      <button 
        className="btn border border-dark rounded text-dark position-relative" 
        type="button" 
        id="dropdownMenuButton" 
        data-bs-toggle="dropdown" 
        aria-expanded="false"
        style={{ minWidth: '140px', padding: '16px 12px 6px' }}>
        <div className="position-absolute top-0 start-0 px-2" style={{ transform: 'translateY(-50%)' }}>
          <span className="bg-white px-1 text-uppercase small text-dark">
            SORT BY
          </span>
        </div>
        <div className="d-flex justify-content-between align-items-center w-100">
          <span className="fw-medium">{selectedSort}</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="14" 
            height="14" 
            fill="currentColor" 
            viewBox="0 0 16 16">
            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
          </svg>
        </div>
      </button>
      {/* <ul className="dropdown-menu shadow-sm" aria-labelledby="dropdownMenuButton">
        {sortOptions.map((option) => (
          <li key={option}>
            <a 
              className={`dropdown-item ${selectedSort === option ? 'bg-light fw-semibold' : ''}`}
              href="#"
              onClick={(e) => {
                e.preventDefault();
                handleSortChange(option);
              }}>
              {option}
            </a>
          </li>
        ))}
      </ul> */}
    </div>
  );
};

export default SortBtn;