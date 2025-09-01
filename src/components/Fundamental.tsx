import React, { useEffect } from "react";
// import img1 from "../assets/hospitalityconcept/PAGE-8-DOHA.jpg";
import img2 from "../assets/hospitalityconcept/Bar-8.jpg";
// import img3 from "../assets/hospitalityconcept/PAGE-8-DUBAI.jpg";
// import img4 from "../assets/hospitalityconcept/Gaia-marbella_olive-press-1.jpg";
// import img5 from "../assets/hospitalityconcept/PAGE-8-MONACO.jpg";
// import img6 from "../assets/hospitalityconcept/PAGE-8-RIYADH.jpg";
// import img7 from "../assets/hospitalityconcept/PAGE-8-MIAMI.jpg";
// import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Rearranged to place "DUBAI" first
const fundamentals = [
  {
    name: "OPA - Bali",
    img: "https://res.cloudinary.com/dqrlkbsdq/image/upload/v1756358588/WhatsApp_Image_2025-08-25_at_16.54.17_da07e5b6_ob96oi.jpg",
    url: "opa-bali",
  },

  {
    name: "Bagatelle - Dubai, Singapore & Mykonos",
    img: "https://bagatelle.com/app/uploads/2021/01/Design-sans-titre-2.png",
    url: "bagatelle",
  },
  {
    name: "Ramen Me - Lisbon",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/e3/ed/5f/our-kumamoto-ramen-is.jpg?w=800&h=800&s=1",
    url: "ramen-me",
  },
  {
    name: "Thamel - Portugal ",
    img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1b/67/4e/2e/o-nossos-deliciosos-momode3man.jpg?w=1100&h=600&s=1",
    url: "thamel",
  },
  {
    name: "Dorsia - New York",
    img: "https://framerusercontent.com/images/3mGdPFh187MyIIHpADs5nkHbuak.jpg",
    url: "dorsia",
  },
  { name: "16 Charles Street - London", img: img2, url: "16-charles-street" },
];

const FundamentalsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white  font-raleway font-light dark:font-thin">
      <div className="w-11/12 mx-auto  px-3 md:px-8 py-16">
        <p className="text-[var(--primary-color)] text-xs tracking-widest mt-1 uppercase font-semibold">
          Pipeline
        </p>
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4 ">
          <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
            Redefining New Heights
          </h2>
          {/* <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
            <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
              NC Capital <ArrowRight size={16} />
            </span>
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
              style={{ backgroundImage: "var(--bg-primary-gradient)" }}
            ></span>
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {fundamentals.map((location, index) => (
            <a
              key={index}
              href={location.url}
              className={`relative overflow-hidden rounded-sm ${
                index === 0 || index === 5
                  ? "md:col-span-2 h-96 md:h-96 lg:h-96"
                  : "h-96"
              }`}
              style={{
                backgroundImage: `url(${location.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              data-aos="zoom-in"
            >
              <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-30 flex items-start justify-start">
                <h3 className="text-white text-sm font-bold m-4 uppercase">
                  {location.name}
                </h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FundamentalsSection;
