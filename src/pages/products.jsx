import React from "react";

import Header from "../includes/header";
import Footer from "../includes/footer";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import CatPipeline from "../components/CatPipeline";
import catImage from "../assets/img/cat-6.jpg";
import cat7Image from "../assets/img/cat-7.jpg";

import "../assets/css/products.css";

const steps = [
  {
    status: "done",
    label: "Preclinical studies",
  },
  {
    status: "done",
    label: "Pilot study",
  },
  {
    status: "in-progress",
    label: "Companion cat clinical study",
  },
  {
    status: "pending",
    label: "FDA conditional approval",
    note: "(Not guaranteed)",
  },
];

const steps2 = [
  {
    status: "done",
    label: "Preclinical studies",
  },
  {
    status: "in-progress",
    label: "Pilot study",
  },
  {
    status: "pending",
    label: "Companion cat clinical study",
  },
  {
    status: "pending",
    label: "FDA conditional approval",
    note: "(Not guaranteed)",
  },
];


export default function Product() {
  return (
    <>
      <section>
        <div className="nav-section-div-1">
          <p className="nav-section-p-1">Products in development</p>
          <div className="nav-section-div-2">
            <p>
              Our products aim to extend lifespan and quality of life by
              reducing incidence or severity of age-related diseases. We’re
              developing drugs in two categories:
            </p>
            <div className="nav-section-div-3">
              <a href="#senior">
                For senior cats{" "}
                <FontAwesomeIcon className="right-arrow" icon={faArrowRight} />{" "}
              </a>
              <a href="#large">
                For large and giant cats{" "}
                <FontAwesomeIcon className="right-arrow" icon={faArrowRight} />
              </a>
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

        <section id="senior" className="pt-[9rem] pb-[7rem] px-[6rem] bg-white min-h-screen flex flex-col justify-center items-center">
          <div className=" w-full text-center flex justify-between">
            <article className="text-start">
              {" "}
              <p className="text-[1.5rem] text-black leading-8 font-[500] mb-2">
                Extending lifespan by improving <br /> metabolic health in
              </p>
              <h1 className="text-[6rem] leading-[5.5rem] tracking-[-0.04em] font-medium text-5xl text-gray-900 mb-6">
                Senior cats
              </h1>
              <div className="flex items-start  justify-between text-sm text-gray-700 mb-10">
                <div className=" w-[48%] !border-solid !border-t-[1px] !border-black pt-[14px]">
                  <p className="text-xs uppercase tracking-[0.08em] font-semibold">
                    PROJECTED APPROVAL
                  </p>
                  <p className="text-lg font-medium">
                    2026<span className="text-xs">*</span>
                  </p>
                </div>
                <div className=" w-[48%] !border-solid !border-t-[1px] !border-black pt-[14px]">
                  <p className="font-semibold uppercase text-xs tracking-[0.08em]">
                    DOSAGE FORM
                  </p>
                  <p>Daily pill</p>
                </div>
              </div>
            </article>
            <div className="flex flex-col flex-wrap-reverse">
              <div className="flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold">
                LOY-002
              </div>
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
              <p className="cat-name font-bold text-lg">Ash</p>
              <p className="cat-age text-sm">Age 10</p>
            </div>
          </div>
        </section>
        <section className="text-start px-6 md:px-16 py-12 max-w-6xl mx-auto">
          <h3 className="mb-[2rem] text-xs uppercase font-semibold tracking-[0.08em] text-gray-600">
            About
          </h3>
          <p className="text-[32px] leading-[48px]  md:text-4xl font-medium text-gray-900 mb-12">
            We’re developing LOY-002 to support healthy aging in <br /> senior
            cats of nearly every size. The product is meant to <br /> target
            metabolic dysfunction, which may extend the <br /> number of healthy
            years your cat lives and support their <br /> quality of life as
            they age.
          </p>

          {/* Timeline */}
          <div
            className="mt-8 hidden gap-y-4 sm:grid"
            style={{
              gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto 1fr",
            }}
          >
            {steps.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Dot */}
                <div className="flex items-center justify-center">
                  {step.status === "done" ? (
                    <div className="w-4 h-4 rounded-full bg-black border-2 border-black flex items-center justify-center text-[10px] text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  ) : step.status === "in-progress" ? (
                    <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-cyan-500">
                      <div className="h-[8px] w-[8px] rounded-full bg-cyan-500"></div>
                    </div>
                  ) : (
                    <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-transparent">
                      <div className="h-[8px] w-[8px] rounded-full border border-gray-400"></div>
                    </div>
                  )}
                </div>

                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div
                    className="flex items-center justify-center"
                    style={{ gridColumnEnd: "span 1" }}
                  >
                    <hr
                      className={`w-full ${
                        step.status === "in-progress" ? "border-dashed" : ""
                      } border-gray-300`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Labels */}
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="col-span-2 max-w-[200px] pr-6 text-base font-bold"
              >
                <div>{step.label}</div>
                {step.note && (
                  <div className="text-[11px] font-medium leading-[16px]">
                    {step.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        <section id="large" className="pt-[9rem] pb-[7rem] px-[6rem] bg-white min-h-screen flex flex-col justify-center items-center">
          <div className=" w-full text-center flex justify-between">
            <article className="text-start">
              {" "}
              <p className="text-[1.5rem] text-black leading-8 font-[500] mb-2">
                Longer, healthier lives for
              </p>
              <h1 className="text-[6rem] leading-[5.5rem] tracking-[-0.04em] font-medium text-5xl text-gray-900 mb-6">
                Large and giant cats
              </h1>
              <div className="flex items-start  justify-between text-sm text-gray-700 mb-10">
                <div className=" w-[48%] !border-solid !border-t-[1px] !border-black pt-[14px]">
                  <p className="text-xs uppercase tracking-[0.08em] font-semibold">
                    PROJECTED APPROVAL
                  </p>
                  <p className="text-lg font-medium">
                    2027<span className="text-xs">*</span>
                  </p>
                </div>
                <div className=" w-[48%] !border-solid !border-t-[1px] !border-black pt-[14px]">
                  <p className="font-semibold uppercase text-xs tracking-[0.08em]">
                    DOSAGE FORM
                  </p>
                  <p>Injectable or daily pill</p>
                </div>
              </div>
            </article>
            <div className="flex flex-col flex-wrap-reverse">
              <div className="flex ">
                {" "}
                <div className="mr-[7px] flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold">
                  LOY-001
                </div>
                <div className="flex items-center justify-center w-[6rem] h-[6rem] border-[1px] rounded-[50px] text-xs font-bold">
                  LOY-003
                </div>
              </div>

              <p className="text-xs text-gray-500  text-start mt-[2.5rem]">
                *FDA approval not guaranteed
              </p>
            </div>
          </div>
          <div className="relative w-full h-[31rem]">
            <img
              src={cat7Image}
              alt="Dog and human high five"
              className="w-full h-full object-cover"
            />
            <div className="absolute align-end bottom-4 right-5 text-black">
              <p className="cat-name font-bold text-lg">kylie</p>
              <p className="cat-age text-sm">Age 7</p>
            </div>
          </div>
        </section>

        <section className=" text-start px-6 md:px-16 py-12 max-w-6xl mx-auto">
          <h3 className="mb-[2rem] text-xs uppercase font-semibold tracking-[0.08em] text-gray-600">
            About
          </h3>
          <p className=" text-[32px] leading-[48px]  md:text-4xl font-medium text-gray-900 mb-14">
            Large and giant breed cats can have as little as half the <br />{" "}
            lifespan of smaller cats. LOY-001 and LOY-003 target <br /> the
            biological mechanisms thought to cause{" "}
            <u>
              this lifespan <br />
              disparity
            </u>
          </p>

          {/* Timeline */}
          <div
            className="mt-8 hidden gap-y-4 sm:grid"
            style={{
              gridTemplateColumns: "auto 1fr auto 1fr auto 1fr auto 1fr",
            }}
          >
            {steps2.map((step, idx) => (
              <React.Fragment key={idx}>
                {/* Dot */}
                <div className="flex items-center justify-center">
                  {step.status === "done" ? (
                    <div className="w-4 h-4 rounded-full bg-black border-2 border-black flex items-center justify-center text-[10px] text-white">
                      <FontAwesomeIcon icon={faCheck} />
                    </div>
                  ) : step.status === "in-progress" ? (
                    <div className="flex h-[16px] w-[16px] items-center justify-center rounded-full border border-cyan-500">
                      <div className="h-[8px] w-[8px] rounded-full bg-cyan-500"></div>
                    </div>
                  ) : (
                    <div className="">
                      <div className="h-[8px] w-[8px] rounded-full border border-gray-400"></div>
                    </div>
                  )}
                </div>

                {/* Connector */}
                {idx < steps.length - 1 && (
                  <div
                    className="flex items-center justify-center"
                    style={{ gridColumnEnd: "span 1" }}
                  >
                    <hr
                      className={`w-full ${
                        step.status === "in-progress" || step.status ===  "pending" ? "border-dashed" : ""
                      } border-gray-300`}
                    />
                  </div>
                )}
              </React.Fragment>
            ))}

            {/* Labels */}
            {steps2.map((step, idx) => (
              <div
                key={idx}
                className="col-span-2 max-w-[200px] pr-6 text-base font-bold"
              >
                <div>{step.label}</div>
                {step.note && (
                  <div className="text-[11px] font-medium leading-[16px]">
                    {step.note}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </section>
      <Footer/>
    </>
  );
}
