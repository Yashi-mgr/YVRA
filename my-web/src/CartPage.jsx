import './CartPage.css';
import { useContext } from "react";
import { CartContext } from "./CartContext.jsx";

export default function CartPage() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  const totalPrice = cartItems.reduce((sum, item) => {
    let priceString = item.price.replace("NPR.", "").replace(/,/g, "").trim();
    let price = parseFloat(priceString);
    if (isNaN(price)) return sum;
    return sum + price * item.quantity;
  }, 0);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div>
                <h3>{item.name}</h3>
                <p>Quantity: {item.quantity}</p>
                <p>Price: {item.price}</p>
                <button
                  className="remove-btn"
                  onClick={() => removeFromCart(item.id)}
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3 className="cart-total">Total: NPR {Math.round(totalPrice)}</h3>
        </>
      )}
    </div>
  );
}