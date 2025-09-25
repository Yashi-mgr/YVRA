import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
import earring from "./assets/pearl.jpg";
import flats from "./assets/flats.jpg";
import celine from "./assets/celine.jpg";
import pink from "./assets/pink.jpg";
import "./ProductDetail.css";

const allProducts = [
  { id: 1, name: 'Pearl Earrings', category: 'Accessories', image: earring, price: 'NPR. 3500', desc: 'Elegant pearl studs for any occasion.' },
  { id: 2, name: 'Summer Flats', category: 'Shoes', image: flats, price: 'NPR. 4500', desc: 'Comfortable and stylish for summer.' },
  { id: 3, name: 'White Bridal Bag', category: 'Bags', image: celine, price: 'NPR. 5999', desc: 'Perfect for weddings and formal events.' },
  { id: 4, name: 'Summer Dress', category: 'Dresses', image: pink, price: 'NPR. 3499', desc: 'Light and breezy for warm days.' },
];

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

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

        <div className="quantity-box">
          <label>Quantity</label>
          <div className="quantity-controls">
            <button
              className="qty-btn"
              onClick={() => setQuantity(prev => Math.max(prev - 1, 1))}
              disabled={quantity === 1}
            >−</button>
            <span className="qty-display">{quantity}</span>
            <button
              className="qty-btn"
              onClick={() => setQuantity(prev => Math.min(prev + 1, 3))}
              disabled={quantity === 3}
            >+</button>
          </div>
        </div>

        <button className="btn add" onClick={() => addToCart(product, quantity)}>
          Add to Cart
        </button>
        <button className="btn buy">Buy Now</button>
      </div>
    </div>
  );
}
