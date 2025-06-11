import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Sections() {
  return (
    <>
      <section className="body-section">
        <article className="section-1">
          <h2 className="section-body-h1"> OUR APPROACH </h2>
          <p className="section-body-p">
            We’re helping cats like yours live longer and stay healthier as they
            age.
          </p>
          <p className="section-body-p">
            Our products focus on preventive care, addressing the underlying
            causes of a range of age‑associated diseases to delay their onset
            and reduce their impact.
          </p>
        </article>
        <div className="section-1-1">
          <p className="cat-name">Annie</p>
          <p className="cat-age"> Age 6</p>
        </div>
      </section>

      <section className="body-section section-2">
        <div className="section-2-1">
          <div>
            <p className="cat-name">Tuna</p>
            <p className="cat-age"> Age 8</p>
          </div>
        </div>

        <div className="section-2-2">
          <h2 className="section-body-h1 section-body-h2">
            {" "}
            PRODUCTS IN DEVELOPMENT
          </h2>
          <p className="section-body-p-2">
            {" "}
            Extending <br /> healthy lifespan
          </p>

          <div className="section-div-2">
            <article className="article-2-ds">
              <div className="head-article">
                <h3>LOY‑002 </h3>
                <p className="section-2-ds">for senior cats</p>
              </div>
              <ul className="article-2-ul">
                <li>
                  <strong>Target Audience:</strong> Cats aged 11 years and older
                </li>
                <li>
                  <strong>Minimum Weight:</strong> At least 8 lb (3.6 kg)
                </li>
                <li>
                  <strong>Focused on:</strong> Addressing age-related metabolic
                  decline in senior cats
                </li>
                <li>
                  <strong>Projected Approval:</strong> 2026
                </li>
              </ul>
            </article>

            <article className="article-2-ds article-2-2-ds">
              <div className="head-article">
                <h3>LOY‑001, LOY‑003 </h3>
                <p className="section-2-ds "> for large cats</p>
              </div>

              <ul className="article-2-ul">
                <li>
                  <strong>Target Audience:</strong> Cats aged 8 years and older,{" "}
                </li>
                <li>
                  <strong>Minimum Weight:</strong> At least 12 lb (5.4 kg)
                </li>
                <li>
                  <strong>Focused on:</strong> Modulating IGF-1 and growth
                  hormone (GH) overexpression in post-maturity stages
                </li>
                <li>
                  <strong>Projected Approval:</strong> 2027
                </li>
              </ul>
            </article>
          </div>
          <button className="btn-connected ">
            <a className="btn-connected-a" href="">
              {" "}
              Explore our products
            </a>
            <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
          </button>
        </div>
      </section>



      <section className="body-section section-3">
        <div  className="section-4-1">
          <div className="div-section-3 ">
            <div className="image-3-div">
            <p className="cat-name">Sebastian</p>
            <p className="cat-age"> Age 10</p>
            </div>
           <div className="des-3-div">
            <p>STAY - our new clinical study for LOY‑002</p>
            <p>We’ve launched a major new clinical study for LOY‑002, our drug to extend lifespan and maintain quality of life in senior dogs of nearly all sizes. We’re enrolling 1,300 senior dogs at 70 veterinary clinics across the country. See if your dog qualifies to participate.</p>
            <button className="btn-connected ">
          <a className="btn-connected-a" href="">
            {" "}
            Explore our products
          </a>
          <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
        </button>
           </div>

          </div>

  
        </div>

     
      </section>
    </>
  );
}
