import { useEffect, useState } from "react";
import { getBookById, updateBook } from "../services/Books.services";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";



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
  }, []);

  const editBook = (e) => {
    e.preventDefault();
    if (
      book.title == "" ||
      book.author == "" ||
      book.year == "" ||
      book.genre == ""
    ) {
      alert("All fields are required");
      return;
    } else {
      updateBook(id, book);
      alert("Book edited successfully");
      navigate("/");
    }
  };

  return (
    <>
      <h1 className="w-100 text-center my-4">Add Book</h1>
      <form action="" className="" onSubmit={editBook}>
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
          <button type="submit" className="btn btn-primary">
            Update Book
          </button>
        </div>
      </form>
    </>
  );
}

export default Edit;
