import Header from "../header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "../assets/css/products.css";


export default function Vets() {
  return (
    <>
    <section>
 <div className="nav-section-div-1">
 <p className="nav-section-p-1 nav-section-2-p-1">New longevity drugs for your canine patients</p>
      <div className="nav-section-div-2">
        <p className="nav-section-div-2-p">Be the first to know as we release <br /> more details on our products in <br /> development.</p> 
        <button className="btn-connected btn-clinicals">
          <a className="btn-connected-a" href="">
            {" "}
            Stay connected
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