export interface ItemCard {
  image: string;
  name: string;
  description: string;
  price: string;
}

export interface ItemGridProps {
  items: ItemCard[];
}

export interface cartItem {
  product: ItemCard;
  quantity: number;
}

export interface cartItemProps {
  cart: cartItem[];
  onRemoveFromCart: (product: ItemCard) => void;
}

export interface MenuItemProps extends ItemCard {
  onAddToCart: (product: ItemCard) => void;
  onRemoveFromCart: (product: ItemCard) => void;
  quantityInCart: number;
}

export interface MenuListProps extends ItemGridProps {
  onAddToCart: (product: ItemCard) => void;
  onRemoveFromCart: (product: ItemCard) => void;
  cart: cartItem[];
}
