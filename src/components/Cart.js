import CartItem from './CartItem'

const Cart = ({ cart, removeFromCart }) => {

  const total = cart.reduce((a, b) => a + parseFloat(b.price), 0)

  const displayCart = () => {
    return cart.map((item, i) => {
      return (
        <CartItem key={i} item={item} 
          removeFromCart={removeFromCart}
        />)
    })
  }

  return (
    <div className="cart__container">
      <h3 className="cart__current_total">Cart Current Total: ${total.toFixed(2)}</h3>
      {displayCart()}
      
    </div>
  )
}

export default Cart
