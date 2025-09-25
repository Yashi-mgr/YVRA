import './Navbar.css'
import { Link } from 'react-router-dom'
import { CartContext } from './CartContext'
import { useContext } from 'react'

function Navbar() {
  const {cartItems} = useContext(CartContext);
  return (
    <nav className="navbar">
      <div className="logo">YVRA</div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/shop">Shop</Link></li>
        <li><Link to="/cart" className="cart-link"> 🛒{cartItems.length}
        </Link></li>
      </ul>
    </nav>
  )
}

export default Navbar
