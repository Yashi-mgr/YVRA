import React, { useState } from "react";
import { categories, products } from "./DummyData";
import ProductCard from "./ProductCard";

import "./CategoryPage.css"; 

function CategoryPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((item) => item.category === selectedCategory);

  return (
    <div className="category-page">
      <aside className="sidebar">
        <h3>Categories</h3>
        <ul>
          {categories.map((cat) => (
            <li
              key={cat}
              className={cat === selectedCategory ? "active" : ""}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <section className="products">
        <h2>{selectedCategory} Items</h2>
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default CategoryPage;
