import React from 'react'
import './Home.css'
import homeImage from './assets/homePage.jpeg'

const Home = () => {
  return (
    <div className="home-section">
      <div className="half-bg">
        <h1 className="hero-text">Welcome to YVRA</h1>
      </div>
      <div className="below-half">
        <p>Explore the trend. Own the style.</p>
        <img src= {homeImage} />
      </div>
    </div>
  )
}

export default Home
