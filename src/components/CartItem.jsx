import { Trash2 } from "lucide-react";
import { useCartStore } from "../store/cartStore";

export const CartItem = ({ item }) => {
  const onUpdateQuantity = useCartStore((state) => state.updateQuantity);
  const onRemove = useCartStore((state) => state.removeFromCart);

  return (
    <div className="cart-item">
      <img
        src={item.photo_url}
        alt={item.title}
        className="cart-item__image"
      />
      <div className="cart-item__details">
        <h3 className="cart-item__title">{item.title}</h3>
        <p className="cart-item__author">{item.author}</p>
        <p className="cart-item__price">${item.price.toFixed(2)}</p>
      </div>

      <div className="cart-item__quantity">
        <button
          className="cart-item__quantity-button"
          onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="cart-item__quantity-display">{item.quantity}</span>
        <button
          className="cart-item__quantity-button"
          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>

      <button
        className="cart-item__remove-button"
        onClick={() => onRemove(item.id)}
      >
        <Trash2 className="cart-item__remove-icon" />
      </button>
    </div>
  );
};
