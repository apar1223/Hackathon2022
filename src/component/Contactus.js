import React, { useState, a } from "react";
// import "./ContactUs.css";
import mapAdd from "./mapAdd";
// import mapAdd from "../../src/api";
import imge from "../component/images/staticmap.png";
export default function Contactus() {
  const [district, setDistrict] = useState("Ahemdabad");
  const [url, setUrl] = useState("");
  const handleEvent = () => {
    mapAdd.forEach((element) => {
      if (element.city === district) setUrl(element.link);
    });
  };
  return (
    <div className="dropdown text-center" style={{ paddingLeft: "40px" }}>
      <input
        className="form-control"
        type="text"
        placeholder="Default input"
        value={district}
        aria-label="default input example"
      ></input>
      <button
        className="btn mt-3"
        type="button"
        id="dropd ownMenuButton"
        data-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        Select your city
      </button>
      <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Ahemdabad");
            handleEvent();
          }}
          href="#"
        >
          Ahmedabad
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Vadodara");
            handleEvent();
          }}
          href="#"
        >
          Vadodara
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Dahod");
            handleEvent();
          }}
          href="#"
        >
          Dahod
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Chota Udepur");
            handleEvent();
          }}
          href="#"
        >
          Chota Udepur
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Botad");
            handleEvent();
          }}
          href="#"
        >
          Botad
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Bhavnagar");
            handleEvent();
          }}
          href="#"
        >
          Bhavnagar
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Bharuch");
            handleEvent();
          }}
          href="#"
        >
          Bharuch
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Banaskantha");
            handleEvent();
          }}
          href="#"
        >
          Banaskantha
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Aravalli");
            handleEvent();
          }}
          href="#"
        >
          Aravalli
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Anand");
            handleEvent();
          }}
          href="#"
        >
          Anand
        </a>
        <a
          className="dropdown-item"
          onClick={() => {
            setDistrict("Amreli");
            handleEvent();
          }}
          href="#"
        >
          Amreli
        </a>
        {/* <a className="dropdown-item" href="#">
          Navsari
        </a>
        <a className="dropdown-item" href="#">
          Bhuj
        </a>
        < className="dropdown-item" href="#">
          Rajkot
        </>
        <a className="dropdown-item" href="#">
          Bhavnagar
        </a>
        <a className="dropdown-item" href="#">
          Anand
        </a>
      </div> */}
      </div>

      <div className="mt-5">
        <a href={url}>
          <img src={imge} alt="image"></img>
        </a>
      </div>
    </div>
  );
}

// export default Contactus;
