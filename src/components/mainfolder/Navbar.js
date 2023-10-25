import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="leftname">
        <h2 className="dk">DK Bakery</h2>
      </div>
      <div className="rightname">
        <div>
          <h3 className="about">About</h3>
        </div>
        <div>
          <h3 className="contact">Contact</h3>
        </div>
        <div>
          <Link to="/">
            <button className="logout">Logout</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
