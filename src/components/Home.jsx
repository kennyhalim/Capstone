import React from "react";
import Navbar from "./Navbar";
export default function Home() {
  return (
    <div id="home">
      <style jsx>{`
        #asd {
          height: 90vh;
        }
        #test {
          height: 100vh;
        }
      `}</style>
      <Navbar />
      <div id="asd">
        <a href="#test">asdad</a>
      </div>
      <div id="test">
        <a href="#home">asdasdsdasgasd</a>
      </div>
    </div>
  );
}
