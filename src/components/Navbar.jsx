import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <style jsx>{`
        .navbar {
          background: lightblue;
          height: 10vh;
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .logo {
          height: 10vh;
          padding-left: 20px;
          display: flex;
          align-items: center;
          justify-content: flex-start;
        }

        .rightSide {
          padding-top: 5px;
          height: 10vh;
          display: flex;
          align-items: center;
          justify-content: flex-end;
          padding-right: 20px;
        }

        .child {
          display: inline-block;
          margin: 20px;
        }

        .child p {
          border-bottom: 2px solid transparent;
          padding-bottom: 10px;
          color: black;
        }
        .child p:hover {
          border-bottom: 2px solid black;
          padding-bottom: 10px;
          cursor: pointer;
        }
      `}</style>
      <div className="navbar">
        <div className="logo">asd</div>
        <div className="rightSide">
          <Link to="/">
            <div className="child">
              <p>Home</p>
            </div>
          </Link>
          <Link to="/browse">
            <div className="child">
              <p>Browse</p>
            </div>
          </Link>
          <Link to="/aboutus">
            <div className="child">
              <p>About Us</p>
            </div>
          </Link>
          <Link to="/signin">
            <div className="child">
              <p>Sign in</p>
            </div>
          </Link>
          <Link to="/cart">
            <div className="child">
              <p>Cart</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
