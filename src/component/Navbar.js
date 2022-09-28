import React from "react";
import { NavLink } from "react-router-dom";
import "../App.css";
const Navbar = () => {
  return (
    <>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light ">
          <div className="collapse navbar-collapse m-2" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item active mr-4">
                <NavLink className="nav-link" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/Schemes">
                  Schemes
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/Notification">
                  Notification
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/PhotoGallery">
                  PhotoGallery
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink className="nav-link" to="/Feedback">
                  Feedback
                </NavLink>
              </li>
              <li className="nav-item mr-4">
                <NavLink className="nav-link " to="/Aboutus">
                  Aboutus
                </NavLink>
              </li>
              <li className="nav-item mr-4">
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
