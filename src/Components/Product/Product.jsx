import { useContext } from "react";
import { Store } from "../../Store/Store";

export default function Product() {
  const { productData } = useContext(Store);

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        {productData.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
            <div className="card shadow-lg p-3 bg-white rounded h-100">
              <img
                src={product.image}
                className="card-img-top rounded"
                alt={product.title}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text text-muted">{product.description}</p>
                <div className="d-grid gap-2">
                  <a href="#" className="btn btn-primary btn-block">
                    Buy Now
                  </a>
                  <a href="#" className="btn btn-outline-secondary btn-block">
                    Add to Cart
                  </a>
                </div>
                <a href="#" className="btn btn-link text-decoration-none mt-2">
                  More...
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
