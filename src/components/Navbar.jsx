import React from "react";

export default function Navbar() {
  return (
    <div>
      <style jsx>{`
        .navbar {
          background: lightblue;
          height: 10vh;
          padding: 10px;
          display: flex;
          align-items: center;
        }
        .rightSide {
        }
        .child {
          display: inline-block;
          margin: 20px;
        }
      `}</style>
      <div className="navbar">
        <div className="rightSide">
          <div className="child">
            <p>Home</p>
          </div>
          <div className="child">
            <p>Browse</p>
          </div>
          <div className="child">
            <p>About Us</p>
          </div>
          <div className="child">
            <p>Cart</p>
          </div>
        </div>
      </div>
    </div>
  );
}
