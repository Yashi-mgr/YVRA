import React from 'react'
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

import './Shop.css'

import kelly from './assets/kelly.png'
import shopCover1 from './assets/shopCover1.jpeg'

function Shop() {
  const navigate = useNavigate();

  return (
    <div className='Shop-Page'>
      <section className="section">
        <h2>New In</h2>
        <div className="product-row">
          <ProductCard image={kelly} onClick={() => navigate('/assets/kelly.png')} />
          <ProductCard image={shopCover1} onClick={() => navigate('/assets/shopCover1.jpeg')} />
        </div>
      </section>

      <section className="section">
        <h2>Top Sellers</h2>
        <div className="product-row">
          <ProductCard image={kelly} onClick={() => navigate('/assets/kelly.png')} />
          <ProductCard image={shopCover1} onClick={() => navigate('/shop/new-sellers')} />
        </div>
      </section>
    </div>
  );
}

export default Shop
