import React, { useState } from 'react';
import './NewInPage.css';

function NewInPage() {
  // const categories = ['All', 'Accessories', 'Bags', 'Shoes', 'Dresses'];

  const allProducts = [
    { id: 1, name: 'Pearl Earrings', category: 'Accessories', image: '/images/acc1.jpg', price: 'Rs. 799' },
    { id: 2, name: 'White Bridal Bag', category: 'Bags', image: '/images/bag1.jpg', price: 'Rs. 1,999' },
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
    </div>
  );
}

export default NewInPage;
