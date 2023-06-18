import React from "react";
import "./Navbar.css";
import gerb from "../../images/rasm.jpg"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={gerb} alt="image" />
        <h1>uzb shop</h1>
      </div>
      <div classname="links">
        <ul id="linked">
          <Link to={"/login"}>login</Link>
          <Link to={"/home"}>home</Link>
          <Link to={"/about-us"}>haqimizda</Link>
          <Link to={"/clothes"}>kiyimlar</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
