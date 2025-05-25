import { useState } from "react";
import "./assets/css/App.css";
import "./assets/js/script.js";

function App() {
  return (
    <>
      <section className="head-section">
        <head className="head">
          <div className="head-logo">Meown</div>

          <div className="head-nav-container">
            <nav className="head-nav">
              <a href="">Products </a>
              <a href="">Clinical trials</a>
              <a href="">For vets</a>
              <a href="">For cat owners</a>
              <a href="">Blog</a>
            </nav>
            <div className="hamburger" id="hamburger">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </head>
      </section>
    </>
  );
}

export default App;
