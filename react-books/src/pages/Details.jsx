import { useEffect, useState } from "react";
import { getBookById } from "../services/Books.services";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Details() {
  const [book, setBook] = useState({});

  const { id } = useParams();

  useEffect(() => {
    getBookById(id).then((response) => {
      setBook(response.data);
    });
  }, []);
  return (
    <>
      <h1 className="w-100 text-center my-4">Book Details</h1>
      <div className="container w-25">
        <div className="card">
          <div className="card-header">{book.title}</div>
          <div className="card-body">
            <h5 className="card-title">Author : {book.author}</h5>
            <p className="card-text">Year : {book.year}</p>
            <p className="card-text">Genre : {book.genre}</p>
            <Link to={`/Delete/${book.id}`} className="btn btn-danger">Detlete</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
