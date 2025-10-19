import { useEffect, useState } from "react";
import { getBookById, updateBook } from "../services/Books.services";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [book, setBook] = useState({
    id: id,
    title: "",
    author: "",
    year: "",
    genre: "",
  });

  useEffect(() => {
    getBookById(id).then((response) => {
      setBook(response.data);
    });
  }, [id]);

  const editBook = (e) => {
    e.preventDefault();
    if (!book.title || !book.author || !book.year || !book.genre) {
      Swal.fire({
        icon: "warning",
        title: "Missing Fields",
        text: "Please fill in all fields before submitting.",
      });
      return;
    }

    updateBook(id, book)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Book Updated!",
          text: "The book has been successfully updated.",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => navigate("/"), 1500);
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Something went wrong while updating the book.",
        });
      });
  };

  return (
    <>
      <h1 className="w-100 text-center my-4">Edit Book</h1>
      <form onSubmit={editBook}>
        <div className="mb-3 container w-25">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            onChange={(e) => setBook({ ...book, title: e.target.value })}
            value={book.title}
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
            onChange={(e) => setBook({ ...book, author: e.target.value })}
            value={book.author}
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
            onChange={(e) => setBook({ ...book, year: e.target.value })}
            value={book.year}
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
            onChange={(e) => setBook({ ...book, genre: e.target.value })}
            value={book.genre}
          />
        </div>

        <div className="mb-3 container w-25">
          <button type="submit" className="btn btn-primary w-100">
            Update Book
          </button>
        </div>
      </form>
    </>
  );
}

export default Edit;
