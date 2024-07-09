import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";


function ProductDetails() {
    const details = useLocation();
    console.log(details.state);
    const detail = details.state.products

    return (
        <>
            <h1 style={{margin:'1%', textAlign:'center'}}>Product details</h1>
            <div class="d-flex justify-content-center">
                <div className="card" style={{ width: '18rem' }}>
                  

                <div id="carouselExample" class="carousel slide">
  <div class="carousel-inner" style={{height:'260px'}}>
    {detail.images.map((img,index) => (
      <div class={`carousel-item ${index === 0 ? "active" : ""}`} key={index}>
        <img src={img} class="d-block w-100" alt={detail.title} />
      </div>
    ))}
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
                    <div className="card-body">
                        <h5 className="card-title">Title:{detail.title}</h5>
                        <h5 className="card-title">Avilability: {detail.availabilityStatus}</h5>
                        <p className="card-text">Rating: {detail.rating}</p>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Price :${detail.price}</li>
                        <li className="list-group-item">Brand :{detail.brand}</li>
                        <li className="list-group-item">Return Policy:{detail.returnPolicy}</li>
                        <li className="list-group-item">Weight:{detail.weight} gms</li>
                    </ul>
                    <div className="card-body">
                        <Link to="/" className="card-link"><button type="button" class="btn btn-primary" style={{ margin: '5%' }}>Back</button></Link>
                        <Link to="#" className="card-link"><button type="button" class="btn btn-primary">Add to Cart</button></Link>
                    </div>
                </div>




            </div>



        </>
    )
}
export default ProductDetails

