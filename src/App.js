import './App.css';
import { useState, useEffect } from 'react'
import CardContainer from './components/CardContainer'
import { productsURL } from './config'
import Cart from './components/Cart';

function App() {
  const [ cart, setCart ] = useState([])
  const [ products, setProducts ] = useState([])

  const getProducts = () => {
    fetch(productsURL)
    .then(r => r.json())
    .then(res => setProducts(res.feed))
  }

  const addToCart = (item) => {
    const newCart = [...cart, item]
    setCart(newCart)
  }

  const removeFromCart = (itemToRemove) => {
    const newCart = [...cart].filter(item => {
      return item.id !== itemToRemove.id
    })
    setCart(newCart)
  }

  useEffect(() => {
    if (!products.length)
      getProducts()
  }, []) 

  return (
    <div className="App">
      <CardContainer 
        products={products.entry} 
        addToCart={addToCart}
      />
      <Cart 
        cart={cart}
        removeFromCart={removeFromCart}
      />
    </div>
  );
}

export default App;
