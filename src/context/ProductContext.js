import React, { createContext, useContext, useEffect, useState } from "react";
import { getAllProducts } from "../api/Api";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try{
        const data = await getAllProducts();
        if(!data) return;
        setProducts(data);
      } catch (error) {
        console.error('Error fetch products: ', error);
      }
    }
    fetchData();
  }, [])

  return (
    <ProductContext.Provider value={products}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};
