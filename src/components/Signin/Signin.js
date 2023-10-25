import girl from "../../assests/girl.jpeg";
import google from "../../assests/google.png";
import React, { useState } from "react";
import "./Signin.css";
import { Link, useNavigate } from "react-router-dom";

const Signin = () => {
  const [name, setName] = useState();
  const [password, setpassword] = useState();
  const validname = "div123";
  const validpassword = "12345";
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    if (name === validname && password === validpassword) {
      navigate("/Home ");
    } else {
      alert("invalid");
    }
  };

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
            <h1 className="signin">SIGNIN</h1>
          </div>
          <div>
            <label className="l1" for="name">
              User name or Email
            </label>
            <br></br>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
            />
            <br></br>
            <label className="l2" for="password">
              Password
            </label>
            <br></br>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) => setpassword(e.target.value)}
            />
            <br></br>
          </div>
          <div>
            <h4 className="pass">Forgot password?</h4>
          </div>
          <div>
            <button className="button" onClick={login}>
              SignIn
            </button>
          </div>
          <div>
            <p className="or">---------------or---------------</p>
          </div>
          <div className="footer">
            <img className="img" src={google} />
            <h4 className="go">Sign in with Google</h4>
          </div>
          <div className="footer">
            <h4 className="go1">Don't have an account?</h4>
            <Link to="/Signup">
              <h4 className="in">Sign up</h4>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signin;
