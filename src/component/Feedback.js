import React, { useEffect, useState } from "react";
import "../App.css";

export default function Feedback() {
  return (
    <div>
      <div class="container">
        <h1>Feedback Form</h1>
        <form
          target="_blank"
          action="https://formsubmit.co/ayushthakor1313@gmail.com"
          method="POST"
        >
          <div class="form-group">
            <div class="form-row">
              <div class="col">
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  placeholder="Enter your Full Name"
                  required
                ></input>
              </div>
              <div class="col">
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  placeholder="Enter your Email Address"
                  required
                ></input>
              </div>
            </div>
          </div>
          <div class="form-group">
            <textarea
              placeholder="Enter your Suggestion Releted to Our Yojana"
              class="form-control"
              name="message"
              rows="10"
              required
            ></textarea>
          </div>
          <button type="submit" class="btn-submit">
            SUBMIT
          </button>
          <input
            type="hidden"
            name="_captcha"
            value="http://localhost:3000/Feedback"
          ></input>
        </form>
      </div>
    </div>
  );
}
