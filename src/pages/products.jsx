import Header from "../header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import CatPipeline from  '../components/CatPipeline';
import catImage from '../assets/img/cat-6.jpg';

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
      <div className=" w-full text-center flex justify-between">
      <article className="text-start">  <p className="text-[1.5rem] text-black leading-8 font-[500] mb-2">Extending lifespan by improving <br /> metabolic health in</p>
        <h1 className="text-[6rem] leading-[5.5rem] tracking-[-0.04em] font-medium text-5xl text-gray-900 mb-6">Senior cats</h1>

        <div className="flex items-start  justify-between text-sm text-gray-700 mb-10">
          <div className=" w-[48%] !border-solid !border-t-[1px] !border-black pt-[14px]">
            <p className="text-xs uppercase tracking-[0.08em] font-semibold">PROJECTED APPROVAL</p>
            <p className="text-lg font-medium">2026<span className="text-xs">*</span></p>
          </div>
          <div className=" w-[48%] !border-solid !border-t-[1px] !border-black pt-[14px]">
            <p className="font-semibold uppercase text-xs tracking-[0.08em]">DOSAGE FORM</p>
            <p>Daily pill</p>
          </div>
         
        </div></article>
        <div className="flex flex-col flex-wrap-reverse">
        <div className="flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold" >LOY-002</div>
        <p className="text-xs text-gray-500  text-start mt-[2.5rem]">
          *FDA approval not guaranteed
        </p>
        </div>
      
</div>
<div className="relative w-full h-[31rem]">
  <img
    src={catImage}
    alt="Dog and human high five"
    className="w-full h-full object-cover"
  />
  <div className="absolute align-end bottom-4 right-5 text-black">
    <p className="cat-name font-bold text-lg">Sebastian</p>
    <p className="cat-age text-sm">Age 10</p>
  </div>
</div>


    </section>

    </section>
     
    
    </>
  );
}
