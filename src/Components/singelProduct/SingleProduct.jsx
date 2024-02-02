import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { cartActions } from "../../store/cartSlice";
import "./singleProduct.css";
import {
  BarChartOutlined,
  CheckCircleRounded,
  FacebookOutlined,
  FavoriteBorderRounded,
  Google,
  LinkedIn,
  LocalMallOutlined,
  Mail,
  Star,
  Twitter
} from "@mui/icons-material";

const SingleProduct = () => {
  const dispatch = useDispatch()
    const productItem = useSelector((state) => state.cart.selectProduct)

    if(!productItem){
      return <div style={{height:'50vh', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'30px', fontWeight:300}}>
       <h1 >Click  Shop Choose <img style={{width:'50px', height:'50px' , padding:"0px 10px"}} src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAYFBMVEX///8AAADR0dFkZGT7+/vOzs5CQkLw8PD29vawsLDg4ODn5+cqKirr6+vCwsJSUlLY2Nhqamqampq2trampqbIyMgbGxs4ODhISEhfX19xcXF9fX2Hh4ePj4+goKAPDw97z0NcAAACdElEQVR4nO3ai3KqMBSFYVdFRVSot7ZUW9//LRt7kyqQ7JDs2Jn1P8DxG3E6s9hnNArVZhPsnwrWFtimNly3g2mXWvG3Ep+VqR3N5vhunlpyaY/f9qktP5VodCdPcPLURD1NUnvO/TXdh+pxiauWj/dnSq8qnm9NwHOR0rRoNRnVIqFp2m4CpslUs06TUc3SmFYv3SbgZZXClFV9JqDK9E25xWRUuTqqtpmAWpmUje0mYKz7BF9dTMCrIilzNBmV3nd1cDUBBy3T0d0EHHVMbxIT8KZh2shMgMJIfZeagPfYpp3cFH2kzu2CtqLOwa2fKeprhtL+6V1Fm4N7+2d3F2k6T4aYgChz8GGYCXiIYDoNRZ2Cq4rBJqMKPAeLliEsbxlUtQhiMqqAc7BrCMsLN51XPaNT2jTQHAxpCqWaWQeerCrAoA9tCqHK16FNwHrgdM4dhrC8epAqE4wpSYcBczCL8Oy+WvurhGNKkvfwch7nPnm+ZhAPPFleczDSb/ySx2sGr4EnSzwHI/7GLwl/7d4DT5ZoDio8u68ET3DA6JTmPFI9Xxj45fiaQfF7Ouf0XZUBxpSkk4Pq+voaP/t9V99kV7VdX+PXf99NY+pXtV+ENeq+Oq+SmYyqYw52X4Q1ar8650lNRtUycfqu1Eqq25EafAjLq66f3R2Ybq7OTtfX+I0bJLeLsEaNq3PUgSfrZw66X4Q1+r46Rx94ss5zMBNdhDU6ZqOyHkvy+tNRiT6iFl+8Ch9U7P8O53U2inAqIooooogiiiiiiCKKKKKIIooooogiiiiiiCKKKKKIIooooogiiiiiiCKKKKKIIoooov4r6gNKCjPvDt6ioQAAAABJRU5ErkJggg==" alt="" srcset="" />
          Your Favorite Product </h1>
       
       </div>
    }
  
    const addToProduct = () => {
      dispatch(cartActions.addToItem({
        id: productItem.id,
        img: productItem.img,
        title: productItem.title,
        rs: productItem.rs,
      }))
    }

   
    const style = {
    width: "20px",
    height: "20px",
    color: "lightgray",
  };

 
  const style2 = {
    display: "flex",
    alignItem: "center",
    width: "22px",
    height: "22px",
    padding: "10px",
    border: "1px solid lightgray",
    marginRight: "10px",
    cursor: "pointer",
  };

  return (
    <div className="SingleProduct">
      <div className="SingleProductWrapper">
        <div className="SingleProductImageContainer">
          <img
            src={productItem.img}
            alt=""
          />
        </div>
        <div className="SingleProductInfoContainer">
          <div className="top">
            <h1>{productItem.title}</h1>
            <div className="ratings">
              <div className="star">
                <Star style={style} />
                <Star style={style} />
                <Star style={style} />
                <Star style={style} />
                <Star style={style} />
              </div>
              <div className="ratingInfo">
                Be the first to review this product
              </div>
            </div>
          </div>
          <div className="center">
            <div className="amount">$ {productItem.rs}</div>
            <div className="desc">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non. Duis aute irure dolor in reprehenderit in voluptate
              velit esse cillum dolore eu fugiat nulla pariatur.
            </div>
            <div className="available">
              AVAILABILITY:<b> IN STOCK</b>
            </div>
            <div className="sku">
              SKU:<b> 3453256</b>
            </div>
          </div>
          <div className="bottom">
            <div className="bottomcontent1">
              
              <div className="bottomcenter" onClick={addToProduct}>
                <LocalMallOutlined />
                <p>ADD TO CART</p>
              </div>
              <div className="bottomright">
                <FavoriteBorderRounded style={style2} />
                <BarChartOutlined style={style2} />
              </div>
            </div>
            <div className="bottomcontent2">
              <div className="icon">
                <FacebookOutlined />
              </div>
              <div className="icon">
                <Twitter />
              </div>
              <div className="icon">
                <LinkedIn />
              </div>
              <div className="icon">
                <Google />
              </div>
              <div className="icon">
                <Mail />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="productDetails">
        <div className="ProductDetailsTitleContainer">
          <div className="ProductDetailsTitle">DETAILS</div>
          <div className="ProductDetailsTitle">REVIEWS</div>
          <div className="ProductDetailsTitle">CUSTOM TAB</div>
        </div>
        <div className="ProductInfo">
          <div className="ProductNote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat.
          </div>
          <div className="productConfic">
            <div className="conficText">
              <CheckCircleRounded />
              <p>Any Product types that You want - Simple, Configurable</p>
            </div>

            <div className="conficText">
              <CheckCircleRounded />
              <p>Downloadable/Digital Products, Virtual Products</p>
            </div>

            <div className="conficText">
              <CheckCircleRounded />
              <p>Inventory Management with Backordered items</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;





