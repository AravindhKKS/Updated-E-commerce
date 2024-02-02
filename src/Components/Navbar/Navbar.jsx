import { KeyboardArrowDown, PhoneInTalk } from "@mui/icons-material";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth";

const Navbar = () => {

  const dispatch = useDispatch()

  const handleClick = () => {
  dispatch(authActions.logOut())
  }
  const style = {
    width: "15px",
    height: "15px",
  };
  return (
    <div className="Navbar">
      <div className="NavbarLeft">
        <div className="NavbarLeftItem item1">
          <p>INR ₹</p>
          <KeyboardArrowDown style={style} />
        </div>
        <div className="NavbarLeftItem  item2">
          <p>ENGLISH</p>
          <KeyboardArrowDown style={style} />
        </div>
        <div className="NavbarLeftItem item3">
          <PhoneInTalk style={style} />
          <span>+440 0(111) 044 833</span>
        </div>
      </div>
      <div className="NavbarRight">
          <p className="NavbarRightItem" onClick={handleClick} style={{ textDecoration: "none" }}>
            LOGOUT
          </p>
        <Link to="/register" className="LinkWithoutStyle">
          <p className="NavbarRightItem" style={{ textDecoration: "none" }}>
            CREATE ACCOUNT
          </p>
        </Link>
        <p className="NavbarRightItem">WISHLIST</p>
      </div>
    </div>
  );
};

export default Navbar;
