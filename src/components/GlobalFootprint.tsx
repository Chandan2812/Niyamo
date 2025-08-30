import React, { useEffect } from "react";
// import img1 from "../assets/hospitalityconcept/PAGE-8-DOHA.jpg";
// import img2 from "../assets/hospitalityconcept/Bar-8.jpg";
// import img3 from "../assets/hospitalityconcept/PAGE-8-DUBAI.jpg";
// import img4 from "../assets/hospitalityconcept/Gaia-marbella_olive-press-1.jpg";
// import img5 from "../assets/hospitalityconcept/PAGE-8-MONACO.jpg";
// import img6 from "../assets/hospitalityconcept/PAGE-8-RIYADH.jpg";
// import img7 from "../assets/hospitalityconcept/PAGE-8-MIAMI.jpg";
// import { ArrowRight } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const locations = [
  {
    name: "16 Charles Street",
    img: "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985825825-W98KHLYXOIUMSPGZBGDW/DSC_3718.jpg?format=750w",
    url: "/16-charles-street",
  },
  {
    name: "Birayani Kabab Chai (BKC)",
    img: "https://bkclondon.uk/wp-content/uploads/2023/08/DSC00189-2400x1600.jpg",
    url: "/biryani-kebab-chai-(bkc)",
  },
  {
    name: "Coupette",
    img: "https://static.wixstatic.com/media/fe41f9_1b5419bb954a4b0283823e65061f871c~mv2.jpg",
    url: "/coupette",
  },
  {
    name: "24 & 30 Sussex Gardens",
    img: "https://images.oyoroomscdn.com/uploads/hotel_image/39338/large/2d813aefe1471af8.jpeg",
    url: "/24-&-30-sussex-gardens",
  },
  {
    name: "The Joyce Restaurant",
    img: "https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/38694TheJoyce_122024_6462.jpg",
    url: "/the-joyce-restaurant",
  },
  {
    name: "Dorsia",
    img: "https://framerusercontent.com/images/ijVLbDfM5mjmgGRngmmp3ABo.jpg",
    url: "/dorsia",
  },
];

const GlobalFootprintSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);
  return (
    <section className="bg-white dark:bg-black text-black dark:text-white  font-raleway font-light dark:font-thin">
      <div className="w-11/12 mx-auto  px-3 md:px-8 py-10">
        <div>
          <p className="text-[var(--primary-color)] text-xs tracking-widest mt-1 uppercase font-semibold">
            Our Global Footprint
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
            From the London to the World
          </h2>
          {/* <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
            <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
              SEE WORLD MAP <ArrowRight size={16} />
            </span>
            <span
              className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
              style={{ backgroundImage: "var(--bg-primary-gradient)" }}
            ></span>
          </button> */}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.url}
              className={`relative overflow-hidden rounded-sm ${
                index === 2 || index === 3
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

export default GlobalFootprintSection;
