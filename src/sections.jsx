import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Footer from "./includes/footer";
import { NavLink } from "react-router-dom";

export default function Sections({setShowModal}) {
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

          <NavLink to="/products" className="btn-connected !m-0 ">
            {" "}
            <p className="btn-connected-a">
              {" "}
              Explore our products
            </p>
           
            <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
          </NavLink>
        </div>
      </section>

      <section className="body-section section-3">
        <div className="section-4-1">
          <div className="div-section-3 ">
            <div className="image-div image-3-div">
              <p className="cat-name">Sebastian</p>
              <p className="cat-age"> Age 10</p>
            </div>
            <div className="des-3-div">
              <p className="des-3-p-1">
                STAY - our new clinical study for LOY‑002
              </p>
              <p className="des-3-p-2">
                We’ve launched a major new clinical study for LOY‑002, our drug
                to extend lifespan and maintain quality of life in senior cats
                of nearly all sizes. We’re enrolling 1,300 senior cats at 70
                veterinary clinics across the country. See if your cat qualifies
                to participate.
              </p>
              <NavLink to="/products" className="btn-connected !m-0 ">
                {" "}

                <p className="btn-connected-a">
              {" "}
              Explore our products
            </p>
                <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
              </NavLink>
            </div>
          </div>
        </div>
      </section>

      <section className="body-section section-4">
        <div className="section-4-div">
          <p className="des-4-p">VETERINARY PROFESSSIONALS</p>
          <p className="des-3-p-1 des-4-p-2">
            Explore what our longevity therapies will mean for your patients and
            your practice.
          </p>

          <NavLink to="/clinical" className="btn-connected !m-0 ">
            {" "}
            <p className="btn-connected-a">
              {" "}
              Learn more
            </p>
            <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
          </NavLink>
        </div>
        <div className="image-div image-4-div">
          <p className="cat-name cat-name-4">Lucy</p>
          <p className="cat-age"> Age 10</p>
        </div>
      </section>

      <Footer setShowModal={setShowModal} />
    </>
  );
}
