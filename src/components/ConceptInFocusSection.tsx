import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import ramen from "../assets/ramen.jpg";
import opa from "../assets/opa bali.jpg";

const slides = [
  {
    title: "16 Charles Street",
    description1:
      "During 2021, the team began developing its plans to restore 16 Charles Street to its former glory and bring it into public use for everyone to enjoy. The new restaurant will be a discreet fine-dining experience committed to exceptional quality and the highest standards of service. Last year, L16 CS Operations Limited, part of Loulou Groupe, successfully applied for a Certificate of Lawfulness for the use of the building as a restaurant (Use Class E) and a Premises Licence. With the planning use and premises licence now in place, the team has recently submitted another application to Westminster City Council for Planning and Listed Building Consents.",

    image:
      "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615985825825-W98KHLYXOIUMSPGZBGDW/DSC_3718.jpg?format=750w",

    link: "/16-charles-street",
  },

  {
    title: "The Joyce Restaurant",
    description1:
      "An intimate, 45-seat speakeasy on Miami Beach’s Española Way by Alinea alum James Taylor, blending refined American cuisine with emerald-green interiors, a rotating gallery of blue-chip art, and collectible design furniture for a uniquely immersive culinary and cultural experience.",

    image:
      "https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/dZCWFGjwT0ehKAEc9h4e_TheJoyce_112024_4005.jpg",
    link: "/the-joyce-restaurant",
  },
  {
    title: "Dorsia",
    description1:
      "Dorsia is a members-only dining network offering guaranteed access to sought-after tables in the world’s most vibrant culinary destinations, with privileged entry to exclusive events, seasonal pop-ups, and a curated social diary.",

    image:
      "https://framerusercontent.com/images/g4sS7ZaoyqeGrz7RPt4j395kkQ.jpg?scale-down-to=2048",
    link: "/dorsia",
  },
  {
    title: "OPA Bali",
    description1:
      "OPA Bali is a high-energy Greek dining and entertainment concept bringing Dubai’s proven “dinner-to-party” experience to one of the world’s top tourism destinations. Positioned as Bali’s first major player in the modern Greek category, OPA combines theatrical dining, premium price points, and nightlife appeal to capture demand from global travelers seeking Instagram-worthy experiences. Located in Seminyak-Petitenget among luxury hotels and nightlife hotspots, the venue benefits from low fixed costs, strong CapEx efficiency, and massive tourist inflows from Australia, Europe, and the Middle East. With average checks of USD 85–120 and a target of 300–400 covers per night, OPA Bali is designed for fast ramp-up, high yields, and 30–35% EBITDA margins, with break-even expected in under a year.",

    image: opa,
    link: "/opa-bali",
  },
  {
    title: "Ramen Me",
    description1:
      "Ramen Me is a high-margin, delivery-optimized food concept designed for fast-casual and cloud kitchen scalability. With a tight, craveable menu and low startup costs, it delivers strong EBITDA margins and rapid fit-outs, making it ideal for franchising and multi-unit rollouts. Positioned at the intersection of affordability, premium quality, and social media appeal, Ramen Me taps into the explosive global demand for Asian comfort food, particularly among Gen Z and millennial consumers. Backed by Fern’s hospitality expertise, it combines smart menu engineering, influencer-driven marketing, and scalable systems to create a brand built for growth.",

    image: ramen,
    link: "/ramen-me",
  },
];

const ConceptInFocusSection = () => {
  const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % slides.length);
  //   }, 5000); // 5 sec per slide
  //   return () => clearInterval(interval);
  // }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const currentSlide = slides[index];

  return (
    <section className="relative bg-white dark:bg-black text-black dark:text-white font-raleway font-light dark:font-thin overflow-hidden">
      <div className=" relative w-11/12 mx-auto px-3 md:px-8 py-10">
        {/* Heading */}
        <div className="mb-4 flex flex-col md:flex-row md:items-start md:justify-between gap-6">
          <div className="flex-1">
            <p className="uppercase tracking-widest font-semibold mt-2 text-xs text-[var(--primary-color)]">
              Concept in focus
            </p>
            <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
              Elevating the Essence of Lifestyle
            </h2>
          </div>
        </div>

        {/* <p className="text-gray-700 dark:text-gray-300 max-w-xl mb-6">
          Our creative, yet intricate approach leads to elevated experiences. We
          develop premium dining concepts that showcase the quality and
          progressive nature of the region.
        </p> */}

        {/* Fixed Box with Changing Content */}
        <div className="relative flex flex-col md:flex-row bg-white dark:bg-black overflow-hidden rounded-2xl shadow-lg">
          {/* Image Section */}
          <div className="md:w-1/2 w-full relative h-[500px] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)] ">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentSlide.image + index}
                src={currentSlide.image}
                alt={currentSlide.title}
                className="absolute inset-0 w-full h-full object-cover"
                initial={{ opacity: 0, scale: 1.1 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
              />
            </AnimatePresence>
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 w-full bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  p-6 md:p-12 flex flex-col justify-center relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide.title + index}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -40 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-2xl md:text-4xl font-semibold text-white dark:text-[var(--primary-color)]  mb-4">
                  {currentSlide.title}
                </h3>
                <p className="text-gray-200 dark:text-gray-400 mb-4 text-justify font-serif">
                  {currentSlide.description1}
                </p>
                <a href={currentSlide.link}>
                  <button className="relative group flex items-center gap-2 text-white dark:text-[var(--primary-color)] dark:text-white border dark:border-[var(--primary-color)]  text-[12px] px-6 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
                    <span className="z-10 relative flex items-center gap-2 dark:text-[var(--primary-color)] group-hover:text-white transition-colors duration-300 font-light">
                      Know More <ArrowRight size={16} />
                    </span>
                    <span
                      className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                      style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                    ></span>
                  </button>
                </a>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute -left-7 top-1/2 -translate-y-1/2 text-[var(--primary-color)] bg-gray-300 hover:bg-[var(--primary-color)] hover:text-white p-2 rounded-full"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute -right-7 top-1/2 -translate-y-1/2 text-[var(--primary-color)] bg-gray-300 hover:bg-[var(--primary-color)] hover:text-white p-2 rounded-full"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default ConceptInFocusSection;
