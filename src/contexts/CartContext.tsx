import React, { useState, createContext } from "react";
import Product from "../models/product";

interface ICartContext {
  cart: Product[];
}

interface IProps {
  children: React.ReactElement;
}

export const CartContext = createContext<ICartContext | null>(null);

export const CartProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [cart, setCart] = useState<Product[]>([]);

  return (
    <CartContext.Provider value={{ cart }}>{children}</CartContext.Provider>
  );
};
