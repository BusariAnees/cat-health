import Header from "../header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CatPipeline from  '../components/CatPipeline';
import catImage from '../assets/img/cat-6.png';

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

     <section className="pt-[9rem] pb-[7rem] px-[6rem] bg-white min-h-screen flex flex-col justify-center items-center">
      <div className=" w-full text-center">
        <p className="text-lg text-gray-600 mb-2">Extending lifespan by improving metabolic health in</p>
        <h1 className="text-5xl font-bold text-gray-900 mb-6">Senior cats</h1>

        <div className="flex justify-center gap-12 text-sm text-gray-700 mb-10">
          <div>
            <p className="font-semibold">PROJECTED APPROVAL</p>
            <p>2026<span className="text-xs">*</span></p>
          </div>
          <div>
            <p className="font-semibold">DOSAGE FORM</p>
            <p>Daily pill</p>
          </div>
        </div>

        <div className=" bg-beige-light  overflow-hidden shadow-lg w-full"  style={{
    background: 'linear-gradient(to right, rgb(209, 189, 164), rgb(166 129 92))',
  }}>
          <img src={catImage} alt="Dog and human high five" className="w-full object-cover  h-[31rem]" />
        </div>

        <p className="text-xs text-gray-400 mt-2">*FDA approval not guaranteed</p>
      </div>
    </section>

    </section>
     
    
    </>
  );
}
