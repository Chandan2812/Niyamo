import { ArrowRight } from "lucide-react";
import React, { useState } from "react";
import img1 from "../assets/team/11.jpg";
import img2 from "../assets/team/12.jpg";
import img3 from "../assets/team/13.jpg";
import img4 from "../assets/team/14.jpg";
import img5 from "../assets/team/15.jpg";
import img6 from "../assets/team/16.jpg";

const teamMembers = [
  { name: "Mark Lotenburg", role: "Founder and CEO, DORSIA", image: img5 },
  { name: "Akshat Tiberwala", role: "MD", image: img2 },
  { name: "Uday Singh", role: "CEO", image: img1 },
  { name: "Bartoélémy Lemoine", role: "Head of Operations", image: img6 },
  { name: "Alex Cordoba", role: "CEO, Savaya", image: img3 },
  {
    name: "Zachary Cefaratti",
    role: "Founder & CEO, Dalma Capital",
    image: img4,
  },
];

const FindYourPartner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () =>
    setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);

  const handleNext = () =>
    setCurrent((prev) => (prev + 1) % teamMembers.length);

  const getSlideStyle = (index: number) => {
    const total = teamMembers.length;
    const position = (index - current + total) % total;

    const baseStyle = {
      position: "absolute" as const,
      top: "0",
      transition: "all 0.5s ease-in-out",
      width: "300px", // bigger width
      height: "450px", // taller box
      borderRadius: "0rem",
      overflow: "hidden",
    };

    switch (position) {
      case 0: // Center
        return {
          ...baseStyle,
          left: "50%",
          transform: "translateX(-50%) scale(1)",
          zIndex: 30,
          opacity: 1,
        };
      case 1: // Right
        return {
          ...baseStyle,
          left: "75%",
          transform: "translateX(-50%) scale(0.9)",
          zIndex: 20,
          opacity: 0.6,
        };
      case total - 1: // Left
        return {
          ...baseStyle,
          left: "25%",
          transform: "translateX(-50%) scale(0.9)",
          zIndex: 20,
          opacity: 0.6,
        };
      default: // Hidden
        return {
          ...baseStyle,
          left: "50%",
          transform: "translateX(-50%) scale(0.8)",
          zIndex: 10,
          opacity: 0,
        };
    }
  };

  return (
    <section className="relative custom-gradient-lines ">
      <div className="pt-24 px-4 md:px-8 relative bg-white dark:bg-black text-black dark:text-white font-raleway ">
        <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div>
            <p
              className="uppercase tracking-widest font-semibold text-xs text-[var(--primary-color)]"
              data-aos="fade-right"
            >
              About Us
            </p>
            <h2
              className="text-2xl md:text-4xl font-semibold mt-2"
              data-aos="fade-right"
            >
              Hospitality, Reimagined
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 text-base my-6 max-w-xl text-justify font-serif mb-20"
              data-aos="fade-right"
            >
              We are a forward-thinking hospitality company curating exceptional
              dining destinations. With a portfolio of vibrant restaurants, we
              blend culinary artistry with unforgettable ambiance. Our team
              delivers refined experiences through passion, innovation, and
              attention to detail, creating places where guests feel inspired
              and at home.
            </p>

            <a href="/contact">
              <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
                <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                  Contact Us <ArrowRight size={16} />
                </span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                ></span>
              </button>
            </a>
          </div>

          {/* Right Slider */}
          <div className="relative w-full flex justify-center items-center h-[400px]">
            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-0 z-40 bg-white border border-black px-3 py-2 text-black hover:bg-[var(--primary-color)] hover:text-white transition dark:bg-black dark:border-[var(--primary-color)] dark:text-[var(--primary-color)]"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-0 z-40 bg-white border border-black px-3 py-2 text-black hover:bg-[var(--primary-color)] hover:text-white transition dark:bg-black dark:border-[var(--primary-color)] dark:text-[var(--primary-color)]"
            >
              →
            </button>

            {/* Slides */}
            {/* Slides */}
            <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden h-[400px]">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  style={getSlideStyle(index)}
                  className="flex flex-col items-center justify-start shadow-lg transition-all duration-500 ease-in-out text-center bg-white dark:bg-[var(--secondary-color)]"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-[300px] object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-black dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {member.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FindYourPartner;
