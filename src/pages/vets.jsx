import Header from "../includes/header";
import Footer from "../includes/footer";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import Agraph from "../assets/img/aging-graph.webp";

import "../assets/css/products.css";
import "../assets/css/vet.css";

const publications = [
  {
    heading: "Summaries of our scientific publications",
    body: "From the start, Meown has pursued publication in peer-reviewed journals. By publishing our research, we ensure transparency, credibility, and accessibility, enabling others to build upon our work and drive progress in their respective fields. No matter whether our results are positive or negative, we’re committed to sharing our findings.",
    cta: "Read summaries",
  },
  {
    journal: "Journal of Veterinary Internal Medicine",
    date: "May 31, 2025",
    title:
      "Immunosenescence and Inflammaging in Dogs and Cats: A Narrative Review →",
    authors: "McKenzie, B.A. (2025)",
    reference: "J Vet Intern Med, 39: e70159.",
    link: "https://doi.org/10.1111/jvim.70159",
  },
  {
    journal: "scientific reports",
    date: "April 25, 2025",
    title: "Translational immune and metabolic markers of aging in cats →",
    authors: "McMahon, J.E., Graves, J.L., Tovar, A.P. et al.",
    reference: "Sci Rep 15, 14460 (2025).",
    link: "https://doi.org/10.1038/s41598-025-99349-2",
  },
  {
    journal: "scientific reports",
    date: "February 13, 2025",
    title:
      "Changes in insulin, adiponectin and lipid concentrations with age are associated with frailty and reduced lifespan in cats",
    author1:
      "McKenzie, B., Peloquin, M., Graves, J.L. et al. Changes in insulin, adiponectin and lipid concentrations with age are associated with frailty and reduced quality of life in dogs. Sci Rep 15, 5380 (2025).",
  },
  {
    journal: "AVMA",
    date: "April 2024",
    title:
      "Feeding cats a high-fat diet induces metabolic changes similar to natural aging, including dyslipidemia, hyperinsulinemia, and peripheral insulin resistance.",
    author1:
      "McKenzie B, Peloquin M, Tovar A, Graves JL, Ratcliff E, Tucker K, Vo K, Greenwood K, Halioua-Haubold CL, Juarez-Salinas D. Feeding dogs a high-fat diet induces metabolic changes similar to natural aging, including dyslipidemia, hyperinsulinemia, and peripheral insulin resistance. AVMA. 2024 Apr 15. (published online ahead of print 2024)",
  },
  {
    journal: "GeroScience",
    date: "February 2023",
    title:
      "Evaluating instruments for assessing healthspan: a multi-center cross-sectional study on health-related quality of life (HRQL) and frailty in the dog.",
    author1:
      "Chen FL, Ullal TV, Graves JL, Ratcliff ER, Naka A, McKenzie B, Carttar TA, Super KM, Austriaco J, Weber SY, Vaughn J, LaCroix-Fralish ML. Evaluating instruments for assessing healthspan: a multi-center cross-sectional study on health-related quality of life (HRQL) and frailty in the companion dog. GeroScience. 2023 Feb 13.",
  },
  {
    journal: "AVMA",
    date: "June 2022",
    title:
      "The phenotype of aging in the cat: how aging impacts the health and well-being of cats and their caregivers    ",
    author1:
      "McKenzie BA, Chen FL, LaCroix-Fralish ML. The phenotype of aging in the dog: how aging impacts the health and well-being of dogs and their caregivers. AVMA. 2022 Jun 1;260(9):963-70.",
  },
  {
    journal: "AVMA",
    date: "June 2022",
    title:
      "Comparative veterinary geroscience: mechanism of molecular, cellular, and tissue aging in humans, laboratory animal models, and companion dogs and cats",
    author1:
      "McKenzie BA. Comparative veterinary geroscience: mechanism of molecular, cellular, and tissue aging in humans, laboratory animal models, and companion dogs and cats. AJVR. 2022 Jun 1;83(6).",
  },
  {
    journal: "frontiers",
    date: "April 2022",
    title:
      "Fenine Geriatric Syndrome: A Framework for Advancing Research in Veterinary Geroscience",
    author1:
      "McKenzie BA, Chen FL, Gruen ME, Olby NJ. Canine Geriatric Syndrome: A Framework for Advancing Research in Veterinary Geroscience. Front. Vet. Sci. 2022 April 21;9:853743.",
  },
];

