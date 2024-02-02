import { Facebook, Instagram, Pinterest, Twitter } from "@mui/icons-material";
import "./Subcription.css";

const Subcription = () => {
  return (
    <div className="Subcription">
      <div className="Wrapper">
        <div className="SubcriptionLeft">
          <div className="LeftText">
            <p>SIGN UP FOR DEAL</p>
          </div>
          <div className="LeftInput">
            <input
              type="email"
              placeholder="Email address"
              className="subInput"
            />
            <button className="subButton">SUBSCRIBE</button>
          </div>
        </div>
        <div className="SubcriptionRight">
          <div className="rightContent">
            <p>BE IN TOUCH</p>
          </div>
          <div className="rightIcon">
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
  );
};

export default Subcription;
