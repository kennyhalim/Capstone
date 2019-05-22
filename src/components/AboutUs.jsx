import React from "react";
import Navbar from "./Navbar";

export default function AboutUs() {
  return (
    <div>
      <style jsx>
        {`
          .aboutUs {
            height: 90vh;
            display: flex;
            justify-content: space-around;
            margin-top: 5vh;
          }
        `}
      </style>
      <Navbar />
      <div className="aboutUs">
        <h1>About Us</h1>
      </div>
    </div>
  );
}
