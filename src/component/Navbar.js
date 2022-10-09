import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <div>
        <nav
          className="navbar navbar-expand-lg navbar-dark"
          style={{
            background: "#E64848",
            fontWeight: "bolder",
          }}
        >
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m-1" id="navbarNav">
            <ul className="navbar-nav d-flex">
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link " to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mr-4  text-secondary text-center">
                <NavLink className="nav-link" to="/Schemes">
                  Schemes
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <a
                  className="nav-link"
                  href="https://chatbot-yyoo.vercel.app/"
                  target="_blank"
                >
                  Chatbot
                </a>
                {/* <button><a href="ind.html">chatbot</a></button> */}
              </li>

              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link" to="/PhotoGallery">
                  PhotoGallery
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link" to="/Feedback">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link " to="/Aboutus">
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link" to="/Contactus">
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
