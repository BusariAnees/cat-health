import { useState } from "react";
import "./assets/css/App.css";
import "./assets/css/overlay.css"
import Overlay from "./overlay";

function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <section className="main-section">
        <header className="header">
          <div className="header-logo">Meown</div>
          <div className="header-nav-container">
            <nav className="header-nav">
              <a href="">Products</a>
              <a href="">Clinical trials</a>
              <a href="">For vets</a>
              <a href="">For cat owners</a>
              <a href="">Blog</a>
            </nav>
            <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </header>
      </section>
      <section className="overlay-section">
      <div className={`overlay ${isActive ? "overlay--active" : ""}`}>
      {   <Overlay 
        isActive = {isActive}
        setIsActive = {setIsActive}
        />}
    </div>
     
      </section>
    </>
  );
}

export default App;
