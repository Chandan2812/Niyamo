import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import image1 from "../assets//slider Img/BUND-CONCEPT-1.jpg";
import image2 from "../assets//slider Img/SHANGHAI-ME-CONCEPT-1_.jpg";
import image3 from "../assets//slider Img/LyLa.jpg";

const slides = [
  {
    image: image1,
    title: "Empowering Ideas with Capital",
    buttonText: "Learn More",
  },
  {
    image: image2,
    title: "Partnering for Growth",
    buttonText: "Join Us",
  },
  {
    image: image3,
    title: "Shaping the Future Together",
    buttonText: "Explore",
  },
];

const Hero = () => {
  const [[index, direction], setIndex] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(([prev]) => [(prev + 1) % slides.length, 1]);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full h-[80vh] overflow-hidden">
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={slides[index].image}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full bg-cover bg-center"
          style={{ backgroundImage: `url(${slides[index].image})` }}
        >
          <div className="w-full h-full bg-black/40 flex items-center justify-center">
            <motion.div
              key={slides[index].title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
              className="text-center text-white px-6"
            >
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                {slides[index].title}
              </h1>
              <button className="bg-white text-black px-6 py-2 rounded shadow hover:bg-gray-200 transition">
                {slides[index].buttonText}
              </button>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Hero;
