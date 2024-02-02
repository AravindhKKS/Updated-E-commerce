import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import "./ProductItem.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";

const ProductItem = ({ id, img, title,rs, bg }) => {
const dispatch = useDispatch()
const addToCart = () => {
  dispatch(cartActions.addToItem({
    id,
    img,
    title,
    rs,
    bg
  }))
}

const addToSelectProduct = () => {
  dispatch(cartActions.selectProduct({
    id,
    img,
    title,
    rs
  }))
}

  return (
    <div className="ProductItem" >
      <div className="round"></div>
      <img src={img} alt="" />
      <div className="iconContainer">
        <div className="brand" style={{ color:bg }}>
          <p>{title}</p>
          <p>RS: {rs}</p>
        </div>
       <div className="icon" onClick={addToCart}  style={{textDecoration:'none',color:'black' }}>
          <ShoppingCartOutlined />
        </div>
        <div className="icon">
        <Link to='/singleProduct' onClick={addToSelectProduct} style={{textDecoration:'none',color:'black' }}>
          <SearchOutlined />
        </Link>
        </div>
        <div className="icon">
          <FavoriteBorderOutlined />
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
