import React, { useState } from "react";
import "../App.css";
import { BiSearchAlt2 } from "react-icons/bi";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/boo2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";
import book5 from "../assets/book5.jpg";
import book6 from "../assets/book6.jpg";
import book7 from "../assets/book7.jpg";
import book8 from "../assets/book8.jpg";
import book9 from "../assets/book9.webp";
import book10 from "../assets/book10.jpg";
import book11 from "../assets/book11.jpg";
import book12 from "../assets/book12.jpg";
import { Link } from "react-router-dom";
import BookCard from "../components/BookCard";


const listOne = [
  {
    img: book1,
    name: " DM. Vasudevan ",
    disc: "Gray's Anatomy for Students -4E: With Student Consult Online Access",
  },
  {
    img: book2,
    name: " Vaz ",
    disc: "Guyton & Hall Textbook of Medical Physiology: Third South Asia Edition",
  },
  {
    img: book3,
    name: " Inderbir Singh ",
    disc: "Atlas of Human Anatomy, International Edition, 7e",
  },
  {
    img: book4,
    name: "Dr N.S.Mahakal",
    disc: "Global Ayurved-A (Part-1) Comprehensive Guide Book for All India Ayurved P.G Entrance Test",
  },
  {
    img: book5,
    name: " Dr K.A.Tawalare",
    disc: "Global Ayurved-A (Part-2) Comprehensive Guide Book for All India Ayurved P.G Entrance Test",
  },
  {
    img: book6,
    name: "Dr.Bishnu Choudhary ",
    disc: "A Hand Book Of Ayurvedic Medicine",
  },
  {
    img: book7,
    name: "K. D. Tripathi",
    disc: "Handbook on Unani Medicines with Formulae, Processes, Uses and Analysis",
  },
  {
    img: book8,
    name: " Mohammad Unwan ",
    disc: "THE TEXTBOOK OF MOALAJAT : MASTER THE UNANI MEDICINE WITH CONFIDENCE",
  },
  {
    img: book9,
    name: "Ministry Of Ayush",
    disc: "A Handbook Of Common Remedies In Unani Medicine  (Paperback, Ministry Of Ayush)",
  },
  {
    img: book10,
    name: "Pitchiah kumar M. ",
    disc: "Fundamentals of SIDDHA INTERNAL MEDICINE ",
  },
  {
    img: book11,
    name: " SivaYogi Sivarajan ",
    disc: "VASI YOGA SECRETS",
  },
  {
    img: book12,
    name: "  R. Palpandian ",
    disc: "Siddhas - Masters of Nature ",
  },
];

const Search = () => {
  const [numBooksToShow, setNumBooksToShow] = useState(6);

  const loadMoreBooks = () => {
    setNumBooksToShow(numBooksToShow + 6);
  };

  return (
    <div className="search-container">
      <p className="search-heading">Search Books</p>
      <div className="search-section">
        <BiSearchAlt2 className="search-icon" />
      </div>
      <div className="home-filter-nv">
        <div className="book-collection">
          {listOne.slice(0, numBooksToShow).map((book, index) => (
            <BookCard
              key={index}
              index={index}
              img={book.img}
              name={book.name}
              disc={book.disc}
            />
          ))}
        </div>
        {numBooksToShow < listOne.length && (
          <div className="load-more-button">
            <Link className="load-more-link" onClick={loadMoreBooks}>
              Load More...
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Search;
