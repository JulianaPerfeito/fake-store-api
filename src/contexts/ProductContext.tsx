import React, { useState, createContext, useEffect } from "react";
import Product from "../models/product";
import { allProducts } from "../services/fake-store-api";

export default interface IProductContext {
  product: Product[];
  addProducts: () => void;
}

interface IProps {
  children: React.ReactElement;
}

export const ProductContext = createContext<IProductContext | null>(null);

export const ProductProvider: React.FunctionComponent<IProps> = ({
  children,
}) => {
  const [product, setProducts] = useState<Product[]>([]);

  function addProducts() {
    useEffect(() => {
      async function fetchData() {
        const response = await allProducts;
        const items = await response.json();
        setProducts(items);
      }

      fetchData();
    }, []);
  }

  return (
    <ProductContext.Provider
      value={{
        product,
        addProducts,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
