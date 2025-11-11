import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ramen from "../assets/ramen-01.jpg";

const locations = [
  {
    name: "16 Charles Street",
    img: "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985825825-W98KHLYXOIUMSPGZBGDW/DSC_3718.jpg?format=750w",
    url: "/16-charles-street",
  },
  {
    name: "The Joyce",
    img: "https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/38694TheJoyce_122024_6462.jpg",
    url: "/the-joyce",
  },
  {
    name: "Dorsia",
    img: "https://framerusercontent.com/images/ijVLbDfM5mjmgGRngmmp3ABo.jpg",
    url: "/dorsia",
  },
  {
    name: "OPA Bali",
    img: "https://lh3.googleusercontent.com/gps-cs-s/AC9h4noTN5Qaj0ajAwRsVbRpDDJeJVkPZ5Oag88JTRhMuzGOaWTBq7ALWzlo9j2DiY_iGCymgVd-ZLQJEn0v6vJkiARwKed0DlpHPBju-L-0R2_Npsn3Q5Nf1rRzAElFNj43GD7Kgevh=s1360-w1360-h1020-rw",
    url: "/opa-bali",
  },
  {
    name: "Ramen Me",
    img: ramen,
    url: "/ramen-me",
  },
];

const GlobalFootprintSection: React.FC = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin">
      <div className="w-11/12 mx-auto px-3 md:px-8 py-10">
        <div>
          <p className="text-[var(--primary-color)] text-xs tracking-widest mt-1 uppercase font-semibold">
            Our Global Footprint
          </p>
        </div>

        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
            From London to the World
          </h2>
        </div>

        {/* 👇 Flexbox hover-expand effect */}
        <div className="flex flex-col md:flex-row gap-4 h-[400px]">
          {locations.map((location, index) => (
            <a
              key={index}
              href={location.url}
              className="relative flex-1 overflow-hidden rounded-sm 
             transition-all duration-700 ease-in-out 
             flex-grow hover:flex-grow-[3]"
              style={{
                backgroundImage: `url(${location.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-start justify-start transition-transform duration-1000 ease-in-out">
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
