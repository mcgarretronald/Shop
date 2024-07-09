import React, { useState, useEffect } from "react";
import "./index.css";
import ProductCard from "../product-card";

function ProductContainer() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        let response = await fetch('https://dummyjson.com/products');
        let results = await response.json();
        setProducts(results.products); 
        console.log(results.products);
      } catch (err) {
        console.error(err);
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h1>Buy Now</h1>
      <div className="row justify-content-around">
        {products.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <ProductCard products={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;

