import { useState, useEffect } from "react";

import { useLocation } from "react-router-dom";

import "./assets/css/overlay.css";
import "./assets/css/sections.css";
import "./assets/css/footer.css";

import Overlay from "./overlay";
import Section from "./sections";
import Header from "./includes/header";
import Modals from "./components/modals";

import Products from "./pages/products";
import Clinicals from "./pages/clinicals";
import Vets from "./pages/vets";
import Owner from "./pages/owner";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [isActive, setIsActive] = useState(false);
  const location = useLocation();

  const [showModal, setShowModal] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal]);

  return (
    <>
      <div className={`overlay ${isActive ? "overlay--active" : ""}`}>
        <Overlay isActive={isActive} setIsActive={setIsActive} />
      </div>

      {/* ✅ Wrap these in a div ONLY if on home page */}
      {location.pathname === "/" ? (
        <div className="hero-wrapper relative">
          <Header isActive={isActive} setIsActive={setIsActive} />
          <section className="main-section">
            <div className="hero-content">
              <h1 className="hero-heading">
                More time <br /> with the cats <br /> we love
              </h1>
              <button
                className="btn-connected"
                onClick={() => setShowModal(true)}
              >
                <span className="btn-connected-a">Stay connected</span>
                <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
              </button>
      
            </div>

            <div className="hero-div-footer">
              <p className="learn">LEARN MORE</p>
              <img src="/arrow-down.svg" alt="" />
              <p className="cat-name">Bella</p>
              <p className="cat-age">Age 4</p>
            </div>
          </section>

          <section>
            <Section />
          </section>
        </div>
      ) : (
        <>
          {/* ✅ On other pages, just show the Header normally */}
          <Header isActive={isActive} setIsActive={setIsActive} />
        </>
      )}


      {/* Routes are always here */}
      <Routes>
        <Route path="/products" element={<Products />} />
        <Route path="/clinical" element={<Clinicals />} />
        <Route path="/vets" element={<Vets />} />
        <Route path="/owner" element={<Owner />} />
      </Routes>

                 {/* modal components */}
   <Modals showModal={showModal} setShowModal={setShowModal} />
    </>
  );
}

export default App;
