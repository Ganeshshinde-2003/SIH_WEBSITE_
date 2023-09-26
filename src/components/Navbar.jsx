import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "../App.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAuth } from "../components/AuthContext";

const Navbar = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuth();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [dashboard, setDashboard] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const showDashBoard = () => {
    setDashboard(!dashboard);
    setIsMobileMenuOpen(false);
  };

  const navigation = () => {
    navigate("/");
  };

  return (
    <div className="nb-contanier">
      <div className="nb-logo" onClick={navigation}>
        <img src="https://ayush.gov.in/images/logo/1.jpg" alt="logo" />
      </div>
      <div className="nb-content">
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>
          Home
        </Link>
        <Link
          to="/aboutus"
          className={location.pathname === "/aboutus" ? "active-link" : ""}
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
          to="/contactus"
          className={location.pathname === "/contactus" ? "active-link" : ""}
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
            className={location.pathname === "/dashboard" ? "active-link" : ""}
            onClick={showDashBoard}
          >
            Dashboard
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
      <div
        className="nb-dropdown"
        style={{ display: dashboard ? "flex" : "none" }}
      >
        <p>For Testing Only</p>
        <Link
          to="/publisherdashboard"
          className={
            location.pathname === "/publisherdashboard" ? "active-link" : ""
          }
          onClick={showDashBoard}
        >
          Publisher
        </Link>
        <Link
          to="/reviewerdashboard"
          className={
            location.pathname === "/reviewerdashboard" ? "active-link" : ""
          }
          onClick={showDashBoard}
        >
          Content Analyst
        </Link>
        <Link
          to="/translatorsdashboard"
          className={
            location.pathname === "/translatorsdashboard" ? "active-link" : ""
          }
          onClick={showDashBoard}
        >
          Translator
        </Link>
      </div>
      <div className="mobile-view">
        {isMobileMenuOpen ? (
          <FaTimes className="nb-icon" onClick={toggleMobileMenu} />
        ) : (
          <FaBars className="nb-icon" onClick={toggleMobileMenu} />
        )}
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
            to="/aboutus"
            className={location.pathname === "/aboutus" ? "active-link" : ""}
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
            to="/contactus"
            className={location.pathname === "/contactus" ? "active-link" : ""}
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
              className={
                location.pathname === "/dashboard" ? "active-link" : ""
              }
              onClick={showDashBoard}
            >
              Dashboard
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
