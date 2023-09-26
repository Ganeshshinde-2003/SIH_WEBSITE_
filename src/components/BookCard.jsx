import React from "react";
import { Link } from "react-router-dom";

const BookCard = ({ img, name, disc, index }) => {
  return (
    <div className="bookcard">
      <Link to={`/bookdetials/${index}`} className="card-link">
        <div className="card">
          <img src={img} alt={name} />
          <p className="book-author">{name}</p>
          <p className="book-disc">{disc}</p>
        </div>
      </Link>
    </div>
  );
};

export default BookCard;
