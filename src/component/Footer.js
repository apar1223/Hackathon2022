import React from "react";
import "../App.css";
const footer = () => {
  return (
    <div
      className="cop mt-auto"
      style={{
        backgroundColor: "#E64848",
        textAlign: "center",
        color: "white",
        padding: "10px",
        // fontSize: "large",
      }}
    >
      <span>&#169; </span>Copyright all rights are reserved
    </div>
  );
};

export default footer;
/*
position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "#E64848",
        textAlign: "center",
*/
