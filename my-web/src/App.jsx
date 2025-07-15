import React from 'react'

import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import Footer from './Footer.jsx'

import './App.css';

function App() {
   return (
    <div className="app-container">
      <Navbar />
      <main style={{ flex: 1 }}>
        <Home />
      </main>
      <Footer />
    </div>
  );
}

export default App
