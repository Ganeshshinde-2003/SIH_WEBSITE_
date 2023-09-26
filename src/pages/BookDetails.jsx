import React, { useState } from "react";
import { useParams } from "react-router-dom";
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
import { BsArrowRight } from "react-icons/bs";
import { AiOutlinePlus } from "react-icons/ai";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const listOne = [
  {
    img: book1,
    name: " DM. Vasudevan ",
    disc: "Gray's Anatomy for Students -4E: With Student Consult Online Access",
    domain: "Ayurveda",
    ratings: "4.5",
  },
  {
    img: book2,
    name: " Vaz ",
    disc: "Guyton & Hall Textbook of Medical Physiology: Third South Asia Edition",
    domain: "Ayurveda",
    ratings: "4-5",
  },
  {
    img: book3,
    name: " Inderbir Singh ",
    disc: "Atlas of Human Anatomy, International Edition, 7e",
    domain: "Ayurveda",
    ratings: "2-5",
  },
  {
    img: book4,
    name: "Dr N.S.Mahakal",
    disc: "Global Ayurved-A (Part-1) Comprehensive Guide Book for All India Ayurved P.G Entrance Test",
    domain: "Ayurveda",
    ratings: "5",
  },
  {
    img: book5,
    name: " Dr K.A.Tawalare",
    disc: "Global Ayurved-A (Part-2) Comprehensive Guide Book for All India Ayurved P.G Entrance Test",
    domain: "Ayurveda",
    ratings: "1-5",
  },
  {
    img: book6,
    name: "Dr.Bishnu Choudhary ",
    disc: "A Hand Book Of Ayurvedic Medicine",
    domain: "Unani",
    ratings: "3-5",
  },
  {
    img: book7,
    name: "K. D. Tripathi",
    disc: "Handbook on Unani Medicines with Formulae, Processes, Uses and Analysis",
    domain: "Unani",
    ratings: "3-5",
  },
  {
    img: book8,
    name: " Mohammad Unwan ",
    disc: "THE TEXTBOOK OF MOALAJAT : MASTER THE UNANI MEDICINE WITH CONFIDENCE",
    domain: "Unani",
    ratings: "3-5",
  },
  {
    img: book9,
    name: "Ministry Of Ayush",
    disc: "A Handbook Of Common Remedies In Unani Medicine  (Paperback, Ministry Of Ayush)",
    domain: "Unani",
    ratings: "4-5",
  },
  {
    img: book10,
    name: "Pitchiah kumar M. ",
    disc: "Fundamentals of SIDDHA INTERNAL MEDICINE ",
    domain: "Siddha",
    ratings: "2-5",
  },
  {
    img: book11,
    name: " SivaYogi Sivarajan ",
    disc: "VASI YOGA SECRETS",
    domain: "Siddha",
    ratings: "5",
  },
  {
    img: book12,
    name: "  R. Palpandian ",
    disc: "Siddhas - Masters of Nature ",
    domain: "Siddha",
    ratings: "4-5",
  },
];

