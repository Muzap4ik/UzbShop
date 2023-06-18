import React from "react";
import "./Navbar.css";
import gerb from "../../rasm.jpg"
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={gerb} alt="image" />
        <h1>uzb shop</h1>
      </div>
      <div classname="links">
        <ul id="linked">
          <li>home</li>
          <li>about</li>
          <li>features</li>
          <li>contacts</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
