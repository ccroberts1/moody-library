import React from "react";
import "../styles/Navbar.css";

const Navbar = ({ currentPage, handlePageChange }) => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handlePageChange("Home")}
                  className={
                    currentPage === "Home" ? "nav-link active" : "nav-link"
                  }
                >
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handlePageChange("My Library")}
                  className={
                    currentPage === "My Library"
                      ? "nav-link active"
                      : "nav-link"
                  }
                >
                  My Library
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => handlePageChange("My Tags")}
                  className={
                    currentPage === "My Tags" ? "nav-link active" : "nav-link"
                  }
                >
                  My Tags
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
