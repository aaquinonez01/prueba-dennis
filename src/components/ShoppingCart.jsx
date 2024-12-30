import { useCartStore } from '../store/cartStore';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';
import '../styles/shopping_cart.css';
export const ShoppingCartC = ({ toggleCart }) => {
  const cartItems = useCartStore((state) => state.cartItems);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const removeItem = useCartStore((state) => state.removeFromCart);

  return (
    <div className="shopping-cart">
      <div className="shopping-cart__header">
        <h3 className="shopping-cart__title">Carrito</h3>
        <button onClick={toggleCart} className="shopping-cart__close-button" aria-label="Cerrar carrito">
          <X className="shopping-cart__close-icon" />
        </button>
      </div>
      {cartItems.length === 0 ? (
        <p className="shopping-cart__empty">Tu carrito está vacío</p>
      ) : (
        <>
          <ul className="shopping-cart__list">
            {cartItems.map((item) => (
              <li key={item.id} className="shopping-cart__item">
                <img src={item.photo_url} alt={item.title} className="shopping-cart__item-image" />
                <div className="shopping-cart__item-details">
                  <p className="shopping-cart__item-title">{item.title}</p>
                  <p className="shopping-cart__item-quantity">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <button
                  onClick={() => removeItem(item.id)}
                  className="shopping-cart__item-remove"
                  aria-label={`Eliminar ${item.title} del carrito`}
                >
                  <X className="shopping-cart__item-remove-icon" />
                </button>
              </li>
            ))}
          </ul>
          <div className="shopping-cart__footer">
            <div className="shopping-cart__total">
              <span className="shopping-cart__total-label">Total:</span>
              <span className="shopping-cart__total-value">${totalPrice.toFixed(2)}</span>
            </div>
            <Link to="/checkout" className="shopping-cart__checkout-button">
              Proceder al checkout
            </Link>
          </div>
        </>
      )}
    </div>
  );
};
