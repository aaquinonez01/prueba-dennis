import { CartItem } from "./CartItem";
import { useCartStore } from "../store/cartStore";

import '../styles/cart.css'
export const CartList = () => {
    const items = useCartStore((state) => state.cartItems);
  return (
    <div className="cart bg-white">
  <h2 className="cart__title">Artículos en tu carrito</h2>
  {items.map((item) => (
    <CartItem key={item.id} item={item} />
  ))}
</div>


    );
};