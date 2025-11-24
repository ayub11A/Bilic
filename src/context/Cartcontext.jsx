import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [toast, setToast] = useState("");

  const addToCart = (item) => {
    setCartItems((prev) => [...prev, item]);
    showToast(`${item.name} added to cart`);
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
    showToast("Item removed from cart");
  };

  const clearCart = () => {
    setCartItems([]);
    showToast("Cart cleared");
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(""), 2000);
  };

  // ✅ cartCount: tirada items-ka
  const cartCount = cartItems.length;

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, toast, cartCount }}
    >
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook
export const useCart = () => useContext(CartContext);

export default CartContext;
