import { useEffect, useRef, useState } from "react";
import "../assets/css/products.css";
import "../assets/css/owner.css";

const words = ["walks", "climbs", "meows", "purrs"];

export default function Scroll() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (index === words.length) {
      // Wait for animation to finish, then reset instantly
      const timeout = setTimeout(() => {
        containerRef.current.style.transition = "none"; // Remove transition
        setIndex(0); // Reset index
        containerRef.current.style.transform = `translateY(0px)`;

        // Restore transition for next scroll
        setTimeout(() => {
          containerRef.current.style.transition = "transform 0.5s ease-in-out";
        }, 20);
      }, 500); // Wait for slide to finish
      return () => clearTimeout(timeout);
    }
  }, [index]);
  return (
    <>
      <div
        className="nav-owner-1-img relative bg-center h-52rem "
        style={{ height: "52rem" }}
      >
      <div className="absolute left-[6rem] top-[20rem] text-6xl font-bold">
  <div className="flex gap-3">
    <span className="text-white text-[8rem] font-[500] mr-2">More</span>

    {/* Scroll container */}
    <div className="scroll-container">
      <div className="scroll-content">
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
