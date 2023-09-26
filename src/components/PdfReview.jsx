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
            Qualification <br /> <span>MBBS @Victoria</span>
          </p>

          <p>
            Affiliation <br /> <span>No 1 author of 2002. by AIIMS Delhi</span>
          </p>
        </div>
        <div>
          <img src={book1} alt="alt" />
        </div>
      </div>
    </div>
  );
};

export default PdfReview;
