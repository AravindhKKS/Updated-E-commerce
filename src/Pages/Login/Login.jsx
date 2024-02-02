import { useDispatch } from "react-redux";
import "./Login.css";
import { authActions } from "../../store/auth";

const Login = () => {

  const dispatch = useDispatch()


  const handleSubmit = () => {
    dispatch(authActions.logIn())
  }
  
  return (
    <div className="Register">
      <div className="LoginWrapper">
        <h1 className="LoginTitle">LOGIN</h1>
        <h1 className="LoginSubTitle">SIGN IN</h1>
        <form onSubmit={handleSubmit}>
          <input className="input" type="mail" placeholder="Email" />

          <input className="input" type="password" placeholder="Password" />
          <p className="RegisterAgreement">
          By creating an account. I consent to the processing of my personal
          data in accordance with the <b>PRIVACY POLICY</b>
        </p>
          <button className="Button">Login</button>
        </form> 
      </div>
    </div>
  );
};

export default Login;
