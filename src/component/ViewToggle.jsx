import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const ViewToggle = () => {
  const [activeView, setActiveView] = useState('list');

  return (
    <div className="btn-group">
      <button
        onClick={() => setActiveView('list')}
        className={`btn ${
          activeView === 'list' 
            ? 'btn-light' 
            : 'btn-outline-secondary'
        }`}
        type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35"
          height="35"
          fill={activeView === 'list' ? 'black' : 'light'}>
          <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
        </svg>
      </button>
      <button
        onClick={() => setActiveView('grid')}
        className={`btn ${
          activeView === 'grid' 
            ? 'btn-light' 
            : 'btn-outline-light'
        }`}
        type="button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="35"
          height="35"
          fill={activeView === 'grid' ? 'red' : 'red'}>
          <path d="M3 3h8v8H3zm10 0h8v8h-8zM3 13h8v8H3zm10 0h8v8h-8z" />
        </svg>
      </button>
    </div>
  );
};

export default ViewToggle;