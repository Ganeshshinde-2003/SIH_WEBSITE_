import React from "react";
// import PublisherData from "../Data/PublisherData.json";
import Image1 from "../assets/book1.jpg";
import Image2 from "../assets/book3.jpg";
import Image3 from "../assets/book4.jpg";
import Image4 from "../assets/book6.jpg";
import Image5 from "../assets/book8.jpg";

import { FaShareSquare } from "react-icons/fa";


const PublisherData =[{
  "id": 1,
  "SubmissionID": "SUB-1456351",
  "BookTitle": "Gray's Anatomy",
  "Author": "DM. Vasudevan ",
  "Tags": "Siddha",
  "coverImage":Image1,
  "ExpectedReviewDate": "2023-09-30",
  "Actions": "Action 1",
  "ReviewStatus": "🟡 In-Review",
  "ReviewRating": 3.5,
  "Comments": "No comments yet"
},
{
  "id": 2,
  "SubmissionID": "SUB-850902",
  "BookTitle": "Guyton & Hall Textbook",
  "Author": "Vaz ",
  "Tags": "Unani",
  "coverImage": Image2,
  "ExpectedReviewDate": "2023-10-05",
  "Actions": "Action 2",
  "ReviewStatus": "🟢 Approved",
  "ReviewRating": 4.0,
  "Comments": "Great work!"
}, 
{
    "id": 3,
    "SubmissionID": "SUB-679052",
    "BookTitle": "Hand Book Of Ayurvedic Medicine",
    "Author": "Dr.Bishnu Choudhary ",
    "Tags": "Ayurved",
    "coverImage": Image3,
    "ExpectedReviewDate": "2023-10-05",
    "Actions": "Action 2",
    "ReviewStatus": "🟢 Approved",
    "ReviewRating": 3,
    "Comments": "Great work!"
  },
  {
    "id": 4,
    "SubmissionID": "SUB-456792",
    "BookTitle": "Global Ayurved-A ",
    "Author": "Dr N.S.Mahakal",
    "Tags": "Ayurved",
    "coverImage": Image4,
    "ExpectedReviewDate": "2023-10-05",
    "Actions": "Action 2",
    "ReviewStatus": "🔴 Rejecterd",
    "ReviewRating": 4.5,
    "Comments": " work Hard!"
  } ,
  {
    "id": 5,
    "SubmissionID": "SUB-9456351",
    "BookTitle": " Anatomy",
    "Author": "Vasudevan Nair",
    "Tags": "Siddha",
    "coverImage":Image5,
    "ExpectedReviewDate": "2023-09-30",
    "Actions": "Action 1",
    "ReviewStatus": "🟡 In-Review",
    "ReviewRating": 4.2,
    "Comments": "No comments yet"
  }

]


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
                  // src={''}
                  src={publisherData.coverImage}
                  // src={Image1}
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
