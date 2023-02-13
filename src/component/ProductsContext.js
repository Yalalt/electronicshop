import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext();

export default function ProductProvider({ children }) {
  const [products, setProducts] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get("http://localhost:3008/products").then((res) => {
                if (res.status === 200) {
                    console.log("Successful", res);
                    return res;
                  } else {
                    console.log("Not successful");
                    setError(error);
                  }
            });
            const resProducts = await response.data;
            setProducts(resProducts);
            console.log("response products==> ", resProducts);
            
        } catch (error) {
            console.log("Products request axios Error uuslee", error);
        }
    }
    fetchProducts(); 
  }, []);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}
