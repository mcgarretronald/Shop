import React, { useState, useEffect } from "react";
import "./index.css";
import ProductCard from "../product-card";

function ProductContainer() {
  const [products, setProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const handleSearch = (event) => {
    const search = event.target.value;
    setSearchTerm(search);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Buy Now</h1>
      <input type="text" placeholder="Search..." onChange={handleSearch} style={{margin:'1%', width:'50%', height:'40px', border:'1px solid black'}} />
      <div className="row justify-content-around">
        {filteredProducts.map((prod) => (
          <div className="col-md-4 mb-4" key={prod.id}>
            <ProductCard products={prod} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductContainer;

