
import React from "react";

const data = [
  { name: "LOY-002", steps: [true, true, true, false], year: "2026" },
  { name: "LOY-001", steps: [true, false, false, false], year: "2027" },
  { name: "LOY-003", steps: [true, false, false, false], year: "2027" },
];

const steps = [
  "Preclinical Studies",
  "Pilot study",
  "Companion dog clinical study",
  "FDA conditional approval*",
];

export default function CatPipeline() {
  return (
    <div className="bg-[#f8f7f2] pt-18 pb-12 px-40 font-sans">
      <h2 className="text-4xl font-bold mb-0 text-left pb-8 !border-b-1 !border-black border-solid ">Pipeline overview</h2>
      <div className="border-t border-gray-300 ">
        <div className="grid grid-cols-[100px_repeat(4,1fr)_80px] items-center ">
          <div></div>
          {steps.map((s, i) => (
            <div key={i} className="text-sm font-medium text-gray-700 my-6">
              {s}
            </div>
          ))}
        </div>

        {data.map((item, idx) => (
          <div
            className="grid grid-cols-[100px_repeat(4,1fr)_80px] items-center mb-4"
            key={idx}
          >
            <div className="font-semibold">{item.name}</div>
            {item.steps.map((done, stepIdx) => (
              <div key={stepIdx} className="flex items-center relative">
                <div
                  className={`w-4 h-4 rounded-full z-10 border-2 ${done ? "bg-black border-black" : "border-gray-300 bg-white"}`}
                ></div>
                {stepIdx < item.steps.length - 1 && (
                  <div className="h-0.5 flex-1 bg-dotted ml-2"></div>
                )}
              </div>
            ))}
            <div className="text-center text-sm bg-[#f5f2e8] px-2 py-1 rounded-full border border-gray-300">
              {item.year}*
            </div>
          </div>
        ))}

        <p className="text-xs text-gray-500 mt-4">
          *FDA approval not guaranteed
        </p>
      </div>
    </div>
  );
}

  