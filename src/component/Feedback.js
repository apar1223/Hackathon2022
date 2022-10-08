import React from "react";
import "./Feedback.css";
export default function Feedback() {
  return (
    <div className="container my-2">
      <div
        className=" shadow mainSection  p-3 text-white "
        style={{
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.7) 0px 5px 30px",
        }}
      >
        <h1 className="text-center my-4 mx-4 px-4 py-4 ">Feedback Form</h1>
        <form
          action="https://formsubmit.co/darknick414@gmail.com"
          method="POST"
        >
          <h4>Name</h4>
          <input
            className="form-control  my-4 "
            type="text"
            placeholder="Enter Name ..."
            name="name"
            aria-label="default input example"
          />
          <h4>Select Yojna</h4>
          <select
            className="form-select my-4"
            aria-label="Default select example"
            name="selected yojana"
          >
            <option selected>None</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <h4>Enter your Email</h4>
          <input type="email" name="email" htmlFor="email" id="" />

          <h4 className="my-4">Enter Your Suggestion Here</h4>
          <input
            type="hidden"
            name="_next"
            value="http://localhost:3000/Feedback"
          />
          <div className="form-group ">
            <textarea
              className="form-control my-4 -dark"
              id="exampleFormControlTextarea1"
              rows="10"
              name="Feedback message"
            ></textarea>
          </div>
          <div className="d-grid gap-2 col-1">
            <button
              type="submit"
              target="_blank"
              className="mybutton btn btn-light"
            >
              SUBMIT
            </button>
          </div>
          <input type="hidden" name="_captcha" value="false" />
        </form>
      </div>
    </div>
  );
}
