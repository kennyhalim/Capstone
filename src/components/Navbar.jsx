import React from "react";

export default function Navbar() {
  return (
    <div>
      <style jsx>{`
        .navbar {
          height: 10vh;
          width: 100vw;
          background: lightblue;
        }
      `}</style>
      <div className="navbar">
        <div className="logo">Test</div>
        <div className="rightSide">
          <div>Home</div>
          <div>Browse</div>
          <div>About Us</div>
          <div>Cart</div>
        </div>
      </div>
    </div>
  );
}
