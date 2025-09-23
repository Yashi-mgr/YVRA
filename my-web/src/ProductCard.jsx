import React from 'react';
import './ProductCard.css'; 

function ProductCard({ image, brand, onClick }) {
  return (
    <div className="product-card" onClick={onClick}>
      <img src={image} alt={brand} />
      {brand && <p className="brand-name">{brand}</p>}
    </div>
  );
}

export default ProductCard;
