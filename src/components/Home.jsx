import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div id="home">
      <style jsx>{`
        #asd {
          height: 90vh;
          display: flex;
          justify-content: space-around;
          align-items: center;
        }

        .shop {
          height: 60px;
          width: 140px;
          background: lightcoral;
          border-radius: 5px;
          font-size: 20px;
        }
      `}</style>
      <Navbar />
      <div id="asd">
        <Link to="/browse">
          <button className="shop">Shop Now!</button>
        </Link>
      </div>
    </div>
  );
}
