import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const ProductsContext = createContext();

export function useProductContext(){
  return useContext(ProductsContext);
}

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState();

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
