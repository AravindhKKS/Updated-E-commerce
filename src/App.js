import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Register/Register";
import ProductPage from "./Pages/ProductPage/ProductPage";
import SingleProduct from "./Pages/SingleProduct/SingleProduct";
import Cart from "./Pages/Cart/Cart";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchData, sendCartData } from "./store/cartActions";



function App() {
  const dispatch = useDispatch()
    const isLoggedIn = useSelector((state) => state.auth.isLogged)
    const cart = useSelector((state) => state.cart)
useEffect(() => {
dispatch(fetchData())
},[dispatch])

useEffect(() => {
if(cart.changed){
  dispatch(sendCartData(cart))
}
},[dispatch, cart])

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedIn ? <Home /> : <Login/>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<ProductPage />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;





























