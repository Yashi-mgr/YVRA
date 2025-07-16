import React from 'react'
import { useNavigate } from 'react-router-dom';
import './NewIn.css'

const products = [
  {
    id: 1,
    image: '/products/home1.jpeg',
    brand: 'TOTEME'
  },
  {
    id: 2,
    image: '/products/home2.jpeg',
    brand: 'SAINT LAURENT'
  },
  {
    id: 3,
    image: '/products/home3.jpeg',
    brand: 'SAINT LAURENT'
  },
  {
    id: 4,
    image: '/products/home4.jpeg',
    brand: 'SAINT LAURENT'
  }
];

function NewIn() {
   const navigate = useNavigate();

   const handleShopClick = () => {
     navigate('/shop');
   };

  return (
    <section className="newin-section">
      <div className="newin-text">
        <p className="small-label"> What's New ?</p>
        <h2>New In</h2>
        <p>
          New arrivals, now dropping five days a week – discover the latest launches
          onsite from Monday to Friday
        </p>
        <button className="shop-btn" onClick={handleShopClick}>Shop New In</button>
      </div>

       <div className="newin-products">
         {products.map((item) => (
           <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.brand} />
              <p className="brand-name">{item.brand}</p>
           </div>
         ))}
       </div>
    </section>
  )
}

export default NewIn
