import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="FooterWrapper">
        <div className="FooterLeft">
          <div className="LeftContent1">
            <p className="ContentTitle">Quick Shop</p>
            <p className="ContentText">Women</p>
            <p className="ContentText">Men</p>
            <p className="ContentText">Kids</p>
            <p className="ContentText">Sportswear</p>
            <p className="ContentText">Sale</p>
            <p className="ContentText">Accessories</p>
          </div>
          <div className="LeftContent1">
            <p className="ContentTitle">Information</p>
            <p className="ContentText">About us</p>
            <p className="ContentText">Careers</p>
            <p className="ContentText">Privacy Policy</p>
            <p className="ContentText">Terms & Conditions</p>
            <p className="ContentText">My Account</p>
            <p className="ContentText">FAQs</p>
          </div>
        </div>
        <div className="FooterRight">
          <div className="RightContent1">
            <p className="ContentTitle">Customer Service</p>
            <p className="ContentText">Request Personal Data</p>
            <p className="ContentText">FAQ's</p>
            <p className="ContentText">Contact Us</p>
            <p className="ContentText">Orders and Returns</p>
            <p className="ContentText">Support Center</p>
            <p className="ContentText">Shipping & Delivery</p>
          </div>
          <div className="RightContent2">
            <p className="ContactTitle">Contact Us</p>
            <p className="address">
              55 Gallaxy Enque, 2568 steet,
              <br /> 23568 NY
            </p>
            <p className="phone">Phone:(440) 000 000 0000</p>
            <p className="email">Email :sales@yousite.com</p>
            <div className="RightContent2icon">
              <div className="subicon">
                <Facebook />
              </div>
              <div className="subicon">
                <Twitter />
              </div>
              <div className="subicon">
                <Pinterest />
              </div>
              <div className="subicon">
                <Instagram />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bottomContent">
        <div className="bottomLeft">
          <p>© 2022 KKS. All Rights Reserved. Ecommerce Software by Netlify</p>
        </div>
        <div className="bottomRight">
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRJnl0xYzgOZZchDKvEiQwKT2pwPl2hBgEqM0BngUOP43f8Mggj"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
