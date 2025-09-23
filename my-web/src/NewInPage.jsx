import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // ✅ Import Link for navigation
import './NewInPage.css';

import earring from './assets/pearl.jpg';
import flats from './assets/flats.jpg';
import celine from './assets/celine.jpg';
import pink from './assets/pink.jpg';

function NewInPage() {
  const categories = ['All', 'Accessories', 'Bags', 'Shoes', 'Dresses'];

  const allProducts = [
    { id: 1, name: 'Pearl Earrings', category: 'Accessories', image: earring, price: 'Rs. 799' },
    { id: 2, name: 'Summer Flats', category: 'Shoes', image: flats, price: 'Rs. 2,499' },
    { id: 3, name: 'White Bridal Bag', category: 'Bags', image: celine, price: 'Rs. 1,999' },
    { id: 4, name: 'Summer Dress', category: 'Dresses', image: pink, price: 'Rs. 3,299' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredProducts =
    selectedCategory === 'All'
      ? allProducts
      : allProducts.filter(product => product.category === selectedCategory);

  return (
    <div className="newin-container">
      {/* Sidebar */}
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

      {/* Product Grid */}
      <main className="newin-products">
        {filteredProducts.map(product => (
          <Link
            to={`/product/${product.id}`} // ✅ Navigate to dynamic product detail route
            key={product.id}
            className="product-card"
          >
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
          </Link>
        ))}

        {filteredProducts.length === 0 && (
          <p className="no-products">No products found in this category.</p>
        )}
      </main>
    </div>
  );
}

export default NewInPage;
