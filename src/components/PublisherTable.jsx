import React from "react";
import PublisherData from "../Data/PublisherData.json";
import Image1 from "../assets/book12.jpg";
import { FaShareSquare } from "react-icons/fa";

const Table = () => {
  return (
    <div className="container my-4 dashboard-table-container">
      <table className="table table-responsive-md table-bordered">
        <thead className="bg-gray-700 text-white text-center">
          <tr>
            <th>Submission ID</th>
            <th>Book Title</th>
            <th>Author</th>
            <th>Tags/Keywords</th>
            <th>Cover Image</th>
            <th>Expected Review Date</th>
            <th>Review Status</th>
            <th>Rating</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody className="table-body text-center">
          {PublisherData.map((publisherData) => (
            <tr
              key={publisherData.id}
              className="border-t hover-bg-gray-100 transition-colors duration-200 text-center"
            >
              <td>{publisherData.SubmissionID}</td>
              <td>{publisherData.BookTitle}</td>
              <td>{publisherData.Author}</td>
              <td>{publisherData.Tags}</td>
              <td>
                <img
                  // src={`../assets/${publisherData.coverImage}`}
                  src={Image1}
                  width={40}
                  height={50}
                  alt="..."
                  decoding="async"
                  className="h-8"
                />
              </td>
              <td>{publisherData.ExpectedReviewDate}</td>
              <td>{publisherData.ReviewStatus}</td>
              <td>{publisherData.ReviewRating}</td>
              <td>
                <FaShareSquare />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
