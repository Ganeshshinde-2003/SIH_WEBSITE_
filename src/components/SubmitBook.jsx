import React, { useState } from "react";
import Sidebar from "./Sidebar";
import { toast} from "react-toastify";

const SubmitBook = () => {
  const [bookData, setBookData] = useState({
    title: "",
    author: "",
    description: "",
    genre: "",
    file: null,
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setBookData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setBookData((prevData) => ({
      ...prevData,
      file,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Book data submitted:", bookData);
    toast.success("Book submitted successfully!");
    setBookData({
      title: "",
      author: "",
      description: "",
      genre: "",
      file: null,
      termsAgreed: false,
    });


  };

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div className="registration-container">
        <div
          className="registration-form"
          style={{ display: "flex", justifyContent: "space-around" }}
        >
          <h2>Submit Your Book</h2>
          <form onSubmit={handleSubmit}>
            <input
              className="registration-input"
              type="text"
              name="title"
              placeholder="Enter Book Title"
              value={bookData.title}
              onChange={handleChange}
              required
            />
            <input
              className="registration-input"
              type="text"
              name="author"
              placeholder="Enter Author Name"
              value={bookData.author}
              onChange={handleChange}
              required
            />
            <textarea
              className="registration-input"
              name="description"
              value={bookData.description}
              onChange={handleChange}
              placeholder="Enter Description"
              required
            />
            <input
              className="registration-input"
              type="text"
              name="genre"
              placeholder="Genre"
              value={bookData.genre}
              onChange={handleChange}
              required
            />
            <label>
              Submit Book File (PDF,DOC, EPUB, etc.)
              <input
                className="registration-input"
                type="file"
                name="file"
                onChange={handleFileChange}
                required
              />
            </label>
            <label>
              <input
                className="registration-input"
                type="checkbox"
                name="termsAgreed"
                checked={bookData.termsAgreed}
                onChange={handleChange}
                required
              />
              I agree to the terms and conditions.
            </label>
            <button className="registration-button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SubmitBook;
