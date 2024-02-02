import { Products } from "../../Data";
import ProductItem from "../ProductItem/ProductItem";
import "./Product.css";

const Product = () => {
  
  return (
    <div className="product">
      {Products.map((product) => (
        <ProductItem id={product.id} key={product.id} img={product.img} title={product.title} rs={product.rs}  bg={product.bg}  />
      ))}
    </div>
  );
};

export default Product;
