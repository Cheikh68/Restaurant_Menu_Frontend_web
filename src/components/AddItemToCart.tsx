import React from "react";
import "./AddItemToCart.css";

interface AddToCartButtonProps {
  onAdd: () => void;
  onRemove: () => void;
  quantity: number;
}

const AddItemToCart: React.FC<AddToCartButtonProps> = ({
  onAdd,
  onRemove,
  quantity,
}) => {
  return (
    <div>
      {quantity === 0 ? (
        <button
          className="add-to-cart-button"
          onClick={(e) => {
            e.stopPropagation();
            onAdd();
          }}
        >
          Add to cart
        </button>
      ) : (
        <div className="cart-controls">
          <button
            className="cart-button"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          >
            -
          </button>
          <div className="cart-quantity">{quantity}</div>
          <button
            className="cart-button"
            onClick={(e) => {
              e.stopPropagation();
              onAdd();
            }}
          >
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default AddItemToCart;
