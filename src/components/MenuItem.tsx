import "./MenuItem.css";
import AddToCartButton from "./AddItemToCart";
import { MenuItemProps } from "../types";

function MenuItem({
  image,
  name,
  description,
  price,
  onAddToCart,
  onRemoveFromCart,
  quantityInCart,
}: MenuItemProps) {
  const product = { image, name, description, price };

  return (
    <div id="whole">
      <div id="top">
        <img id="image" src={image} alt={name} />
        <AddToCartButton
          onAdd={() => onAddToCart(product)}
          onRemove={() => onRemoveFromCart(product)}
          quantity={quantityInCart}
        />
      </div>
      <div className="bottom">
        <div id="name">{name}</div>
        <div id="description">{description}</div>
        <div id="price">{price}</div>
      </div>
    </div>
  );
}

export default MenuItem;
