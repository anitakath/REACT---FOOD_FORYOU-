import React, { useState} from 'react'

import Header from './COMPONENTS/LAYOUT/Header'
import Meals from './COMPONENTS/MEALS/Meals'
import Cart from './COMPONENTS/CART/Cart'
import Footer from './COMPONENTS/LAYOUT/Footer'


import CartProvider from './COMPONENTS/STORE/CartProvider'




function App() {

  const [openCart, setOpenCart] = useState(false)

  const cartHandler = () =>{
    if(openCart){
      setOpenCart(false)
    } else if(!openCart){
      setOpenCart(true)
    }
  }

  return (
    <CartProvider>
      <Header openCart={cartHandler}/>
      <Meals/>

      <Cart openCart={openCart} closeModal={cartHandler}/>

      <Footer/>
    </CartProvider>

   
   
  );
}

export default App;
