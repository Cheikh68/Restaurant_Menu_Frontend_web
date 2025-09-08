import "./App.css";
import image1 from "./assets/ItemImage.jpg";
import image2 from "./assets/image2.png";
import image3 from "./assets/image3.png";
import image4 from "./assets/image4.png";
import image5 from "./assets/image5.png";
import image6 from "./assets/image6.png";
import image7 from "./assets/image7.png";
import image8 from "./assets/image8.png";
import image9 from "./assets/image9.png";
import { ItemCard } from "./types";
import { cartItem } from "./types";
import MenuList from "./components/MenuList";
import { useState } from "react";
import Cart from "./components/Cart";

const ItemCardList: ItemCard[] = [
  {
    image: image1,
    name: "Waffle",
    description: "Waffle with berries",
    price: "6.50",
  },
  {
    image: image2,
    name: "Crème Brûlée",
    description: "Vanilla Bean Créme Brûlée",
    price: "7.00",
  },
  {
    image: image3,
    name: "Macaron",
    description: "Macaron Mix of Five",
    price: "8.00",
  },
  {
    image: image4,
    name: "Tiramisu",
    description: "Classic Tiramisu",
    price: "5.50",
  },
  {
    image: image5,
    name: "Backlava",
    description: "Pistachio Backlava",
    price: "4.00",
  },
  {
    image: image6,
    name: "Pie",
    description: "Lemon Meringue Pie",
    price: "5.00",
  },
  {
    image: image7,
    name: "Cake",
    description: "Red Velvet Cake",
    price: "4.50",
  },
  {
    image: image8,
    name: "Brownie",
    description: "Salted Caramel Brownie",
    price: "5.50",
  },
  {
    image: image9,
    name: "Panna Cotta",
    description: "Vanilla Panna Cotta",
    price: "6.50",
  },
];

function App() {
  const [UserCart, setCart] = useState<cartItem[]>([]);

  const handleAddToCart = (product: ItemCard) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.name === product.name
      );

      if (existingItem) {
        return prevCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const handleRemoveFromCart = (product: ItemCard) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find(
        (item) => item.product.name === product.name
      );

      if (!existingItem) return prevCart;

      if (existingItem.quantity === 1) {
        return prevCart.filter((item) => item.product.name !== product.name);
      } else {
        return prevCart.map((item) =>
          item.product.name === product.name
            ? { ...item, quantity: item.quantity - 1 }
            : item
        );
      }
    });
  };

  return (
    <div id="whole-page">
      <div id="page-content">
        <div id="list">
          <MenuList
            items={ItemCardList}
            onAddToCart={handleAddToCart}
            onRemoveFromCart={handleRemoveFromCart}
            cart={UserCart}
          />
        </div>
        <div id="cart">
          <Cart cart={UserCart} onRemoveFromCart={handleRemoveFromCart} />
        </div>
      </div>
    </div>
  );
}

export default App;
