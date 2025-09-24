import React from 'react'

import { Routes, Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'
import Shop from './Shop.jsx'
import NewInPage from './NewInPage.jsx'
import TopSellersPage from './TopSellersPage.jsx'
import ProductDetail from "./ProductDetail.jsx";
import CartPage from './CartPage.jsx'

import './App.css';

function App() {
   return (
    <div className="app-container">
      <Navbar />
      <main >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/new-in" element={<NewInPage />} />
          <Route path="/shop/top-sellers" element={<TopSellersPage />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App
