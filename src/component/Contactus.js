import React, { useEffect, useState } from "react";
import "./ContactUs.css";
// import Map from "./map";
import mapAdd from "./mapAdd";
import imge from "../component/images/staticmap.png";
export default function Contactus() {
  const [district, setDistrict] = useState("Ahemdabad");
  const [url, setUrl] = useState("https://google.com");
  const handleEvent = () => {
    mapAdd.forEach((element) => {
      if (element.city === district) {
        console.log(
          "element link " + element.link + "And city id " + element.city
        );
        setUrl(element.link);
      }
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

      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
          onChange={(e) => setDistrict(e.target.value)}
        >
          Select your city
        </button>
        <ul class="dropdown-menu">
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Ahemdabad");
                handleEvent();
              }}
              to="/#"
            >
              Ahmedabad
            </a>
          </li>

          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Bharuch");
                handleEvent();
              }}
              to="/#"
              value="Bharuch"
            >
              Bharuch
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Vadodara");
                handleEvent();
              }}
              to="/#"
            >
              Vadodara
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Surat");
                handleEvent();
              }}
              to="/#"
            >
              Surat
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Nadiad");
                handleEvent();
              }}
              to="/#"
            >
              Nadiad
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Ghandhinagar");
                handleEvent();
              }}
              to="/#"
            >
              Ghandhinagar
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => {
                setDistrict("Anand");
                handleEvent();
              }}
              to="/#"
            >
              Anand
            </a>
          </li>
        </ul>
      </div>

      <div className="mt-5">
        <a href={url}>
          <img src={imge} alt="image"></img>
        </a>
      </div>
    </div>
  );
}