export default function Vets({ setShowModal }) {
  return (
    <>
      <section>
        <div className="nav-section-div-1">
          <p className="nav-section-p-1 nav-section-2-p-1" id="vet-p-1">
            New longevity drugs for your canine patients
          </p>
          <div className="nav-section-div-2">
            <p className="nav-section-div-2-p">
              Be the first to know as we release <br /> more details on our
              products in <br /> development.
            </p>

            <button
              className="btn-connected !m-0"
              onClick={() => setShowModal(true)}
            >
              <span className="btn-connected-a">Stay connected</span>
              <FontAwesomeIcon className="awesome-icon" icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Images with captions */}
        <div className="nav-vet-img relative">
          {[
            { name: "Ray", age: 7, position: "top-[2rem] right-[2rem]" },
            {
              name: "Dr.Hunter Cassie",
              vet: "Veterinarian",
              position: "bottom-[2rem] left-[2rem]",
            },
          ].map((cat, i) => (
            <div
              key={i}
              className={`cat-des-products absolute ${cat.position}`}
            >
              <p className="cat-name text-white">{cat.name}</p>
              <p className="cat-age text-white">
                {" "}
                {cat.age ? `Age ${cat.age}` : `${cat.vet}`}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-[rgb(248,248,242)] py-[9rem]">
          <div className="px-[3rem] text-start col-span-full grid w-full max-w-screen-2xl grid-cols-2 gap-x-6 lg:px-xs text-gray-0 sm:grid-cols-6 sm:px-sm md:px-md lg:grid-cols-12 lg:px-lg xl:px-xl 2xl:mx-auto 2xl:px-xl  ">
            <div className=" col-span-full mb-6 text-4xl font-medium md:col-span-2 lg:col-span-3 xl:col-span-2 xl:col-start-3">
              Extending healthy lifespan
            </div>
            <div className="mb-[5rem] text-[0.9rem] sm:text-[1rem]   col-span-full text-paragraph-sm font-medium md:col-start-3 lg:col-span-8 lg:col-start-5 xl:col-span-5 xl:col-start-6">
              <p className="mb-[1.8rem]">
                Aging is the most significant modifiable risk factor for most
                degenerative and chronic diseases in adult dogs. Targeting the
                ways dogs age and decline over time may be one of the most
                effective and practical ways for veterinarians to increase the
                healthy lifespan of their canine patients.
              </p>

              <p>
                {" "}
                At Loyal, our approach is to help dogs live longer and stay
                healthier as they age by targeting the underlying processes that
                lead to age-associated disease and disability. Our drugs aim to
                extend lifespan and quality of life by reducing incidence or
                severity of age-related diseases.
              </p>
            </div>
          </div>
          <div className="overflow-x-auto w-full">
  <div className="min-w-[800px]">  
          <img
            src={Agraph}
            alt="Dog with vet"
            className="w-[60rem] h-[31rem] object-cover sm:h-[50rem] sm:w-[63rem] bg-contain m-auto"
          />
          </div>
          </div>
        </div>

        <div className="px-[1.5rem] py-[6rem] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-start bg-[rgb(238,237,222)] sm:py-[10rem] sm:px-[4rem]">
          {/* Left Column */}
          <div className="w-[100%] sm:w-[17rem]">
            <h1 className=" guide-1 text-[2rem] xl:text-4xl font-[500] mb-6">
              A guide to our
              <br className="hidden sm:block" />
              drugs in <br /> development
            </h1>
            <p className="mb-4 text-[0.9rem] leading-[1.5rem] font-[500]">
              We’re developing the first drugs for FDA approval to extend
              healthy lifespan in cats, with the first expected to receive
              conditional approval in 2026. We currently have three products in
              development to address feline aging.
            </p>
            <p className="text-xs text-[#0a0909] text-opacity-100 font-medium  text-start mt-[1rem] border-b-[1px] border-solid pb-[2rem] ">
              *FDA approval not guaranteed
            </p>

            <div className="nav-section-div-2 !w-[100%] mt-[2rem]">
              {" "}
              <div className="nav-section-div-3">
                <a href="#senior">
                  Download guide{" "}
                  <FontAwesomeIcon
                    className="right-arrow"
                    icon={faArrowRight}
                  />{" "}
                </a>
              </div>
            </div>
          </div>

          {/* Center Column */}
          <div>
            <div className="flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold">
              LOY-002
            </div>
            <h2 className="font-semibold text-xl my-[1.5rem]">
              For senior cats
            </h2>
            <p className="font-[500] text-sm leading-relaxed">
              LOY-002 is intended for cats aged 10 or older and weighing at
              least 14 lb. It aims to extend healthy lifespan by targeting
              age-associated metabolic dysfunction.
              <br />
              <br />
              As cats age, their{" "}
              <span className="font-[500] underline">
                their metabolic health often declines
              </span>
              , leading to chronic conditions and a reduced quality of life. Our
              goal with LOY-002 is to preserve metabolic function, which we
              believe can delay the onset of age-related diseases and support
              better overall health and vitality in senior cats.
              <br />
              <br />
              We’ve launched a double-blinded, placebo-controlled efficacy study
              recruiting 1,300 senior cats in partnership with 70 veterinary
              clinics across the country.{" "}
              <u> Learn more about the STAY study.</u>
            </p>
          </div>

          {/* Right Column */}
          <div>
            <div className="flex gap-4 mb-4">
              <div className="flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold">
                LOY-001
              </div>
              <div className="flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold">
                LOY-003
              </div>
            </div>
            <h2 className="font-semibold text-xl my-[1.5rem]">
              For large cats
            </h2>
            <p className="text-sm leading-relaxed font-[500] ">
              LOY-001 and LOY-003 are intended for adult cats, particularly
              those showing early signs of age-related decline. These treatments
              target biological pathways associated with accelerated aging and
              reduced longevity in certain feline populations.
              <br />
              <br />
              While cats generally enjoy longer lifespans than many other
              animals, some cats experience earlier onset of chronic conditions,
              particularly as they transition into their senior years. Research
              suggests that factors such as metabolic imbalance and hormonal
              shifts may contribute to this decline. With LOY-001 and LOY-003,
              our goal is to support healthier aging by addressing these
              underlying biological changes and helping maintain vitality and
              quality of life as cats grow older.
              <br />
              <br />
              LOY-001 is designed as a long-acting injectable therapy, while
              LOY-003 is a convenient daily oral treatment. Learn more about how
              these therapies are being developed to support healthier aging in
              senior cats
            </p>
          </div>
        </div>

        <section className="bg-[#f5f3e7] min-h-screen px-[5rem] py-16 text-start">
          <h2 className="text-[2.5rem] font-semibold mb-8">Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {publications.map((pub, i) => (
              <div
                key={i}
                className="publi-1 bg-white p-6 shadow-sm rounded-md font-[500]  px-10  lg:w-[22rem] md:w-[17rem] max-w-3xl"
              >
                {pub.heading ? (
                  <>
                    <h3 className="text-lg font-semibold mb-4">
                      {pub.heading}
                    </h3>
                    <p className="leading-[1.3rem] text-sm text-gray-700 mb-4">
                      {pub.body}
                    </p>
                    <div className="nav-section-div-2 !w-[100%] mt-[2rem]">
                      {" "}
                      <div className="nav-section-div-3">
                        <a href="#senior">
                          {pub.cta}
                          <FontAwesomeIcon
                            className="right-arrow"
                            icon={faArrowRight}
                          />{" "}
                        </a>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {pub.journal && (
                      <p className="text-xs font-semibold uppercase text-gray-800 mb-1">
                        {pub.journal}
                      </p>
                    )}
                    {pub.date && (
                      <p className="text-xs text-gray-600 my-5">{pub.date}</p>
                    )}
                    <p className="font-semibold text-[0.95rem] leading-snug mb-2">
                      {pub.title}
                    </p>
                    {pub.authors && (
                      <p className="text-sm text-gray-700">{pub.authors}</p>
                    )}
                    {pub.author1 && (
                      <p className="mt-6 text-[0.6rem] text-gray-700">
                        {pub.author1}
                      </p>
                    )}
                    {pub.reference && (
                      <p className="text-sm text-gray-700">{pub.reference}</p>
                    )}
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        className="text-black t text-sm hover:underline"
                        rel="noopener noreferrer"
                      >
                        <u>{pub.link}</u>
                      </a>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>
        </section>

        <Footer setShowModal={setShowModal} />
      </section>
    </>
  );
}
