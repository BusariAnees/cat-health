import { useEffect, useRef, useState } from "react";
import "../assets/css/products.css";
import "../assets/css/owner.css";

const words = ["walks", "climbs", "meows", "purrs"];

export default function Scroll() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500); // adjust for pause
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.7s ease-in-out";
      containerRef.current.style.transform = `translateY(-${index * 160}px)`;
    }
  }, [index]);

  return (
    <>
      <div
        className="nav-owner-1-img relative bg-center h-52rem "
        style={{ height: "52rem" }}
      >
        <div className="absolute left-[7rem] top-[2rem] sm:left-[6rem] sm:top-[20rem] text-6xl font-bold">
          <div className="flex gap-3">
            <span className="text-white text-[8rem] font-[500] mr-2">More</span>

            {/* Scroll container */}
            <div className="scroll-container">
              <div
                className="scroll-content"
                ref={containerRef}
                style={{ transform: `translateY(-${index * 160}px)` }}
              >
                {[...words, ...words].map((word, i) => (
                  <div key={i} className="scroll-item">
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {[{ name: "Cherry", age: 9, position: "top-[2rem] left-[2rem]" }].map(
          (cat, i) => (
            <div
              key={i}
              className={`cat-des-products absolute ${cat.position}`}
            >
              <p className="cat-name text-white">{cat.name}</p>
              <p className="cat-age text-white">Age {cat.age}</p>
            </div>
          )
        )}
      </div>
    </>
  );
}
