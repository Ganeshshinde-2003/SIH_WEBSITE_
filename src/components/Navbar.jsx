import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

const Navbar = () => {
  return (
    <div className="nb-contanier">
      <div className="nb-logo">
        <img src="https://ayush.gov.in/images/logo/1.jpg" alt="logo" />
      </div>
      <div className="nb-content">
        <Link to="/">Home</Link>
        <Link to="/">About</Link>
        <Link to="/">Services</Link>
        <Link to="/">Contact Us</Link>
        <Link to="/">Search</Link>
        <Link to="/">My Dashboard</Link>
      </div>
    </div>
  );
};

export default Navbar;
