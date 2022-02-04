import "../../styles/MyLibrary.css";
import axios from "axios";
import { useEffect, useState } from "react";
// import api from "./posts";

const MyLibrary = () => {
  const [libraryBooks, setLibraryBooks] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/api/books")
      .then((response) => {
        console.log(response.data);
        setLibraryBooks(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div
        className="col-12 d-flex flex-wrap justify-content-center"
        id="myLibrary"
      >
        {libraryBooks.map((book) => (
          <div className="card col-10 col-lg-5 m-3">
            <img
              src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1626979714l/56754734.jpg"
              className="card-img-top"
              alt="Cover of book"
            />
            <div className="card-body" key={book.id}>
              <h3 className="card-title">Title: {book.title}</h3>
              <h4 className="card-text">Author: {book.author}</h4>
              <h5 className="card-text">Genre: {book.genre}</h5>
              <h5 className="card-text">Page Count: {book.pages}</h5>
              <div></div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default MyLibrary;
