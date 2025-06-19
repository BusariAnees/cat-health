import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

const data = [
  { name: "LOY-002", steps: ["done", "done", "pending"], year: "2026" },
  { name: "LOY-001", steps: ["done", "pending", "none"], year: "2027" },
  { name: "LOY-003", steps: ["done", "pending", "none"], year: "2027" },
];

const steps = [
  "Preclinical Studies",
  "Pilot study",
  "Companion cog clinical study",
  "FDA conditional approval*",
];

export default function CatPipeline() {
  return (
    <div className="bg-[#f8f7f2] pt-18 pb-12 px-40 font-sans">
      <h2 className="text-4xl font-bold mb-0 text-left pb-8 !border-b-1 !border-black border-solid ">
        Pipeline overview
      </h2>
      <div className="border-t border-gray-300 ">
        <div className="grid grid-cols-[100px_repeat(4,1fr)] items-center ">
          <div></div>
          {steps.map((s, i) => (
            <div key={i} className="text-sm font-bold text-gray-700 my-10 ">
              {s}
            </div>
          ))}
        </div>

        {data.map((item, idx) => (
          <div
            className="grid grid-cols-[100px_0.1fr_repeat(3,_0.28fr)_60px] items-center mb-8 "
            key={idx}
          >
            <div className="!border !border-black  rounded-[25px] p-[0.45rem] w-[5.5rem] text-[0.8rem] font-semibold ml-[0.8rem]">
              {item.name}{" "}
            </div>
            <div className="h-[1px] flex-1 bg-black m-0"></div>

            {item.steps.map((status, stepIdx) => (
              <div key={stepIdx} className="flex items-center relative">
                { status === "done" ? (
  <div className="w-4 h-4 rounded-full bg-black border-2 border-black flex items-center justify-center text-[10px] text-white">
    <FontAwesomeIcon icon={faCheck} />
  </div>
) : status === "pending" ? (
  <div className="w-4 h-4 rounded-full !border-[1.3px] !border-[rgb(104,163,202)] flex items-center justify-center">
    <div className="w-[0.45rem] h-[0.45rem] bg-[rgb(104,163,202)] rounded-full"></div>
  </div>
) : status === "none" ? (
  <div className="w-4 h-4 rounded-full !border-[1.3px] !border-[rgb(213,212,174)] flex items-center justify-center">

</div>
) : null

}

                {((idx===0 && stepIdx < 2) || (idx > 0 && stepIdx === 0 )) ? (
                  <div className="h-[1px] flex-1 bg-black m-0"></div>
                ) :  <div className="flex flex-1 items-center h-[1px] m-0">
                <div className="w-full !border-t !border-[rgb(213,212,174)] !border-dashed"></div>
              </div>}
              </div>
            ))}
            <div className="text-center text-sm bg-none border-dotted !border-[rgb(213,212,174)]  px-2 py-1 rounded-full !border">
              {item.year}*
            </div>
          </div>
        ))}

        <p className="text-xs text-[#c2c2c2] text-opacity-100 font-medium  text-start mt-[2.5rem]">
          *FDA approval not guaranteed
        </p>
      </div>
    </div>
  );
}
