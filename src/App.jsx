import { useState } from "react";
import "./assets/css/App.css";
import "./assets/css/overlay.css"
import "./assets/css/sections.css"
import Overlay from "./overlay";
import Section from './sections';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';





function App() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <div className={`overlay ${isActive ? "overlay--active" : ""}`}>
        <Overlay isActive={isActive} setIsActive={setIsActive} />
      </div>

      <section className="main-section">
        <div className="header-div">
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
          
          </div>
        </header>
          <div
              className={`hamburger ${isActive ? "active" : ""}`}
              onClick={() => setIsActive(!isActive)}
            >
              <span></span>
              <span></span>
            </div>
        </div>
      
        <div className="hero-content">
   <h1 className="hero-heading">More time  <br /> with the cats <br />  we love</h1>

   <button className="btn-connected">
    <a  className="btn-connected-a" href=""> Stay connected</a>
    <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
   </button>
        </div>

<div className="hero-div-footer">

<p className="learn">LEARN MORE</p>
<img src="/arrow-down.svg" alt="" />
<p className="cat-name">Bella</p>
<p className="cat-age"> Age 4</p>
</div>

      </section>
      <section>
   <Section/>
      </section>
    </>
  );
}


export default App;
