import React from "react";

import { useParams } from "react-router-dom";

import earring from "./assets/pearl.jpg";
import flats from "./assets/flats.jpg";
import celine from "./assets/celine.jpg";
import pink from "./assets/pink.jpg";

import "./ProductDetail.css";

const allProducts = [
  { id: 1, name: 'Pearl Earrings', category: 'Accessories', image: earring , price: 'Rs. 799', desc: 'Elegant pearl studs for any occasion.' },
  { id: 2, name: 'Summer Flats', category: 'Shoes', image: flats , price: 'Rs. 2,499', desc: 'Comfortable and stylish for summer.' },
  { id: 3, name: 'White Bridal Bag', category: 'Bags', image: celine , price: 'Rs. 1,999', desc: 'Perfect for weddings and formal events.' },
  { id: 4, name: 'Summer Dress', category: 'Dresses', image: pink , price: 'Rs. 3,299', desc: 'Light and breezy for warm days.' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const product = allProducts.find(p => p.id === parseInt(id));


    if (!product) {
    return (
        <div className="detail-container">
        <p>Product not found. Please check the URL or try again.</p>
        </div>
    );
    }
  return (
    <div className="detail-container">
      <div className="detail-left">
        <img src={product.image} alt={product.name} className="main-pic" />
        <div className="thumbs">
          <img src={product.image} alt="thumb" />
          <img src={product.image} alt="thumb" />
          <img src={product.image} alt="thumb" />
        </div>
      </div>

      <div className="detail-right">
        <h1>{product.name}</h1>
        <p className="price">{product.price}</p>
        <p className="desc">{product.desc}</p>

        <div className="size-box">
          <label>Size</label>
          <select>
            <option>Small</option>
            <option>Medium</option>
            <option>Large</option>
          </select>
        </div>

        <button className="btn add">Add to Cart</button>
        <button className="btn buy">Buy Now</button>
      </div>
    </div>
  );
}
