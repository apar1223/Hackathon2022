import React from "react";
import Slider from "./Slider";
const Home = () => {
  return (
    <>
      <div className="d-flex align-items-around flex-column ">
        <div className="">
          <Slider></Slider>
        </div>
        <div
          className="inl"
          style={{
            display: "flex",
            justifyContent: "space-around",
            // margin: "auto",
            alignItems: "center",
            height: "6rem",
          }}
        >
          <div className="hel1">
            <p>
              Educate a Woman , <br /> Empower a Nation
            </p>
          </div>
          <div className="hel2">
            <p>
              સ્ત્રીને શિક્ષિત કરો,
              <br /> રાષ્ટ્રને સશક્ત બનાવો
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
