import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="login">
      <img
        src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
        className="login__logo"
      />
      <div className="login__container">
        <h3>Log In To Facebook</h3>
        <form>
          <center>
            <input type="email" placeholder="Email Address" />
          </center>
          <center>
            <input type="password" placeholder="Password" />
          </center>
          <center>
            <button type="submit" className="login__login">
              Log In
            </button>
          </center>
          <center>
            <div className="sideinfo">
              <h5>Forgotten Password ?</h5>
              <h5 className="dot">.</h5>
              <Link to="/register" style={{ textDecoration: "none" }}>
                <h5 className="rtd">Sign up for Facebook</h5>
              </Link>
            </div>
          </center>
        </form>
      </div>
    </div>
  );
}

export default Login;
