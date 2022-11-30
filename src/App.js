import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Page/Home";
import About from "./Page/About";
import Store from "./Page/Store";
import Contact from "./Page/Contact";
import ProductDetail from "./Page/ProductDetail";
import CartContext from "./store/CartContext";
import Auth from "./Page/Auth";
import Protected from "./Page/Protected";



const App = () => {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <div>
            <Routes>
              <Route path="/Auth" element={<Auth />}></Route>
              <Route path="/" element={<Home />}></Route>
              <Route path="/About" element={<About />}></Route>
              <Route path="/ContactUs" element={<Contact />}></Route>
              <Route
                path="/Store"
                element={<Protected Component={Store} />}
                exect
              ></Route>
              <Route
                path="/Store/:productId"
                element={<Protected Component={ProductDetail} />}
              ></Route>
              <Route path="*" element={<Home />}></Route>
            </Routes>
          </div>
        </BrowserRouter>
      </CartContext>
    </>
  );
};

export default App;
