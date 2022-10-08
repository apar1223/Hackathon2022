import React from "react";
import Slider from "./Slider";
const Home = () => {
  return (
    <>
      <div className="container-fluid" style={{}}>
        <div
          className="d-flex justify-content-around flex-column"
          style={{ height: "70vh" }}
        >
          <Slider></Slider>
          <div
            className="inl d-md-flex d-block text-center"
            style={{
              justifyContent: "space-around",
              // margin: "auto",
              alignItems: "center",
              height: "6rem",
            }}
          >
            <div
              className="hel1"
              style={{ fontWeight: "bolder", letterSpacing: "1px" }}
            >
              <p>
                Educate a Woman,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;Empower a nation
              </p>
            </div>
            <div
              className="hel2"
              style={{ fontWeight: "bolder", letterSpacing: "1px" }}
            >
              <p>
                સ્ત્રીને શિક્ષિત કરો,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp; રાષ્ટ્રને સશક્ત બનાવો
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
