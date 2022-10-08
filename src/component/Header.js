import React from "react";
import photo1 from "../component/images/logo-removebg-preview.png";
import photo2 from "../component/images/Ministry_of_Women_and_Child_Development.svg.png";
const Header = () => {
  return (
    <div
      className="head d-md-flex justify-content-between align-items-center d-block text-center"
      style={{
        background: "linear-gradient(#FCB2B2, #FFFFFF)",
      }}
    >
      <img
        style={{
          marginLeft: "20px",
          marginTop: "8px",
        }}
        src={photo1}
        alt=""
      />
      <div
        // style={{
        //   height: "15vh",
        //   textAlign: "center",
        //   marginTop: "20px",
        //   marginLeft: "60px",
        // }}
        className="m-md-0 m-2"
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
