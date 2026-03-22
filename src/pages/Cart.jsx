import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decreaseQuantity, deteleCartItem, increaseQuantity } from "../feature/cartSlice";
import { totalPriceSelector, totalQuantitySelector } from "../feature/cartSelectors";

const Cart = () => {
  const { products} = useSelector(
    (state) => state.cart,
  );

  const totalPrice = useSelector(totalPriceSelector)
  const totalQuantity = useSelector(totalQuantitySelector)
  const dispatch = useDispatch();
  if (totalQuantity == 0)
    return <p className="p-4">No items in the cart ☹️ </p>;
  
  return (
<div className="container py-4">
  <h2 className="mb-4">Cart Details</h2>

  {products.map((product) => (
    <div
      key={product.id}
      className="cart-item d-flex flex-column flex-md-row align-items-center justify-content-between p-3 mb-3 border rounded"
    >
      {/* Image */}
      <img
        src={product.thumbnail}
        className="cart-img mb-3 mb-md-0"
        alt={product.title}
      />

      {/* Info */}
      <div className="cart-info text-center text-md-start ms-md-3 flex-grow-1">
        <p className="mb-2 fw-semibold">{product.title}</p>

        <div className="d-flex justify-content-center justify-content-md-start align-items-center gap-2 mb-2">
          <button
            className="btn btn-outline-secondary btn-sm"
            onClick={() => dispatch(decreaseQuantity(product.id))}
            disabled={product.quantity == 1}
          >
            -
          </button>

          <span className="px-2">{product.quantity}</span>

          <button
            className="btn btn-outline-primary btn-sm"
            onClick={() => dispatch(increaseQuantity(product.id))}
          >
            +
          </button>
        </div>

        <button
          className="btn btn-outline-danger btn-sm"
          onClick={() =>
            dispatch(
              deteleCartItem({
                id: product.id,
                quantity: product.quantity,
              })
            )
          }
        >
          Remove
        </button>
      </div>
    </div>
  ))}

  {/* Summary */}
  <div className="cart-summary p-3 mt-4 border rounded bg-light">
    <p className="mb-1">
      Total Items: <strong>{totalQuantity}</strong>
    </p>
    <p className="mb-2">
      Total Price: <strong>${totalPrice.toFixed(0)}</strong>
    </p>

    <button className="btn btn-primary w-100">
      Proceed to Checkout
    </button>
  </div>
</div>
  );
};

export default Cart;
