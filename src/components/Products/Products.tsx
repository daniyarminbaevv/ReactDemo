import React, { useState, useEffect } from "react";
import { products as staticProducts } from "./consts";
import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";
import { Product } from "../Products/types";

const Products = () => {
  const [Products, setProducts] = useState<Product[]>([]);
  const [inputValue,setInputValue] = 
  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:8000/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <div>
      <h1 className="heading">Products</h1>
      <input value= {inputValue} onChange={(e:React.FormEvent<HTMLInputElement)
    
      <div className="productsList">
        {Products.map((product) => (
          <ProductCard key={product.id} data={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
