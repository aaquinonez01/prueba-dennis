const CART_KEY = "shoppingCart";

export const getCartFromLocalStorage = () => {
  const cart = localStorage.getItem(CART_KEY);
  return cart ? JSON.parse(cart) : [];
};

export const saveCartToLocalStorage = (cart) => {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
};

export const addToCart = (item) => {
  const cart = getCartFromLocalStorage();
  const existingItem = cart.find((cartItem) => cartItem.id === item.id);

  if (existingItem) {
    existingItem.quantity += item.quantity;
  } else {
    cart.push(item);
  }

  saveCartToLocalStorage(cart);
};

export const removeFromCart = (id) => {
  const cart = getCartFromLocalStorage();
  const updatedCart = cart.filter((item) => item.id !== id);
  saveCartToLocalStorage(updatedCart);
};

export const updateQuantityInCart = (id, quantity) => {
  const cart = getCartFromLocalStorage();
  const item = cart.find((cartItem) => cartItem.id === id);

  if (item) {
    item.quantity = Math.max(0, quantity);
    saveCartToLocalStorage(cart);
  }
};
