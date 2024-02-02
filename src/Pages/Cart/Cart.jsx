import "./Cart.css";
import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Subcription from "../../Components/Subcription/Subcription";
import Footer from "../../Components/Footer/Footer";
import { useSelector } from "react-redux";
import Cartitems from "../../Components/CartItems/Cartitems";

const Cart = () => {
  const cartItem = useSelector((state) => state.cart.itemList)
  console.log(cartItem)
  return (
    <div>
      <Navbar />
      <Announcement />
      <HomeNav />
     <Cartitems/>
      <Subcription />
      <Footer />
    </div>
  );
};

export default Cart;

