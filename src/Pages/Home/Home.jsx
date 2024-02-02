import React from "react";
import Announcement from "../../Components/Announcement/Announcement";
import Navbar from "../../Components/Navbar/Navbar";
import HomeNav from "../../Components/HomeNav/HomeNav";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Product from "../../Components/Product/Product";
import NewsDetails from "../../Components/NewsDetails/NewsDetails";
import Subcription from "../../Components/Subcription/Subcription";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Announcement />
      <Navbar />
      <HomeNav />
      <Slider />
      <Categories />
      <Product />
      <NewsDetails />
      <Subcription />
      <Footer />
    </div>
  );
};

export default Home;
