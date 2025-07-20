import React, { useState } from 'react';
import './NewInPage.css';

function NewInPage() {
  const categories = ['All', 'Accessories', 'Bags', 'Shoes', 'Dresses', 'Tops'];

  const allProducts = [
    { id: 1, name: 'Pearl Earrings', category: 'Accessories', image: '/images/acc1.jpg', price: 'Rs. 799' },
    { id: 2, name: 'White Bridal Bag', category: 'Bags', image: '/images/bag1.jpg', price: 'Rs. 1,999' },
    { id: 3, name: 'Satin Heels', category: 'Shoes', image: '/images/shoe1.jpg', price: 'Rs. 2,499' },
    { id: 4, name: 'Silk Dress', category: 'Dresses', image: '/images/dress1.jpg', price: 'Rs. 4,999' },
    { id: 5, name: 'Lace Top', category: 'Tops', image: '/images/top1.jpg', price: 'Rs. 1,299' },
    // Add more products...
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts = selectedCategory === 'All'
    ? allProducts
    : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="newin-container">
      <aside className="newin-sidebar">
        <h2>Categories</h2>
        <ul>
          {categories.map((cat, i) => (
            <li
              key={i}
              className={`sidebar-item ${selectedCategory === cat ? 'active' : ''}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <main className="newin-main">
        <h1 className="page-title">{selectedCategory === 'All' ? 'All New In Items' : selectedCategory}</h1>

        <div className="product-grid">
          {filteredProducts.map((item) => (
            <div className="product-card" key={item.id}>
              <img src={item.image} alt={item.name} />
              <div className="product-info">
                <p className="product-name">{item.name}</p>
                <p className="product-price">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default NewInPage;
