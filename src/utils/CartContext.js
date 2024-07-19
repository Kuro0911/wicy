import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => {
    const savedCartItems = localStorage.getItem("cartItems");
    return savedCartItems ? JSON.parse(savedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  const generateUniqueId = (product, size, color) =>
    `${product.id}-${size}-${color}`;

  const addToCart = (product, quantity, color, size) => {
    const genId = generateUniqueId(product, size, color);
    const newItem = {
      ...product,
      genId,
      quantity,
      selectedColor: color,
      selectedSize: size,
    };
    setCartItems((currentItems) => [...currentItems, newItem]);
  };

  const removeFromCart = (id) => {
    console.log("rem " + id);
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.genId !== id)
    );
  };

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
