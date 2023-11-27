import React from 'react';
import { Link } from 'react-router-dom';

export default function CustomerNavbar() {
  return (
    <div>
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <Link className='navbar-brand' to='/product'>
          Product
        </Link>
        
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
      </nav>
    </div>
  );
}