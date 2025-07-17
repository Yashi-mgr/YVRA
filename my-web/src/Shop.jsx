import React from 'react'
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';

import './Shop.css'


function Shop() {
  const navigate = useNavigate();

  return (
    <div className='Shop-Page'>
      <section className="section">
        <h2>New In</h2>
        <div className="product-row">
          <ProductCard image={img1} onClick={() => navigate('/shop/new-in')} />
          <ProductCard image={img2} onClick={() => navigate('/shop/new-in')} />
        </div>
      </section>

      <section className="section">
        <h2>Top Sellers</h2>
        <div className="product-row">
          <ProductCard image={img3} onClick={() => navigate('/shop/top-sellers')} />
          <ProductCard image={img4} onClick={() => navigate('/shop/top-sellers')} />
        </div>
      </section>
    </div>
  );
}

export default Shop
