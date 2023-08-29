import React, { useState, createContext } from "react";
import Product from "../models/product";
import Cart from "../models/cart";

export default interface ICartContext {
  cart: Cart[];
  addItemToCart: (newItem: Product | Cart) => void;
  removeItemCart: (product: Cart) => void;
  total: number;
}

interface IProps {
  children: React.ReactElement;
}

export const CartContext = createContext<ICartContext | null>(null);

export const CartProvider: React.FunctionComponent<IProps> = ({ children }) => {
  const [cart, setCart] = useState<Cart[]>([]);
  const [total, setTotal] = useState(0);

  const addItemToCart = (newItem: Product) => {
    const indexItem = cart.findIndex((item) => item.id === newItem.id);

    if (indexItem !== -1) {
      const cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount + 1;

      cartList[indexItem].total =
        cartList[indexItem].amount * cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const data = {
      ...newItem,
      amount: 1,
      total: newItem.price,
    };

    setCart((products) => [...products, data]);
    totalResultCart([...cart, data]);
  };

  const removeItemCart = (product: Product | Cart) => {
    const indexItem = cart.findIndex((item) => item.id === product.id);

    if (cart[indexItem]?.amount > 1) {
      let cartList = cart;

      cartList[indexItem].amount = cartList[indexItem].amount - 1;

      cartList[indexItem].total =
        cartList[indexItem].total - cartList[indexItem].price;

      setCart(cartList);
      totalResultCart(cartList);
      return;
    }

    const removeItem = cart.filter((item) => item.id !== product.id);
    setCart(removeItem);
    totalResultCart(removeItem);
  };

  const totalResultCart = (items: Cart[]) => {
    const myCar = items;
    let result = myCar.reduce((acc: number, obj: Cart) => {
      return acc + obj.total;
    }, 0);

    setTotal(result);
  };

  return (
    <CartContext.Provider
      value={{ cart, addItemToCart, removeItemCart, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
