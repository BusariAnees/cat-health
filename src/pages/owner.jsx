import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/products.css";
import "../assets/css/owner.css";

import Scroll from "../components/word-scroll"



export default function Owner() {
 

  return (
    <>
      <section>
        <div className="nav-section-div-1">
          <p className="nav-section-p-1 nav-section-4-p-1 mt-[3.5rem] ">
            The first longevity drugs for your cat
          </p>
        </div>

        {/* Images with captions */}
        <div
          className="nav-owner-img relative bg-center h-52rem "
          style={{ height: "52rem" }}
        >
          {[{ name: "Lisa", age: 10, position: "top-[2rem] right-[2rem]" }].map(
            (cat, i) => (
              <div
                key={i}
                className={`cat-des-products absolute ${cat.position}`}
              >
                <p className="cat-name">{cat.name}</p>
                <p className="cat-age">Age {cat.age}</p>
              </div>
            )
          )}
        </div>

        <section className="text-start py-[9rem] px-[5rem] bg-[rgb(243_243_231)] flex justify-between">
          {/* Left text block */}
          <div className="w-[40%]">
            <p className="leading-[4rem] text-[4.2rem] font-semibold">
              A pill to give your cat more healthy years
            </p>
          </div>

          {/* Benefits & Requirements */}
          <article className="w-[40%] space-y-[1.5rem]">
            <p className="font-[500] text-sm leading-relaxed">
              LOY-002 is our <strong>senior cat drug</strong>  — a daily pill, prescribed by your
              vet, that targets a core driver of unhealthy aging in cats — and
              our first product planned for market launch.*
              <br />
              <br />
              As your cat gets older, their metabolic health declines,
              increasing their risk of developing other diseases. LOY-002 is
              intended for cats aged 10 or older and weighing at least 14 lb. It
              aims to extend healthy lifespan by targeting age-associated
              metabolic dysfunction — giving your cat more healthy years.
              <br />
              <br />
              In February 2025, our senior cat longevity drug, LOY-002,
              completed its preliminary efficacy package (RXE) — a crucial step
              toward bringing the first FDA-approved longevity drug to cat
              owners and veterinarians in the next year. We anticipate that
              LOY-002 will receive FDA conditional approval* in 2026.
            </p>
            <p className="text-xs text-black text-opacity-100 font-medium  text-start mt-[2rem]">
          *FDA approval not guaranteed
        </p>
        <div className="nav-section-div-2 !w-[100%] mt-[2rem]">
              {" "}
              <div className="nav-section-div-3">
                <a href="#senior">
                  Dive into metabolic dysfunction {" "}
                  <FontAwesomeIcon
                    className="right-arrow"
                    icon={faArrowRight}
                  />{" "}
                </a>
              </div>
            </div>
          </article>
           {/* Images with captions */}
     
        </section>
       <Scroll/>
     
      </section>

    

    </>
  );
}
