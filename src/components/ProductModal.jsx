import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../feature/cartSlice'

const ProductModal = ({product, onClose}) => {
  const dispatch = useDispatch()
  return (
    <>
    <div className='product-modal-backdrop' onClick={onClose}></div>
    <div className='product-modal'>
                <button className="btn-close float-end" onClick={onClose}></button>

        <img src={product.thumbnail} className="img-fluid mb-3" />

        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <h5>${product.price}</h5>

        <button className="btn btn-primary w-100 mt-3" onClick={()=> dispatch(addToCart(product))}  aria-label="Cart">
          Add to Cart
        </button>
        
    </div>
    </>
    

  )
}

export default ProductModal