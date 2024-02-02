import "./Register.css";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="Register">
      <h1 className="RegisterTitle">REGISTER</h1>
      <div className="RegisterWrapper">
        <h1 className="RegisterSubTitle">CREATE AN ACCOUNT</h1>
        <form>
          <input className="input" type="text" placeholder="First Name" />
          <input className="input" type="text" placeholder="Last Name" />

          <input className="input" type="text" placeholder="Username" />

          <input className="input" type="mail" placeholder="Email" />

          <input className="input" type="password" placeholder="Password" />

          <input
            className="input"
            type="password"
            placeholder="Confirm Password"
          />
        </form>
        <p className="RegisterAgreement">
          By creating an account. I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
        <Link to="/login" className="LinkWithoutStyle">
          <button className="Button">CREATE</button>
        </Link>
      </div>
    </div>
  );
};

export default Register;
