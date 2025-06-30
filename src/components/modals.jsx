import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/img/cat-13.jpg";

export default function Modals({ showModal, setShowModal }) {
  const [selectOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  return (
    <>
    <div
   className={`fixed bottom-0 left-0 right-0 h-screen bg-[#00000027] px-16 py-9 transition-all duration-500 ease-in-out z-[1100] transform ${
    showModal
      ? "translate-y-0 opacity-100 pointer-events-auto"
      : "translate-y-full opacity-0 pointer-events-none"
  }`}
>
{showModal && (
        <article className="absolute top-[2rem] right-[6rem] ">
          <div className="fixed inset-0 z-50 bg-[#000000a0] bg-opacity-50 flex justify-center items-center">
            <div className="text-start w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
              {/* Left image */}
              <div className="hidden md:flex items-center justify-center relative md:w-1/2">
                <img
                  src={Image}
                  alt="Anna the cat"
                  className=" w-full h-full object-cover"
                />
                <div className="absolute text-white bottom-[2rem] right-[2rem] text-sm font-semibold">
                  Anna
                  <br />
                  Age 7
                </div>
              </div>

              {/* Right content */}
              <div className="rounded-t-[1rem] absolute bottom-0 h-[35rem] md:w-1/2 sm:w-full p-8 b bg-[#f7f5ed] sm:relative sm:rounded-tl-none ">
                <button
                  onClick={() => setShowModal(false)}
                  className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
                >
                  <FontAwesomeIcon icon={faXmark} />
                </button>

                <h2 className="font-medium pt-8 text-[2.5rem] sm:text-3xl sm:font-bold text-gray-800 mb-3">
                  Be the first to know
                </h2>
                <p className="text-gray-600 mb-6">
                  Stay informed with early updates on our product launches,
                  clinical trials, and aging science.
                </p>

                {/* Options */}
                <div className="space-y-3 mb-6">
                  <button
                    onClick={() => setSelectedOption("vet")}
                    className={`w-full text-left border rounded-xl px-4 py-3 focus:outline-none transition 
      ${
        selectOption === "vet"
          ? "bg-gray-200 border-black font-semibold"
          : "border-gray-300 hover:bg-gray-100"
      }`}
                  >
                    I&apos;m a veterinary professional
                  </button>

                  <button
                    onClick={() => setSelectedOption("owner")}
                    className={`w-full text-left border rounded-xl px-4 py-3 focus:outline-none transition 
      ${
        selectOption === "owner"
          ? "bg-gray-200 border-black font-semibold"
          : "border-gray-300 hover:bg-gray-100"
      }`}
                  >
                    I&apos;m a cat owner
                  </button>
                </div>

                {/* Email input */}
                <div className="mb-4 relative">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="email"
                    placeholder="Email*"
                    className="pl-12 pr-4 py-3 w-full border border-gray-300 rounded-full focus:outline-none focus:ring focus:ring-gray-300"
                  />
                </div>

                {/* Subscribe button */}

                <button
                  onClick={() => {
                    navigate("/");
                    setShowModal(false);
                  }}
                  className="w-full bg-[#1c2734] text-white py-3 rounded-full font-semibold hover:bg-[#131c28] transition"
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </article>
       
      )}

</div>
    
    </>
  );
}