const BookDetails = () => {
  const { id } = useParams();
  const [showReviewRating, setShowReviewRating] = useState(false); // State to manage the visibility
  const [showReviewRating2, setShowReviewRating2] = useState(false);
  const [showReviewRating3, setShowReviewRating3] = useState(false);
  const handleReviewDatesClick = () => {
    setShowReviewRating(!showReviewRating);
    const iconElement = document.querySelector(".book-review-plus-icon");
    if (!showReviewRating) {
      iconElement.classList.add("rotate-icon");
    } else {
      iconElement.classList.remove("rotate-icon");
    }
  };
  const handleReviewDatesClick2 = () => {
    setShowReviewRating2(!showReviewRating2);
    const iconElement = document.querySelector(".book-review-plus-icon2");
    if (!showReviewRating2) {
      iconElement.classList.add("rotate-icon");
    } else {
      iconElement.classList.remove("rotate-icon");
    }
  };
  const handleReviewDatesClick3 = () => {
    setShowReviewRating3(!showReviewRating3);
    const iconElement = document.querySelector(".book-review-plus-icon3");
    if (!showReviewRating3) {
      iconElement.classList.add("rotate-icon");
    } else {
      iconElement.classList.remove("rotate-icon");
    }
  };
  return (
    <div className="book-details">
      <div className="book-details-card">
        <img src={listOne[id].img} alt={listOne[id].name} />
        <div className="book-details-detail">
          <span className="book-details-name">
            {listOne[id].name}
            <span> Author</span>
          </span>
          <span className="book-details-disc">{listOne[id].disc}</span>
          <span className="book-details-buynow">
            Buy Now <BsArrowRight className="book-details-icon" />
          </span>
        </div>
      </div>
      <p className="book-details-heading">
        Curated by{" "}
        <span>
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </span>
      </p>
      <div className="book-details-review">
        <div className="review">
          <div className="review-name" onClick={handleReviewDatesClick}>
            <p>
              Anuradha Goyal <span>Brain specialist</span>
            </p>
            <AiOutlinePlus className="book-review-plus-icon" />
          </div>
          <div
            className="review-details"
            style={{ display: showReviewRating ? "flex" : "none" }}
          >
            <div className="review-dates">
              <p>2023-09-26</p>
              <p>{listOne[id].domain}</p>
              <p>
                4.5
                <FaStar />
              </p>
            </div>
            <div className="review-ratings">
              <div className="reviewer-details">
                <p>
                  Name <br /> <span>Anuradha Goyal</span>
                </p>
                <p>
                  Qualification <br /> <span>M-Tech Author</span>
                </p>

                <p>
                  Affiliation <br />{" "}
                  <span>No 1 author of 2002. by AIIMS Delhi</span>
                </p>
              </div>
              <div className="reviewer-comment">
                <p>Comment by reviewer</p>
                <p>
                  A compelling exploration of the world of medicine, this book
                  provides an insightful and informative journey into the
                  complexities of healthcare, making it a must-read for anyone
                  interested in the field.
                </p>
              </div>
              <div className="reviewer-ratings">
                <div className="ratings">
                  <p>Accuracy</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Relevance</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Completeness</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Clarity</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Language and Presentation</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Easy to Read</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="review-name" onClick={handleReviewDatesClick2}>
            <p>
              Akhila Saroha <span>Heart specialist</span>
            </p>
            <AiOutlinePlus className="book-review-plus-icon2" />
          </div>
          <div
            className="review-details"
            style={{ display: showReviewRating2 ? "flex" : "none" }}
          >
            <div className="review-dates">
              <p>2023-09-26</p>
              <p>{listOne[id].domain}</p>
              <p>
                4
                <FaStar />
              </p>
            </div>
            <div className="review-ratings">
              <div className="reviewer-details">
                <p>
                  Name <br /> <span>Akhila Saroha</span>
                </p>
                <p>
                  Qualification <br /> <span>B-Tech Author</span>
                </p>

                <p>
                  Affiliation <br />{" "}
                  <span>No 1 author of 2002. by Victoria Bangalore</span>
                </p>
              </div>
              <div className="reviewer-comment">
                <p>Comment by reviewer</p>
                <p>
                  Delving deep into the realm of medicine, this book offers
                  invaluable insights into the intricacies of healthcare, making
                  it an essential read for those passionate about the field
                </p>
              </div>
              <div className="reviewer-ratings">
                <div className="ratings">
                  <p>Accuracy</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Relevance</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Completeness</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Clarity</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Language and Presentation</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Easy to Read</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="review">
          <div className="review-name" onClick={handleReviewDatesClick3}>
            <p>
              Vidhya Thakkar <span>Cancer specialist</span>
            </p>
            <AiOutlinePlus className="book-review-plus-icon3" />
          </div>
          <div
            className="review-details"
            style={{ display: showReviewRating3 ? "flex" : "none" }}
          >
            <div className="review-dates">
              <p>2023-09-26</p>
              <p>{listOne[id].domain}</p>
              <p>
                4.5
                <FaStar />
              </p>
            </div>
            <div className="review-ratings">
              <div className="reviewer-details">
                <p>
                  Name <br /> <span>Vidhya Thakkar</span>
                </p>
                <p>
                  Qualification <br /> <span>M-Tech Author</span>
                </p>

                <p>
                  Affiliation <br />{" "}
                  <span>
                    No 1 author of 2002. by Christian Medical College, Vellore
                  </span>
                </p>
              </div>
              <div className="reviewer-comment">
                <p>Comment by reviewer</p>
                <p>
                  Offering a profound exploration of the medical world, this
                  book presents enlightening perspectives on the intricacies of
                  healthcare, making it indispensable for anyone with an
                  interest in the field.
                </p>
              </div>
              <div className="reviewer-ratings">
                <div className="ratings">
                  <p>Accuracy</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Relevance</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Completeness</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Clarity</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Language and Presentation</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStarHalfAlt />{" "}
                    <FaRegStar />
                  </p>
                </div>
                <div className="ratings">
                  <p>Easy to Read</p>
                  <p>
                    <FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaRegStar />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="review-student">
        <p className="book-details-heading">
          Student Review{" "}
          <span>
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStarHalfAlt />
          </span>
        </p>
      </div>
    </div>
  );
};

export default BookDetails;
