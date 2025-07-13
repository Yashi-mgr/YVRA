import React from 'react'
import './Home.css'
import homeImage from './assets/homePage.jpeg'
import cover from './assets/rightcover.jpeg'
import NewIn from './NewIn.jsx'

const Home = () => {
  return (
    <div className='home-section'>
      <div className='layout'>
        <div className='Image'>
          <img src={homeImage} alt='Home' />
        </div>

        <div className='hero-text'>
          <h1 className='title'>Welcome to YVRA</h1>
          <p className='moto'>Explore the trend. Own the style.</p>
          <button className='button'>Explore</button>
        </div>

        <div className='Image'>
          <img src={cover} alt='Cover' />
        </div>
      </div>
      
      <hr className="divider" />

      <NewIn />
      
    </div>
  )
}

export default Home
