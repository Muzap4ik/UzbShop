import React from "react";
import "./Navbar.css";
import gerb from "../../images/rasm.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-logo">
        <Link to={"/home"} id="logo">
          <img src={gerb} alt="image" />
        </Link>
        <Link to={"/home"} id="h1">uzb shop</Link>
      </div>
      <div classname="links">
        <ul id="linked">
          <Link to={"/home"}>home</Link>
          <Link to={"/about-us"}>haqimizda</Link>
          <Link to={"/clothes"}>kiyimlar</Link>
          <Link to={"/login"}>login</Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
