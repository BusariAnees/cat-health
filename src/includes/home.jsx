import "../assets/css/overlay.css";
import "../assets/css/sections.css";
import "../assets/css/footer.css";


import Section from "../sections";
import Header from "../includes/header";



import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";




export default function Home({ setShowModal, isActive, setIsActive }) {
  return (
    <div className="hero-wrapper relative">
    
    {/* //first-page-view */}
      <section className="main-section">
      <Header isActive={isActive} setIsActive={setIsActive} />
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
        <Section setShowModal={setShowModal} />
      </section>
    </div>
  );
}