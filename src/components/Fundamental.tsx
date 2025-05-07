import React from "react";
import img1 from "../Assets/hospitalityconcept/PAGE-8-DOHA.jpg";
import img2 from "../Assets/hospitalityconcept/Bar-8.jpg";
import img3 from "../Assets/hospitalityconcept/PAGE-8-DUBAI.jpg";
import img4 from "../Assets/hospitalityconcept/Gaia-marbella_olive-press-1.jpg";
import img5 from "../Assets/hospitalityconcept/PAGE-8-MONACO.jpg";
import img6 from "../Assets/hospitalityconcept/PAGE-8-RIYADH.jpg";
import img7 from "../Assets/hospitalityconcept/PAGE-8-MIAMI.jpg";

// Rearranged to place "DUBAI" first
const fundamentals = [
  { name: "DUBAI", img: img3 },
  { name: "DOHA", img: img1 },
  { name: "LONDON", img: img2 },
  { name: "MARBELLA", img: img4 },
  { name: "MONACO", img: img5 },
  { name: "RIYADH", img: img6 },
  { name: "MIAMI", img: img7 },
];

const FundamentalsSection: React.FC = () => {
  return (
    <section className="py-10 px-4 md:px-12 lg:px-24">
      <div className="border-t border-gray-300 mb-4 w-max">
        <p className="text-[10px] text-gray-700 tracking-widest mt-1 uppercase font-semibold">
          FH Expansion
        </p>
      </div>

      <div className="flex justify-between items-center mb-6 flex-wrap gap-4 ">
        <h2 className="text-2xl md:text-5xl pb-5 font-semibold text-[#1A365D]">
          Fundamental Hospitality <br /> expansion plan for the upcoming <br />{" "}
          year
        </h2>
        <button className="flex items-center bg-blue-700 text-white text-[18px] px-4 py-2 uppercase tracking-widest">
          FH Expansion
          <span className="ml-2">→</span>
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
        {fundamentals.map((location, index) => (
          <div
            key={index}
            className={`relative overflow-hidden rounded-sm ${
              index === 0 ? "md:col-span-2 h-96 md:h-96 lg:h-96" : "h-96"
            }`}
            style={{
              backgroundImage: `url(${location.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-start justify-start">
              <h3 className="text-white text-sm font-bold m-4 uppercase">
                {location.name}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FundamentalsSection;
