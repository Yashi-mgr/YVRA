import React from 'react'
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
]

const NewIn = () => {
  return (
    <section className="newin-section">
      <div className="newin-text">
         <p className="small-label"> NEW ITEMS</p>
         <h2>New In</h2>
         <p>
         New arrivals, now dropping five days a week – discover the latest launches
         onsite from Monday to Friday
         </p>
         <button className="shop-btn">Shop New In</button>
      </div>

       <div className="New-In">
         {products.map(item => (
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
