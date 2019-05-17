import React, { Component } from "react";
import Navbar from "./Navbar";

export default class Browse extends Component {
  render() {
    return (
      <div>
        <style jsx global>
          {`
            html,
            body {
              height: 100%;
              background: lightyellow;
            }
          `}
        </style>
        <style jsx>{`
          .browsePage {
            display: grid;
            grid-template-columns: 15% 1fr;
          }

          .sidebar {
            background: lightgreen;
            height: 100%;
          }

          .content {
            background: lightcoral;
            height: 90vh;
          }
        `}</style>
        <Navbar />
        <div className="browsePage">
          <div className="sidebar">asd</div>
          <div className="content">asd</div>
        </div>
      </div>
    );
  }
}
