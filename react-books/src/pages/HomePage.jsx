import { useState, useEffect } from "react";
import { getBooks, deleteBook } from "../services/Books.services";
import { Link } from "react-router-dom";
function HomePage() {
  const [Books, setBooks] = useState([]);

  useEffect(() => {
    getBooks().then((response) => {
      setBooks(response.data);
    });
  }, []);

  const deleteB = (id) => {
    deleteBook(id);
    console.log("Deleted", id);
    alert("Book deleted successfully");
    
    setBooks(Books.filter((book) => book.id !== id));
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
