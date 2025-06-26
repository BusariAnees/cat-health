import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Image from "../assets/img/cat-13.jpg"

export default function Modals ({showModal, setShowModal}){
    return (
        <>
        {showModal && (
<article className="absolute top-[2rem] right-[6rem] ">
<div className="fixed inset-0 z-50 bg-[#000000a0] bg-opacity-50 flex justify-center items-center">
          <div className="bg-[#f7f5ed] w-full max-w-4xl rounded-3xl overflow-hidden shadow-lg flex flex-col md:flex-row">
            
            {/* Left image */}
            <div className="md:w-1/2 w-full bg-[#ece9da] flex items-center justify-center relative">
              <img
                src={Image}
                alt="Anna the dog"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-2 right-3 text-sm font-semibold">Anna<br />Age 13</div>
            </div>

            {/* Right content */}
            <div className="md:w-1/2 w-full p-8 relative">
              <button
                onClick={() => setShowModal(false)}
                className="absolute top-4 right-4 text-xl text-gray-500 hover:text-black"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>

              <h2 className="text-3xl font-bold text-gray-800 mb-3">Be the first to know</h2>
              <p className="text-gray-600 mb-6">
                Stay informed with early updates on our product launches, clinical trials, and aging science.
              </p>

              {/* Options */}
              <div className="space-y-3 mb-6">
                <button className="w-full text-left border border-gray-300 rounded-xl px-4 py-3 hover:bg-gray-100 focus:outline-none">
                  I&apos;m a veterinary professional
                </button>
                <button className="w-full text-left border border-gray-300 rounded-xl px-4 py-3 hover:bg-gray-100 focus:outline-none">
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
              <button className="w-full bg-[#1c2734] text-white py-3 rounded-full font-semibold hover:bg-[#131c28] transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>
</article>
)}

        </>
    )
}