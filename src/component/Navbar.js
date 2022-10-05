import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <div style={{ alignSelf: "stretch" }}>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse m-1" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active text-center mr-4">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link" to="/Schemes">
                  Schemes
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link" to="/Notification">
                  Notification
                </NavLink>
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
                  Aboutus
                </NavLink>
              </li>
              <li className="nav-item mr-4 text-center">
                <NavLink className="nav-link" to="/Contactus">
                  Contactus
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
