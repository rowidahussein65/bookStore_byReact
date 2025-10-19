import { useParams, useNavigate } from "react-router-dom";
import { getBookById, deleteBook } from "../services/Books.services";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

function Delete() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [book, setBook] = useState(null);

  // Fetch the book details by ID
  useEffect(() => {
    getBookById(id).then((response) => {
      setBook(response.data);
    });
  }, [id]);

  // Confirm deletion
  const confirmDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: `You are about to delete "${book.title}"`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteBook(id);
        Swal.fire({
          icon: "success",
          title: "Deleted!",
          text: "The book has been deleted successfully.",
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => navigate("/"), 1500);
      }
    });
  };

  // If book not loaded yet
  if (!book) {
    return (
      <div className="text-center mt-5">
        <h4>Loading book details...</h4>
      </div>
    );
  }

  return (
    <div className="container text-center mt-5">
      <h2>Delete Book</h2>
      <p className="fs-5 mt-3">
        Are you sure you want to delete the book <strong>"{book.title}"</strong>{" "}
        by {book.author}?
      </p>
      <div className="d-flex justify-content-center gap-3 mt-4">
        <button className="btn btn-danger px-4" onClick={confirmDelete}>
          Delete
        </button>
        <button
          className="btn btn-secondary px-4"
          onClick={() => navigate("/")}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}

export default Delete;
