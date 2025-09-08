import "./CartItem.css";
import { cartItem } from "../types";
import { ItemCard } from "../types";

interface CartItemProps {
  item: cartItem;
  onRemoveFromCart: (product: ItemCard) => void;
}

function CartItem({ item, onRemoveFromCart }: CartItemProps) {
  const unitPrice = parseFloat(item.product.price.replace("$", ""));
  const totalPrice = unitPrice * item.quantity;

  const removeItem = () => {
    for (let i = 0; i < item.quantity; i++) {
      onRemoveFromCart(item.product);
    }
  };

  return (
    <div>
      <div className="cart-item">
        <div id="left">
          <div className="item-name">{item.product.name}</div>
          <div className="unit-and-price">
            <span className="unit">
              {item.quantity}x&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </span>
            <span className="unit-price">
              @ ${unitPrice.toFixed(2)}&nbsp;&nbsp;
            </span>
            <span className="total-price">${totalPrice.toFixed(2)}</span>
          </div>
        </div>
        <div id="right">
          <button className="close-button" onClick={removeItem}>
            x
          </button>
        </div>
      </div>
      <hr className="solid" />
    </div>
  );
}

export default CartItem;
