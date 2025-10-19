import { useState } from "react";
import { createBook } from "../services/Books.services";
import { useNavigate } from "react-router-dom";
function Create() {

    const navigate = useNavigate();

    const [book, setBook] = useState({
        title: "",
        author: "",
        year: "",
        genre: ""
    });

    const addBook = (e) => {
        e.preventDefault();
        if( book.title === "" || book.author === "" || book.year === "" || book.genre === ""){
            alert("All fields are required");
            return;
        }
        else{
            createBook(book);
            alert("Book added successfully");
            navigate("/");
        }
    }

    return ( 
        <>
            <h1 className="w-100 text-center my-4">Add Book</h1>
            <form action="" className="" onSubmit={addBook}>
                <div className="mb-3 container w-25">
                    <label htmlFor="title" className="form-label">Title</label>
                    <input type="text" className="form-control" id="title" onChange={(e) => setBook({...book, title : e.target.value})} />
                </div>
                <div className="mb-3 container w-25">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" onChange={(e) => setBook({...book, author : e.target.value})} />
                </div>
                <div className="mb-3 container w-25">
                    <label htmlFor="year" className="form-label">Year</label>
                    <input type="number" className="form-control" id="year" onChange={(e) => setBook({...book, year : e.target.value})} />
                </div>
                <div className="mb-3 container w-25">
                    <label htmlFor="genre" className="form-label">Genre</label>
                    <input type="text" className="form-control" id="genre" onChange={(e) => setBook({...book, genre : e.target.value})} />
                </div>
                <div className="mb-3 container w-25">
                    <button type="submit" className="btn btn-primary">Add Book</button>
                </div>
            </form>
        </>
     );
}

export default Create;