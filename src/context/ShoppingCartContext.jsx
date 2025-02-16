import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (id, nombre, precio) => {
    setCart((currItems) => {
      const isItemFound = currItems.find((item) => item.id === id);
      if (isItemFound) {
        return currItems.map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...currItems, { id, nombre, precio, quantity: 1 }]; // ✅ Asegurar que precio está aquí
      }
    });
  };

  const removeFromCart = (id) => {
    setCart((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity - 1 } : item
        );
      }
    });
  };

  const getQuantityById = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, getQuantityById }}>
      {children}
    </CartContext.Provider>
  );
};
