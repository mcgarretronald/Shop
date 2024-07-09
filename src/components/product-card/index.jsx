import React from "react";
import "./index.css";
import { Link } from "react-router-dom";


function ProductCard(props) {
  console.log(props);
  return (
    <>
      <div className="card">
        <img src={props.products.images[0]} className="card-img-top" alt={props.products.title}/>
        <div className="card-body">
          <h5 className="card-title">{props.products.title}</h5>
          <h5 className="card-title">${props.products.price}</h5>
          <p className="card-text">{props.products.description}</p>
         
          <Link to="#" className="btn btn-primary">
            Add to Cart
          </Link>
          <Link to="/productdetails" state={props}className="btn btn-primary" style={{marginLeft:'20px'}}>
         View more details
          </Link>
        
        </div>
      </div>
    </>
  );
}

export default ProductCard;
