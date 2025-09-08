import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets/hero.svg";
import image2 from "../assets/hero2.svg";
import image3 from "../assets/hero3.svg";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: image1,
    title: "Experience Luxury, Redefined",
    description:
      "Fern Hospitality pioneers excellence in hospitality investments across iconic destinations.",
    buttonText: "Contact Us",
  },
  {
    image: image2,
    title: "Where Vision Meets Destination",
    description:
      "We partner with world-class brands to create timeless experiences in hospitality.",
    buttonText: "Contact Us",
  },
  {
    image: image3,
    title: "Crafting Tomorrow’s Landmarks",
    description:
      "Join Fern Hospitality in building extraordinary spaces that inspire and endure.",
    buttonText: "Contact Us",
  },
];

const Hero = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[100vh] overflow-hidden font-raleway">
      <AnimatePresence initial={false}>
        <motion.img
          key={slides[index].image}
          src={slides[index].image}
          alt={slides[index].title}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20 dark:bg-black/50 flex items-center justify-center px-4">
        <motion.div
          key={slides[index].title}
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
          className="text-center text-white max-w-3xl"
        >
          <h1 className="text-3xl md:text-5xl mb-3 leading-tight font-thin">
            {slides[index].title}
          </h1>
          <p className="text-base md:text-lg mb-6">
            {slides[index].description}
          </p>
        </motion.div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--primary-color)] bg-white/80 hover:bg-[var(--primary-color)] hover:text-white p-3 rounded-full shadow-lg transition"
      >
        <ChevronLeft size={28} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--primary-color)] bg-white/80 hover:bg-[var(--primary-color)] hover:text-white p-3 rounded-full shadow-lg transition"
      >
        <ChevronRight size={28} />
      </button>
    </div>
  );
};

export default Hero;
