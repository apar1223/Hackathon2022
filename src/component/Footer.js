import React from "react";
import "../App.css";
const footer = () => {
  return (
    <div
      className="cop"
      style={{
        position: "absolute",
        left: "0",
        right: "0",
        bottom: "0",
        backgroundColor: "red",
        textAlign: "center",
      }}
    >
      <span>&#169; </span>Copyright all rights are reserved
    </div>
  );
};

export default footer;
