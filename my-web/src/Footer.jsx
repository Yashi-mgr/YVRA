import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-top'>
        <h2 className='logo'>YVRA</h2>
        <ul className='footer-links'>
          <li><a href="#">Shop</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div> 
      
      <div className="social-icons">
        <a href="#"><FontAwesomeIcon icon={faFacebook} /></a>
        <a href="https://www.instagram.com/"><FontAwesomeIcon icon={faInstagram} /></a>
        <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>


      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} YVRA. All rights reserved.</p>
        <p className="credits">Made with 💖 by Yashica</p>
      </div>
       
    </footer>
  )
}

export default Footer
