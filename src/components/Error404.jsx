import React from "react";
import { Link } from "react-router-dom";

export default function Error404() {
  return (
    <div>
      <style jsx>{`
        .error {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 90vh;
          width: 100vw;
          text-align: center;
        }
      `}</style>
      <div className="error">
        <div>
          <h1>Content you are looking for is not found.</h1>
          <h2>
            Please go back to <Link to="/">home page</Link>
          </h2>
        </div>
      </div>
    </div>
  );
}
