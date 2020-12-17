import React from 'react'

const CartItem = ({ item, removeFromCart }) => {
  return (
    <div className="cart__item">
      <h5>{item.name}</h5>
      <h6>{item.price}</h6>
      <button 
        onClick={() => removeFromCart(item)}
        className="cart__remove-item btn">Remove from cart</button>
    </div>
  )
}

export default CartItem
