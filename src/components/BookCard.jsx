import React from "react";
import "../App.css"

const BookCard = ({ img, name, disc }) => {
  return (
    <div className="bookcard">
      <div className="card">
        <img src={img} alt={name} />
        <p className="book-author">{name}</p>
        <p className="book-disc">{disc}</p>
      </div>
    </div>
  );
};

export default BookCard;
