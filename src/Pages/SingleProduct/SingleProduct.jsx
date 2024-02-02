import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Subcription from "../../Components/Subcription/Subcription";
import Footer from "../../Components/Footer/Footer";
import SingleProducts from "../../Components/singleProducts/SingleProducts";

const SingleProduct = () => {
 

  return (
    <div className="SingleProduct">
      <Navbar />
      <Announcement />
      <HomeNav />
      <SingleProducts/>
      <Subcription />
      <Footer />
    </div>
  );
};

export default SingleProduct;
