import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import { FaBars } from "react-icons/fa";
import { useAuth } from "../components/AuthContext";

const Navbar = () => {
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="nb-contanier">
      <div className="nb-logo">
        <img src="https://ayush.gov.in/images/logo/1.jpg" alt="logo" />
      </div>
      <div className="nb-content">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" ? "active-link" : ""}
        >
          About
        </Link>
        <Link
          to="/services"
          className={location.pathname === "/services" ? "active-link" : ""}
        >
          Services
        </Link>
        <Link
          to="/contact"
          className={location.pathname === "/contact" ? "active-link" : ""}
        >
          Contact Us
        </Link>
        <Link
          to="/search"
          className={location.pathname === "/search" ? "active-link" : ""}
        >
          Search
        </Link>
        {isLoggedIn ? (
          <Link
            to="/dashboard"
            className={location.pathname === "/dashboard" ? "active-link" : ""}
          >
            My Dashboard
          </Link>
        ) : (
          <Link
            to="/login"
            className={location.pathname === "/login" ? "active-link" : ""}
          >
            Login
          </Link>
        )}
      </div>
      <div className="mobile-view">
        <FaBars className="nb-icon" onClick={toggleMobileMenu} />
        <div
          className={`nb-content mobile-nb`}
          style={{ display: isMobileMenuOpen ? "flex" : "none" }}
        >
          <Link
            to="/"
            className={location.pathname === "/" ? "active-link" : ""}
            onClick={closeMobileMenu}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" ? "active-link" : ""}
            onClick={closeMobileMenu}
          >
            About
          </Link>
          <Link
            to="/services"
            className={location.pathname === "/services" ? "active-link" : ""}
            onClick={closeMobileMenu}
          >
            Services
          </Link>
          <Link
            to="/contact"
            className={location.pathname === "/contact" ? "active-link" : ""}
            onClick={closeMobileMenu}
          >
            Contact Us
          </Link>
          <Link
            to="/search"
            className={location.pathname === "/search" ? "active-link" : ""}
            onClick={closeMobileMenu}
          >
            Search
          </Link>
          {isLoggedIn ? (
            <Link
              to="/dashboard"
              className={
                location.pathname === "/dashboard" ? "active-link" : ""
              }
              onClick={closeMobileMenu}
            >
              My Dashboard
            </Link>
          ) : (
            <Link
              to="/login"
              className={location.pathname === "/login" ? "active-link" : ""}
              onClick={closeMobileMenu}
            >
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
