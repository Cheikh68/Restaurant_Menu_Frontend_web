import "./Cart.css";
import CartItem from "./CartItem"; // adjust the import path
import { cartItemProps } from "../types";
import emptycart from "../assets/emptycart.png";
import { useState } from "react";
import CartItemWithoutButton from "./CartItemWithoutButton";

function Cart({ cart, onRemoveFromCart }: cartItemProps) {
  const total = cart.reduce((sum, item) => {
    const price = parseFloat(item.product.price.replace("$", ""));
    return sum + price * item.quantity;
  }, 0);

  const totalitems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  if (totalitems === 0) {
    return (
      <div id="empty-cart-display">
        <div id="your-cart">Your Cart ({totalitems})</div>
        <img id="cart-image" src={emptycart} alt="No Items in cart" />
        <div id="added-items">Your added items will appear here</div>
      </div>
    );
  }

  return (
    <div>
      <div id="full-cart-display">
        <div id="your-cart">Your Cart ({totalitems})</div>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <CartItem item={item} onRemoveFromCart={onRemoveFromCart} />
            </li>
          ))}
        </ul>
        <div id="total-line">
          <span id="total">Order Total</span>
          <span id="total-number">${total.toFixed(2)}</span>
        </div>
        <button className="fullWidthButton" onClick={togglePopup}>
          Confirm Order
        </button>
      </div>
      {showPopup && (
        <div id="popup-overlay">
          <div id="popup-div">
            <div className="check"></div>
            <div id="confirmed">Order Confirmed</div>
            <div id="hope-you-enjoyed">We hope you enjoyed your food</div>
            <div id="order">
              <ul>
                {cart.map((item, index) => (
                  <li key={index}>
                    <CartItemWithoutButton item={item} />
                  </li>
                ))}
              </ul>
              <div id="total-line">
                <span id="total">Order Total</span>
                <span id="total-number">${total.toFixed(2)}</span>
              </div>
            </div>

            <button
              className="fullWidthButton"
              onClick={() => window.location.reload()}
            >
              Start new Order
            </button>
            <button
              className="fullWidthButton"
              id="last-button"
              onClick={togglePopup}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Cart;
