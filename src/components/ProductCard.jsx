import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../feature/cartSlice";

const ProductCard = ({ data, onClick }) => {
  const dispatch = useDispatch()
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 shadow-sm">
        <img onClick={onClick}
          src={data?.images[0]}
          className="card-img-top"
          style={{ objectFit: "cover", cursor:"pointer"}}
          loading="lazy"
        />

        <div className="card-body d-flex flex-column">
          <h6 className="card-title">{data.title}</h6>

          <p className="text-muted small mb-2">${data.price}</p>

          <button className="btn btn-primary mt-auto" onClick={()=> dispatch(addToCart(data))}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
