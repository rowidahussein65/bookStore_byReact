import { useState } from "react";
import { createBook } from "../services/Books.services";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Create() {
  const navigate = useNavigate();

  const [book, setBook] = useState({
    title: "",
    author: "",
    year: "",
    genre: "",
  });

  const addBook = (e) => {
    e.preventDefault();

    // Validate inputs
    if (
      book.title === "" ||
      book.author === "" ||
      book.year === "" ||
      book.genre === ""
    ) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all fields before submitting.",
        confirmButtonColor: "#0d6efd",
      });
      return;
    }

    // Create book
    createBook(book);
    Swal.fire({
      icon: "success",
      title: "Book Added!",
      text: `"${book.title}" has been added successfully.`,
      showConfirmButton: false,
      timer: 2000,
    });

    // Redirect after short delay
    setTimeout(() => navigate("/"), 2000);
  };

  return (
    <>
      <h1 className="w-100 text-center my-4">Add a New Book</h1>
      <form onSubmit={addBook}>
        <div className="mb-3 container w-25">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            placeholder="Enter book title"
            onChange={(e) => setBook({ ...book, title: e.target.value })}
          />
        </div>

        <div className="mb-3 container w-25">
          <label htmlFor="author" className="form-label">
            Author
          </label>
          <input
            type="text"
            className="form-control"
            id="author"
            placeholder="Enter author name"
            onChange={(e) => setBook({ ...book, author: e.target.value })}
          />
        </div>

        <div className="mb-3 container w-25">
          <label htmlFor="year" className="form-label">
            Year
          </label>
          <input
            type="number"
            className="form-control"
            id="year"
            placeholder="Enter publication year"
            onChange={(e) => setBook({ ...book, year: e.target.value })}
          />
        </div>

        <div className="mb-3 container w-25">
          <label htmlFor="genre" className="form-label">
            Genre
          </label>
          <input
            type="text"
            className="form-control"
            id="genre"
            placeholder="Enter book genre"
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
          />
        </div>

        <div className="mb-3 container w-25 text-center">
          <button type="submit" className="btn btn-dark px-4">
            Add Book
          </button>
        </div>
      </form>
    </>
  );
}

export default Create;
