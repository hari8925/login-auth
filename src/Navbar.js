import React from "react";
import { Link } from "react-router-dom";
// import Footer from "./Footer";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <h1 className="fs-1 navbar-brand" href="#">
          <i class="fa-solid fa-house fa-bounce"></i>
          Login<span className="text-primary">Form</span>
        </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav">
            {/* <li className="nav-item">
              <Link
                to="/home"
                className=" text-center fs-5 nav-link active"
                aria-current="page"
              >
                Home
              </Link>
            </li> */}
            <li className="nav-item">
              <Link to="/login" className=" text-center fs-5 nav-link" href="#">
                Login
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/register"
                className=" text-center fs-5 nav-link"
                href="#"
              >
                Register
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
