import Header from "../header";
import Map from "../components/map.jsx";
import Questions from "../components/Q&A";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faKitMedical } from "@fortawesome/free-solid-svg-icons";
import { faFlask } from "@fortawesome/free-solid-svg-icons";
import { faShieldCat } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faWeightScale } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/products.css";
import "../assets/css/clinical.css";

export default function Clinicals() {
  return (
    <>
      <section>
        <div className="nav-section-div-1">
          <p className="nav-section-p-1 nav-section-2-p-1">
            Give cats more healthy years
          </p>
          <div className="nav-section-div-2">
            <p className="nav-section-div-2-p">
              Join our STAY study to help dogs <br /> live longer, healthier
              lives.
            </p>
            <button className="btn-connected btn-clinicals">
              <a className="btn-connected-a" href="">
                {" "}
                Join the STAY study
              </a>
              <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
            </button>
          </div>
        </div>

        <div className="nav-clinicals-img relative">
          <div className="cat-des-products absolute bottom-[1rem]">
            <p className="cat-name">looney</p>
            <p className="cat-age"> Age 8</p>
          </div>
          <div className="cat-des-products absolute top-[1rem] right-[2rem]">
            <p className="cat-name">lexi</p>
            <p className="cat-age"> Age 10</p>
          </div>
        </div>

        <section className="text-start py-[9rem] px-[5rem] bg-[rgb(243_243_231)] flex justify-between ">
          <div className="w-[30%] p-0">
            <p className=" leading-[3.3rem] text-[3rem] font-semibold">
              Want to join <br />
              our study?
            </p>
            <p className="py-[1.2rem]">
              We’ll be opening enrollment at study sites across the country over
              the coming months. To find a site near you, consult the map below.
            </p>
            <button className="btn-connected btn-clinicals ">
              <a className="btn-connected-a" href="">
                {" "}
                join&nbsp;the&nbsp;STAY&nbsp;study
              </a>
              <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
            </button>
          </div>

          <article className="w-[60%]">
            <div className="bg-white flex  justify-between rounded-[12px] p-8 h-[13.5rem] mb-[1.5rem] ">
              <p className="text-2xl font-lightbold w-[30%]">
                Study <br /> benefits
              </p>
              <ul className="w-[60%] ">
                <div className="flex items-center gap-4 pb-6 mb-4 border-b border-[#00000017]">
                  {" "}
                  <FontAwesomeIcon
                    icon={faKitMedical}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    Receive free vet check-ups
                  </p>
                </div>

                <div className="flex items-center gap-4 pb-6 mt-4 border-b border-[#00000017]">
                  {" "}
                  <FontAwesomeIcon
                    icon={faFlask}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    Associated lab tests at no cost
                  </p>
                </div>
                <div className="flex items-center gap-4 pb-6 mt-4 ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faShieldCat}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    Advance science for cats everywhere
                  </p>
                </div>
              </ul>
            </div>

            <div className="bg-white flex  justify-between rounded-[12px] p-8 h-[17.5rem] ">
              <p className="text-2xl font-lightbold w-[30%]">
                Does your <br />
                dog qualify?
              </p>
              <ul className="w-[60%] ">
                <div className="flex items-center gap-4 pb-6 mb-4 border-b border-[#00000017]">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCat}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    For cats 10 years and older
                  </p>
                </div>

                <div className="flex items-center gap-4 pb-6 mt-4 border-b border-[#00000017]">
                  {" "}
                  <FontAwesomeIcon
                    icon={faWeightScale}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    Cats must weigh 14 lb or more
                  </p>
                </div>
                <div className="flex items-center gap-4 pb-6 mt-4 border-b border-[#00000017] ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faCalendarDays}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    Willing to commit to a multi-year study
                  </p>
                </div>
                <div className="flex items-center gap-4 pb-6 mt-4 ">
                  {" "}
                  <FontAwesomeIcon
                    icon={faLocationDot}
                    className="h-[1.2rem] text-black"
                  />{" "}
                  <p className="font-[500] text-[0.9rem]">
                    Live near a participating study site
                  </p>
                </div>
              </ul>
            </div>
          </article>
        </section>

        <Map />

        <div className="nav-clinicals-img nav-clinicals-9-img relative">
          <div className="cat-des-products absolute bottom-[1rem] right-[2rem]">
            <p className="cat-name">karma</p>
            <p className="cat-age"> Age 10</p>
          </div>
        </div>

        <Questions/>
      </section>
    </>
  );
}
