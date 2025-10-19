import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-light">
        <div className="container">
          <Link className="navbar-brand text-dark fs-5" to="/">
            <i className="bi bi-book me-2"></i>
            <span className="fw-medium">Book Store</span>
          </Link>
          <button
            className="navbar-toggler bg-light"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end px-1 "
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <Link
                className="nav-link active fw-medium text-black fs-5"
                aria-current="page"
                to="/"
              >
                Home
              </Link>
              <Link className="nav-link fw-medium text-black fs-5" to="/create">
                Create Book
              </Link>
              <Link
                className="nav-link fw-medium text-black fs-5"
                to="/contact"
              >
                Contact
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
