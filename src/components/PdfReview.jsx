import React from "react";
import { Link } from "react-router-dom";
import book1 from "../assets/book1.jpg";

const PdfReview = () => {
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
          <Link to="http://localhost:3001/custom-image-stamp">
            Start Reviewing
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PdfReview;
