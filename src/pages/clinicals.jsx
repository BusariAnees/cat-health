import Header from "../includes/header";
import Map from "../components/map.jsx";
import Questions from "../components/Q&A";
import Footer from "../includes/footer";

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
       {/* Header Content */}
  <div className="nav-section-div-1">
    <p className="nav-section-p-1 nav-section-2-p-1">Give cats more healthy years</p>
    <div className="nav-section-div-2">
      <p className="nav-section-div-2-p">
        Join our STAY study to help dogs <br /> live longer, healthier lives.
      </p>
      <button className="btn-connected btn-clinicals">
        <a className="btn-connected-a" href="">Join the STAY study</a>
        <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
      </button>
    </div>
  </div>

  {/* Images with captions */}
  <div className="nav-clinicals-img relative">
    {[
      { name: "looney", age: 8, position: "bottom-[1rem] left-[1rem]" },
      { name: "lexi", age: 10, position: "top-[2rem] right-[2rem]" },
    ].map((cat, i) => (
      <div key={i} className={`cat-des-products absolute ${cat.position}`}>
        <p className="cat-name">{cat.name}</p>
        <p className="cat-age">Age {cat.age}</p>
      </div>
    ))}
  </div>

  {/* Study Info Section */}
  <section className="text-start py-[9rem] px-[5rem] bg-[rgb(243_243_231)] flex justify-between">
    {/* Left text block */}
    <div className="w-[30%]">
      <p className="leading-[3.3rem] text-[3rem] font-semibold">
        Want to join <br /> our study?
      </p>
      <p className="py-[1.2rem]">
        Enrollment opens soon across the country. Use the map below to find a site near you.
      </p>
      <button className="btn-connected btn-clinicals">
        <a className="btn-connected-a" href="">join&nbsp;the&nbsp;STAY&nbsp;study</a>
        <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
      </button>
    </div>

    {/* Benefits & Requirements */}
    <article className="w-[60%] space-y-[1.5rem]">
      {[
        {
          title: "Study benefits",
          items: [
            { icon: faKitMedical, text: "Receive free vet check-ups" },
            { icon: faFlask, text: "Associated lab tests at no cost" },
            { icon: faShieldCat, text: "Advance science for cats everywhere" },
          ],
        },
        {
          title: "Does your dog qualify?",
          items: [
            { icon: faCat, text: "For cats 10 years and older" },
            { icon: faWeightScale, text: "Cats must weigh 14 lb or more" },
            { icon: faCalendarDays, text: "Willing to commit to a multi-year study" },
            { icon: faLocationDot, text: "Live near a participating study site" },
          ],
        },
      ].map((section, i) => (
        <div key={i} className="bg-white flex justify-between rounded-[12px] p-8">
          <p className="text-2xl font-semibold w-[30%] whitespace-pre-line">{section.title}</p>
          <ul className="w-[60%] space-y-4">
            {section.items.map((item, j) => (
              <li key={j} className="flex items-center gap-4 border-b border-[#00000017] pb-4 last:border-none">
                <FontAwesomeIcon icon={item.icon} className="h-[1.2rem] text-black" />
                <p className="font-[500] text-[0.9rem]">{item.text}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </article>
  </section>

        <Map />

        <div className="nav-clinicals-img nav-clinicals-9-img relative">
          <div className="cat-des-products absolute bottom-[2rem] left-[2rem]">
            <p className="cat-name text-white">karma</p>
            <p className="cat-age text-white"> Age 10</p>
          </div>
        </div>

        <Questions/>
        <Footer/>
      </section>
    </>
  );
}
