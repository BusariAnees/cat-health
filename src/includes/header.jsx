import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function Header({ setShowModal, isActive, setIsActive }) {
  return (
    <>
      <div className="header-div">
        <header className="header">
          <Link to="/" className="header-logo">
            Meown
          </Link>

          <nav className="header-nav">
            <NavLink to="/products">Products</NavLink>
            <NavLink to="/clinical">Clinical &nbsp;trials</NavLink>
            <NavLink to="/vets">For&nbsp;vets</NavLink>
            <NavLink to="/owner">For&nbsp;cat&nbsp;owners</NavLink>
          </nav>
        </header>
        <div
                 className={`hamburger ${isActive ? "active" : ""}`}
                 onClick={() => setIsActive(!isActive)}
               >
                 <span></span>
                 <span></span>
               </div>

        {/* <button className="btn-connected" onClick={() => setIsActive (true)}>
          <span className="btn-connected-a">Stay connected</span>
          <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
        </button> */}
      </div>
    </>
  );
}

export default Header;
