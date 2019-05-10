import React from "react";
import Navbar from "./Navbar";
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
      `}</style>
      <Navbar />
      <div id="asd">Enter site</div>
    </div>
  );
}
