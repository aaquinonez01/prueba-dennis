import {create} from "zustand";

const CART_KEY = "shoppingCart";

const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const useCartStore = create((set, get) => ({
  cartItems: getCartFromLocalStorage(),
  addToCart: (item) => {
    const cart = get().cartItems;
    const existingItem = cart.find((cartItem) => cartItem.id === item.id);

    let updatedCart;
    if (existingItem) {
      updatedCart = cart.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
          : cartItem
      );
    } else {
        item.quantity = 1;
      updatedCart = [...cart, item];
    }

    saveCartToLocalStorage(updatedCart);
    set({ cartItems: updatedCart });
  },
  removeFromCart: (id) => {
    const updatedCart = get().cartItems.filter((item) => item.id !== id);
    saveCartToLocalStorage(updatedCart);
    set({ cartItems: updatedCart });
  },
  updateQuantity: (id, quantity) => {
    const updatedCart = get().cartItems.map((item) =>
      item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item
    );

    saveCartToLocalStorage(updatedCart);
    set({ cartItems: updatedCart });
  },
  clearCart: () => {
    saveCartToLocalStorage([]);
    set({ cartItems: [] });
  },
}));
