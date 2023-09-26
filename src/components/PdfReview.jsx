import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import book1 from "../assets/book1.jpg";

const PdfReview = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  console.log(windowWidth);

  // Update the window width when the component mounts and when the window is resized
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="pdf-container">
      <p className="pdf-heading">Review Book</p>
      <div className="pdf-content">
        <div className="reviewer-details">
          <p>
            Name <br /> <span>Anuradha Goyal</span>
          </p>
          <p>
            Book Name <br /> <span>Anatomy For Students</span>
          </p>
          <p>
            Deadline to review <br /> <span>07-10-2023</span>
          </p>
        </div>
        <div>
          <img src={book1} alt="alt" />
          {windowWidth > 800 ? (
            <Link to="http://localhost:3001/custom-image-stamp">
              Start Reviewing
            </Link>
          ) : (
            <p className="pdf-danger">*Please use laptop to start review</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PdfReview;
