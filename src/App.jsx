import { useState } from "react";
import "./assets/css/App.css";
import "./assets/js/script.js";

function App() {
  return (
    <>
      <section className="header-section">
      <div className="header-logo">Meown</div>
        <header className="header">
           <div className="header-nav-container">
            <nav className="header-nav">
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
        </header>
      </section>
    </>
  );
}

export default App;
