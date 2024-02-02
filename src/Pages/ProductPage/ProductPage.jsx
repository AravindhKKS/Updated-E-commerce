import Navbar from "../../Components/Navbar/Navbar";
import Announcement from "../../Components/Announcement/Announcement";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Product from "../../Components/Product/Product";
import Subcription from "../../Components/Subcription/Subcription";
import Footer from "../../Components/Footer/Footer";
import "./ProductPage.css";

const ProductPage = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <HomeNav />
      <div className="ProductList">
        <h1 className="ProductListTitle">Dresses</h1>
        <div className="ProductListFilterContainer">
          <div className="FilterProduct">
            <span>Filter Products:</span>
            <select className="productSelect" defaultValue={"DEFAULT"}>
              <option value={"DEFAULT"} disabled>
                {" "}
                Color
              </option>
              <option>White</option>
              <option>Black</option>
              <option>Red</option>
              <option>Yellow</option>
              <option>Blue</option>
              <option>Green</option>
            </select>
            <select className="productSelect" defaultValue={"DEFAULT"}>
              <option value={"DEFAULT"} disabled>
                {" "}
                Size
              </option>
              <option>XS</option>
              <option>S</option>
              <option>M</option>
              <option>L</option>
              <option>XL</option>
              <option>XXL</option>
            </select>
          </div>
          <div className="SortProduct">
            <span>Sort Products:</span>
            <select className="SortSelect" defaultValue={"DEFAULT"}>
              <option value={"DEFAULT"} disabled>
                Newest
              </option>
              <option>Price(asc)</option>
              <option>Price (desc)</option>
            </select>
          </div>
        </div>
      </div>
      <Product />
      <Subcription />
      <Footer />
    </div>
  );
};

export default ProductPage;
