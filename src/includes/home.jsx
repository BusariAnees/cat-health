import "../assets/css/overlay.css";
import "../assets/css/sections.css";
import "../assets/css/footer.css";


import Section from "../sections";
import Header from "../includes/header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function Home({ setShowModal, isActive, setIsActive }) {
  return (
    <div className="relative">
      <Header isActive={isActive} setIsActive={setIsActive} />

      {/* Hero Section */}
      <section className="flex flex-col justify-between h-screen px-6 py-12 md:px-16 md:py-20 bg-gray-100">
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight md:leading-[1.2] text-gray-900 mb-8">
            More time <br /> with the cats <br /> we love
          </h1>

          <button
            onClick={() => setShowModal(true)}
            className="inline-flex items-center space-x-3 bg-black text-white px-6 py-3 md:px-8 md:py-4 text-base md:text-lg rounded-full hover:bg-gray-800 transition"
          >
            <span>Stay connected</span>
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>

        {/* Footer info */}
        <div className="flex flex-col items-center mt-12 md:mt-20 text-gray-700">
          <p className="text-sm md:text-base tracking-wide mb-1">LEARN MORE</p>
          <img src="/arrow-down.svg" alt="arrow down" className="w-4 h-4 md:w-6 md:h-6 mb-2" />
          <p className="text-lg font-semibold">Bella</p>
          <p className="text-sm text-gray-500">Age 4</p>
        </div>
      </section>

      {/* Other Section */}
      <section>
        <Section setShowModal={setShowModal} />
      </section>
    </div>
  );
}
