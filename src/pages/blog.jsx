import Header from "../header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function Blog() {
    return (
      <>
      <section>
   
      
        <p>Products in defvelopment</p>
        <div>
          <p>Our products aim to extend lifespan and quality of life by reducing incidence or severity of age-related diseases. We’re developing drugs in two categories:</p> `
          <a href="">For senior cats <FontAwesomeIcon icon={faArrowRight}/> </a>
          <a href="">For large and giant cats <FontAwesomeIcon icon={faArrowRight}/></a>
        </div>
        <p></p>
      </section>
       
      
      </>
    );
  }
  