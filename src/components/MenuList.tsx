import "./MenuList.css";
import MenuItem from "./MenuItem";
import { MenuListProps } from "../types";

function MenuList({
  items,
  onAddToCart,
  onRemoveFromCart,
  cart,
}: MenuListProps) {
  return (
    <div id="whole">
      <p id="title">Desserts</p>
      <div className="item-grid">
        {items.map((item) => {
          const quantityInCart =
            cart.find((cartItem) => cartItem.product.name === item.name)
              ?.quantity || 0;

          return (
            <MenuItem
              key={item.name}
              {...item}
              onAddToCart={onAddToCart}
              onRemoveFromCart={onRemoveFromCart}
              quantityInCart={quantityInCart}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MenuList;
