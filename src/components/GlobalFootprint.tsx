import React from "react";
import img1 from "../assets/hospitalityconcept/PAGE-8-DOHA.jpg";
import img2 from "../assets/hospitalityconcept/Bar-8.jpg";
import img3 from "../assets/hospitalityconcept/PAGE-8-DUBAI.jpg";
import img4 from "../assets/hospitalityconcept/Gaia-marbella_olive-press-1.jpg";
import img5 from "../assets/hospitalityconcept/PAGE-8-MONACO.jpg";
import img6 from "../assets/hospitalityconcept/PAGE-8-RIYADH.jpg";
import img7 from "../assets/hospitalityconcept/PAGE-8-MIAMI.jpg";
import { ArrowRight } from "lucide-react";

const locations = [
  { name: "DOHA", img: img1 },
  { name: "LONDON", img: img2 },
  { name: "DUBAI", img: img3 },
  { name: "MARBELLA", img: img4 },
  { name: "MONACO", img: img5 },
  { name: "RIYADH", img: img6 },
  { name: "MIAMI", img: img7 },
];

const GlobalFootprintSection: React.FC = () => {
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white  font-raleway font-light dark:font-thin">
      <div className="w-11/12 mx-auto  px-3 md:px-8 py-10">
        <div>
          <p className="text-gray-700 dark:text-gray-300 text-xs tracking-widest mt-1 uppercase font-semibold">
            Our Global Footprint
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
            From the UAE to the world
          </h2>
          <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
            <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
              SEE WORLD MAP <ArrowRight size={16} />
            </span>
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
              style={{ backgroundImage: "var(--bg-primary-gradient)" }}
            ></span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {locations.map((location, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-sm ${
                index === 2 ? "md:col-span-2 h-96 md:h-96 lg:h-96" : "h-96"
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
      </div>
    </section>
  );
};

export default GlobalFootprintSection;
