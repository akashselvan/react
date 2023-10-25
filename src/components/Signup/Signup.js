import girl from "../../assests/girl.jpeg";
import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="main">
      <div className="left">
        <div>
          <img className="image" src={girl} />
        </div>
        <div>
          <h1 className="desc">Welcome Back!!</h1>
          <h3 className="h2">To keep connected with us please</h3>
          <h3 className="h3"> log in with your personal info!</h3>
        </div>
      </div>
      <form className="form">
        <div className="right">
          <div>
            <h1 className="signin">SIGNUP</h1>
          </div>
          <div>
            <label className="l1" for="name">
              User name or Email
            </label>
            <br></br>
            <input type="text" id="name" placeholder="Enter your name" />
            <br></br>
            <label className="l2" for="password">
              Password
            </label>
            <br></br>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
            />
            <br></br>
          </div>
          <div>
            <Link to="/">
              <button className="button">CREATE ACCOUNT</button>
            </Link>
          </div>
          <div>
            <p className="or">---------------or---------------</p>
          </div>
          <div className="footer">
            <h4 className="go1">Already have an account?</h4>
            <Link to="/">
              <h4 className="in">Sign in</h4>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
