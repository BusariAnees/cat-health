import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer({setShowModal}) {
  return (
    <>
      <div className="footer-div">
        <div className="footer-ds">
          <p className="footer-p-1">Be the first to know</p>
          <p className="footer-p-2">
            when we release more details on our products
          </p>
          <button
            className="btn-connected !mx-0 !mt-[1.5rem] !bg-[rgb(41,52,72)]"
            onClick={() => setShowModal(true)}
          >
            <span className="btn-connected-a">Stay connected</span>
            <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
          </button>

        
        </div>
        <div className="footer-ground">
          <p>© 2025 Cellular Longevity, Inc.</p>

          <div className="flex space-x-4 text-white text-2xl">
            <a className="m-0" href="https://www.instagram.com/anees.andrews?igsh=MXZob2V0aDZ3Z2U4Yw==">
              {" "}
              <FontAwesomeIcon className="mx-[0.8rem]" icon={faXTwitter} />
            </a>
            <a className="m-0" href="https://www.instagram.com/anees.andrews?igsh=MXZob2V0aDZ3Z2U4Yw==">
              {" "}
              <FontAwesomeIcon className="mx-[0.8rem]" icon={faInstagram} />
            </a>
            <a className="m-0" href="https://www.instagram.com/anees.andrews?igsh=MXZob2V0aDZ3Z2U4Yw==">
              {" "}
              <FontAwesomeIcon className="mx-[0.8rem]" icon={faFacebookF} />
            </a>
            <a className="m-0" href="https://www.instagram.com/anees.andrews?igsh=MXZob2V0aDZ3Z2U4Yw==">
              {" "}
              <FontAwesomeIcon className="mx-[0.8rem]" icon={faLinkedinIn} />
            </a>
          </div>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  );
}
