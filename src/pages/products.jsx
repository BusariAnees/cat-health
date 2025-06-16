import Header from "../header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CatPipeline from  '../components/CatPipeline';

import "../assets/css/products.css";


export default function Product() {
  return (
    <>
    <section>
 <div className="nav-section-div-1">
 <p className="nav-section-p-1">Products in development</p>
      <div className="nav-section-div-2">
        <p>Our products aim to extend lifespan and quality of life by reducing incidence or severity of age-related diseases. We’re developing drugs in two categories:</p> 
        <div className="nav-section-div-3">
        <a href="">For senior cats <FontAwesomeIcon className="right-arrow" icon={faArrowRight}/> </a>
        <a href="">For large and giant cats <FontAwesomeIcon className="right-arrow" icon={faArrowRight}/></a>
        </div>

      </div>
 </div>
     <div className="nav-products-img">
     <div className="cat-des-products">
            <p className="cat-name">Pixel</p>
            <p className="cat-age"> Age 12</p>
            </div>
     </div>
     <CatPipeline />
    </section>
     
    
    </>
  );
}
