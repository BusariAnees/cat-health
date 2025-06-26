import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "../assets/css/products.css";
import "../assets/css/owner.css";
import Footer from "../includes/footer";

import Scroll from "../components/word-scroll";

const QA = [
  {
    header: "What is a “longevity drug”?",
    body: [
      "A “longevity drug” is a new concept. Currently, medicines on the market target disease after symptoms have already appeared. Our approach is preventive — we aim to address the underlying causes of disease before they even start to appear.    ",
      "For example, when a dog gets old, they may be diagnosed with arthritis. We call this the binary, 0 to 1, approach. The reality is, the dog’s health was likely already declining before the point that the disease started to show and present itself as arthritis. This is the aim of a “longevity drug”: to target the cause of the diseases before they get severe enough to diagnose.",
    ],
  },
  {
    header: "What safety information can you share?",
    body: [
      "We gather a large amount of safety data throughout numerous studies. We believe strongly that if our product is unsafe, it shouldn’t go to market.  ",
      "Throughout the approval process, all safety data is submitted to the FDA for review, which has supported continued development of our product. We’ll be able to share this data as we get closer to launch, and we’ll disclose any side effects seen in any of our studies that are associated with our drugs.",
      "See our safety section for more information.",
    ],
  },
  {
    header:
      "If dogs are living longer, are you just extending their number of frail days towards the end of life?",
    body: [
      "Quality of life as a dog ages is just as important as the amount of time they have. Our goal is to increase the amount of healthy years your dog lives.",
    ],
  },

  {
    header:
      "What’s the difference between a supplement and an FDA-approved drug?",
    body: [
      "Supplements are not held to the same standard of rigorous safety and effectiveness screening, independent analysis, and regulation as drugs approved by the FDA.",
      "Unlike drugs, supplements are often not monitored and their manufacturers are not required to run studies to show that their products work. If they do run safety studies, the research may not be independently verified.",
      "On the FDA website, they write “The benefit of the FDA’s drug approval process is the assurance that an approved animal drug is safe, effective, and high-quality.",
    ],
  },

  {
    header: "What if my dog doesn’t qualify for the drug?",
    body: [
      "We expect to support the following populations with our drugs:",
      "When we designed our four-year clinical study for LOY-002 (which is already longer than typical), we chose to target 10+ year dogs to balance comprehensive research with speed. If we included younger dogs in the study, we would have had to run the study for longer than four years to show lifespan extension, delaying the full approval for more years. We hope to demonstrate our drugs' efficacy on younger dogs in additional studies to expand eligibility",
    ],
  },
];

export default function Owner({setShowModal}) {
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
              LOY-002 is our <strong>senior cat drug</strong> — a daily pill,
              prescribed by your vet, that targets a core driver of unhealthy
              aging in cats — and our first product planned for market launch.*
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
                  Dive into metabolic dysfunction{" "}
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
        <Scroll />

        <section className="text-start py-[9rem] px-[5rem] bg-[rgb(238,237,221)] ">
          <h2 className="text-4xl font-bold mb-12">Q&amp;A</h2>

          <div className="grid grid-cols-2 gap-16 ">
            {QA.map((text, i) => (
              <div>
                {/* Question 1 */}
                <div className="border-t border-black  pt-12 w-[30rem]">
                  <h3 className="text-lg font-semibold mb-4 ">{text.header}</h3>
                  <p className="mb-4 font-[500] text-sm leading-relaxed">
                    {text.body[0]}
                  </p>
                  <p className=" mb-4 font-[500] text-sm leading-relaxed">
                    {text.body[1]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer  setShowModal={setShowModal}/>
      </section>
    </>
  );
}
