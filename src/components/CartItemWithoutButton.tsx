import "./CartItemWithoutButton.css";
import { cartItem } from "../types";

interface CartItemProps {
  item: cartItem;
}

function CartItemWithoutButton({ item }: CartItemProps) {
  const unitPrice = parseFloat(item.product.price.replace("$", ""));
  const totalPrice = unitPrice * item.quantity;

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
      </div>
      <hr className="solid"></hr>
    </div>
  );
}

export default CartItemWithoutButton;
