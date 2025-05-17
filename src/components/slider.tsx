import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const teamMembers = [
  {
    name: "Ben Thomas",
    role: "Sales Director",
    experience: "Experience: 19 years",
    languages: "Languages: English, Spanish",
    image: "https://fnst.axflare.com/img/team/JPEG/oEsyFzyLSm.jpg",
  },
  {
    name: "John Golotco",
    role: "Sales Director",
    experience: "Experience: 12 years",
    languages: "Languages: English, Russian, Romanian",
    image: "https://fnst.axflare.com/img/team/JPEG/XqjPzqAxew.jpeg",
  },
  {
    name: "Ivan Ruchev",
    role: "Senior Partner",
    experience: "Experience: 10 years",
    languages: "Languages: Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/NQdQHfPaqp.jpg",
  },
  {
    name: "Ivan Ruchev",
    role: "Senior Partner",
    experience: "Experience: 10 years",
    languages: "Languages: Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/NQdQHfPaqp.jpg",
  },
  {
    name: "Ivan Ruchev",
    role: "Senior Partner",
    experience: "Experience: 10 years",
    languages: "Languages: Russian",
    image: "https://fnst.axflare.com/img/team/JPEG/NQdQHfPaqp.jpg",
  },
];

const FindYourPartner: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + teamMembers.length) % teamMembers.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % teamMembers.length);
  };

  const getSlideStyle = (index: number) => {
    const total = teamMembers.length;
    const position = (index - current + total) % total;

    const baseStyle = {
      position: "absolute" as const,
      top: "0",
      transition: "all 0.5s ease-in-out",
      width: "300px",
      height: "460px",
    };

    switch (position) {
      case 0: // Center card
        return {
          ...baseStyle,
          left: "50%",
          transform: "translateX(-50%) scale(1)",
          zIndex: 30,
          opacity: 1,
        };
      case 1: // Right card
        return {
          ...baseStyle,
          left: "75%",
          transform: "translateX(-50%) scale(0.9)",
          zIndex: 20,
          opacity: 0.6,
        };
      case total - 1: // Left card
        return {
          ...baseStyle,
          left: "25%",
          transform: "translateX(-50%) scale(0.9)",
          zIndex: 20,
          opacity: 0.6,
        };
      default: // Hidden cards
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
    <section className="relative custom-gradient-lines">
      <div className="pt-16 px-4 md:px-8 relative bg-white dark:bg-black text-black dark:text-white font-raleway">
        <div className="w-11/12 mx-auto grid lg:grid-cols-2 gap-10 items-start">
          {/* Left Text */}
          <div>
            <div className="mb-2">
              <p
                className="uppercase tracking-widest font-semibold text-xs text-gray-700 dark:text-gray-300"
                data-aos="fade-right"
              >
                About Us
              </p>
            </div>

            <h2
              className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2"
              data-aos="fade-right"
            >
              Hospitality, Reimagined by Fern Hospitality
            </h2>

            <p
              className="text-gray-600 dark:text-gray-400 text-base my-6 max-w-xl"
              data-aos="fade-right"
            >
              Fern Hospitality is a forward-thinking hospitality company
              curating exceptional dining destinations. With a portfolio of
              vibrant restaurants, we blend culinary artistry with unforgettable
              ambiance. Our team delivers refined experiences through passion,
              innovation, and attention to detail — creating places where guests
              feel inspired and at home.
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

          {/* Right Slider Section */}
          <div className="relative w-full flex justify-center items-center h-[500px]">
            {/* Arrows */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-0 z-40 bg-white border border-black px-3 py-2 text-black hover:bg-black hover:text-white transition dark:bg-black dark:border-[var(--primary-color)] dark:text-[var(--primary-color)]"
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-0 z-40 bg-white border border-black px-3 py-2 text-black hover:bg-black hover:text-white transition dark:bg-black dark:border-[var(--primary-color)] dark:text-[var(--primary-color)]"
            >
              →
            </button>

            {/* Slides Container */}
            <div className="relative w-full max-w-[1200px] mx-auto overflow-hidden h-[500px]">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  style={getSlideStyle(index)}
                  className="rounded overflow-hidden shadow-lg transition-all duration-500 ease-in-out"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 bg-black bg-opacity-80 p-4 w-full text-left dark:bg-gray-900 dark:bg-opacity-80">
                    <h3 className="text-lg font-semibold text-white dark:text-gray-100">
                      {member.name}
                    </h3>
                    <p className="text-sm text-gray-300 dark:text-gray-400">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      {member.experience}
                    </p>
                    <p className="text-sm text-gray-400 dark:text-gray-500">
                      {member.languages}
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
