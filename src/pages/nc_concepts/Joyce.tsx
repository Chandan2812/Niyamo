import React, { useEffect } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Joyce: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light">
      <Navbar />

      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqrlkbsdq/image/upload/v1756458924/2025-02-08_qpg5tq.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/0 dark:bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            The Joyce Restaurant{" "}
          </h1>

          <a
            href="https://www.thejoycerestaurant.com/"
            className="mt-6 inline-block px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Explore
          </a>
        </div>
      </section>
      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Concept Section */}
        <div className="mb-16">
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to The Joyce
          </h2>
          <p
            className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Tucked away on Miami Beach’s vibrant Española Way,{" "}
            <span className="font-semibold">The Joyce</span> is an intimate
            45-seat speakeasy by Alinea alum James Taylor. Guests are invited to
            indulge in refined American cuisine while surrounded by
            emerald-green interiors, a rotating gallery of blue-chip art, and
            collectible design furniture, creating a uniquely immersive blend of
            culinary excellence and cultural sophistication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/26189TheJoyce_122024_1338_1.jpg"
                alt="BKC concept 1"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/55839TheJoyce_122024_6266.jpg"
                alt="BKC concept 2"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>

            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/38694TheJoyce_122024_6462.jpg"
                alt="BKC concept 3"
                className="w-full h-full object-cover transform transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-24 grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <div
            className="relative w-full h-full z-10 "
            data-aos="flip-left"
            data-aos-delay="200"
          >
            {/* <div className="absolute top-16 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="absolute right-10 top-32 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
             */}
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/62526TheJoyce_1120244082.jpg"
              alt="The Joyce Restaurant"
              className="relative z-10 w-full h-[300px] md:h-[400px] object-contain"
            />
          </div>

          {/* Text */}
          <div
            className=" w-full space-y-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <h2 className="text-2xl md:text-3xl font-semibold ">
              James Taylor, The Chef
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base  text-justify font-serif mb-10">
              For over a decade,{" "}
              <span className="font-semibold">Chef James Taylor</span> has
              delighted culinary enthusiasts and critics alike across the United
              States. A graduate of Le Cordon Bleu Chicago, he perfected his
              craft at Bavette’s Bar and Boeuf Steakhouse (Hogsalt Hospitality)
              before moving into leadership roles at the Michelin-starred
              Roister and the world-renowned Alinea. <br /> Since 2021, he has
              captivated the palates of an exclusive private clientele, whose
              encouragement inspired him to share his culinary artistry with the
              world.
            </p>
            <a href="/contact" className="block mt-10 mb-10">
              <button
                className="relative group flex items-center gap-2 text-white dark:text-[var(--primary-color)] dark:text-white border border-[var(--primary-color)]  text-[12px] px-6 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <span className="z-10 relative flex items-center gap-2 text-[var(--primary-color)] group-hover:text-white transition-colors duration-300 font-light">
                  Contact Us →
                </span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                ></span>
              </button>
            </a>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/TV8njQqwQPCOIZlaOWvR_TheJoyce_112024_3876.jpg"
                alt="Design 1"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/dZCWFGjwT0ehKAEc9h4e_TheJoyce_112024_4005.jpg"
                alt="Design 2"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src="https://joyce-restaurant.at/wp-content/uploads/2023/07/img-3-1152x1536-optimized.jpg"
                alt="Design 3"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
          <div className="border rounded overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.508171056109!2d-80.1327508!3d25.786804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b514aa5a8eaf%3A0x27099deb3aa70bd2!2sThe%20Joyce!5e0!3m2!1sen!2sin!4v1756282507387!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="The Joyce, Miami"
            ></iframe>
          </div>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default Joyce;
