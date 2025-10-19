import { useState, useEffect } from "react";
import { getBooks, deleteBook } from "../services/Books.services";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function HomePage() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  const deleteB = (id) => {
    Swal.fire({
      title: "Are you sure? 😥",
      text: "This book will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "Cancel",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id).then(() => {
          setBooks(Books.filter((book) => book.id !== id));

          Swal.fire({
            title: "Deleted Successfully 🎉",
            text: "The book has been removed from the list.",
            icon: "success",
            confirmButtonText: "OK",
          });
        });
      }
    });
  };

  return (
    <>
      <h1 className="w-100 text-center my-4">Home Page</h1>
      <table className="table container">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Author</th>
            <th>Year</th>
            <th>Genre</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {Books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>{book.title}</td>
              <td>{book.author}</td>
              <td>{book.year}</td>
              <td>{book.genre}</td>
              <td>
                <Link
                  to={`/Details/${book.id}`}
                  className="btn btn-primary btn-sm me-2"
                >
                  View
                </Link>
                <Link
                  to={`/Edit/${book.id}`}
                  className="btn btn-warning btn-sm me-2"
                >
                  Edit
                </Link>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteB(book.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default HomePage;
