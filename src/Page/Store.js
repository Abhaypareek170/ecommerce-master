
import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from "react";
import Header from "../Layout/Header"
import CartPage from "../Cart/Cart";
import CartContext from "../store/CartContext";
import Product from '../Products/Product';
import Footer from '../Layout/Footer';

function Store() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>{
    setCartIsShown(true);
  };

  const hideCartHandler = ()=>{
    setCartIsShown(false);
  }
  
  return (
    <>
    <CartContext>
    {cartIsShown && <CartPage  onClose={hideCartHandler} />}
      <Header onClick={showCartHandler}/>

      <Product />
      <Footer/>
      </CartContext>
      </>
  );
}

export default Store;
