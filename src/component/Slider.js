import React from "react";
import p1 from "./images/Towards a new drwn a.png";
import p2 from "./images/2ht.png";
import p3 from "./images/3ht.png";
import "../App.css";
const Slider = () => {
  return (
    <div className="foh">
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-bs-ride="true"
      >
        {/* <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
            style={{ background: "none" }}
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div> */}
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={p1} class="d-block w-100" height={350} alt="..." />
          </div>
          <div class="carousel-item">
            <img src={p2} class="d-block w-100" height={350} alt="..." />
          </div>
          <div class="carousel-item">
            <img src={p3} class="d-block w-100" height={350} alt="..." />
          </div>
        </div>
        {/* <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
        {/* <span class=" visually-hidden ">Previous</span> */}
        {/* </button> */}
        {/* <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>
    </div>
  );
};

export default Slider;
