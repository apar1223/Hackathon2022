import React from "react";
import p1 from "./images/Towards a new drwn a.png";
import p2 from "./images/2ht.png";
import p3 from "./images/3ht.png";
import "../App.css";
const Slider = () => {
  return (
    <div className="foh">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block wid"
              height={350}
              src={p1}
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block wid"
              height={350}
              src={p2}
              alt="Second slide"
              style={{
                alignSelf: "stretch",
              }}
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block wid"
              style={{
                alignSelf: "stretch",
              }}
              height={350}
              src={p3}
              alt="Third slide"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleControls"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
  );
};

export default Slider;
