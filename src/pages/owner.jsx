
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

import "../assets/css/products.css";
import "../assets/css/owner.css";

export default function Owner() {
  return (
    <>
    <section>
 <div className="nav-section-div-1">
 <p className="nav-section-p-1 nav-section-4-p-1 mt-[3.5rem] ">The first longevity
drugs for your cat</p>
 </div>
     
   {/* Images with captions */}
   <div className="nav-owner-img relative bg-center h-52rem "style={{ height: "52rem" }}>
    {[

      { name: "Lisa", age: 10, position: "top-[2rem] right-[2rem]" },
    ].map((cat, i) => (
      <div key={i} className={`cat-des-products absolute ${cat.position}`}>
        <p className="cat-name">{cat.name}</p>
        <p className="cat-age">Age {cat.age}</p>
      </div>
    ))}
  </div>
    </section>
     
    
    </>
  );
}