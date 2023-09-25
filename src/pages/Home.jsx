import React from "react";
import "../App.css";

const Home = () => {
  return (
    <div className="home">
      <div className="home-hero">
        <img
          className="logo-img"
          src="https://ayush.gov.in/images/Fbanner/frontpage2.png"
          alt="ayush"
        />
        <p className="slogan">
          Fostering talent, <br /> shaping the <span>Future of Health</span>
        </p>
        <img
          src="https://www.onlygfx.com/wp-content/uploads/2021/12/opened-book-4278.svg"
          alt="logo-slogna"
          className="book-pic"
        />
      </div>
    </div>
  );
};

export default Home;
