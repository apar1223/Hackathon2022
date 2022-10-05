import React from "react";
import photo1 from "../component/images/logo-removebg-preview.png";
import photo2 from "../component/images/Ministry_of_Women_and_Child_Development.svg.png";
const Header = () => {
  return (
    <div
      className="head d-flex justify-content-between"
      style={{ height: "15vh" }}
    >
      <img
        style={{
          marginLeft: "20px",
          marginTop: "10px",
        }}
        src={photo1}
        alt=""
      />
      <div
        style={{
          height: "15vh",
          textAlign: "left",
          marginTop: "20px",
          marginLeft: "60px",
        }}
      >
        <h4 style={{ fontWeight: "bold" }}>Women and Child Department(Wcd)</h4>

        <h5>Government of Gujarat</h5>
      </div>
      <div
        style={{
          justifyContent: "end",
        }}
        className="d-none d-md-block"
      >
        <img
          style={{
            height: "12vh",
            marginTop: "5px",
          }}
          src={photo2}
          alt=""
        />
      </div>
    </div>
  );
};

export default Header;
