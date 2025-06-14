import Header from "../header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "../assets/css/products.css";


export default function Clinicals() {
  return (
    <>
    <section>
 <div className="nav-section-div-1">
 <p className="nav-section-p-1 nav-section-2-p-1">Give cats more
healthy years</p>
      <div className="nav-section-div-2">
        <p className="nav-section-div-2-p">Join our STAY study to help dogs <br /> live longer, healthier lives.</p> 
        <button className="btn-connected btn-clinicals">
          <a className="btn-connected-a" href="">
            {" "}
            Join the STAY study
          </a>
          <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
        </button>
      </div>
 </div>
     
      <p></p>
    </section>
     
    
    </>
  );
}