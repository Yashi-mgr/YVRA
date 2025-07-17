import React from 'react'
import './ProductCard.css';

function ProductCard({ image, onClick }) {
  return (
    <div className='product-card' onClick={onClick}> <img src={image} alt="product" />
    </div>
  )
}

export default ProductCard
