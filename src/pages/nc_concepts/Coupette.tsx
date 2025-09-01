import React, { useEffect } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

const Coupette: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);

  return (
    <div className="font-raleway bg-white text-black dark:bg-black dark:text-white">
      <Navbar />

      <section
        className="relative h-[50vh] md:h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqrlkbsdq/image/upload/v1756361389/coup-04_hz9e4j.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/50"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Coupette
          </h1>

          <a
            href="https://www.coupette.co.uk"
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
            One of the Best Cocktail Bars in Central London
          </h2>
          <p
            className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif "
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Step into <span className="font-semibold">Coupette</span>, a
            French-inspired cocktail haven in Bethnal Green, and discover why it
            has become one of{" "}
            <span className="italic">
              London’s most celebrated cocktail bars
            </span>{" "}
            since opening in 2017. With dim golden lighting that dances across
            rustic walls, the bar exudes an irresistible Parisian charm,
            effortlessly blending romance and modern sophistication. Every
            detail tells a story, vintage coins glimmer across the bar top,
            while bold contemporary artwork injects playful energy into the
            space.
            <br />
            <br />
            What truly sets Coupette apart is its award-winning mixology, where
            tradition meets innovation in every glass. From the iconic{" "}
            <span className="font-semibold">Champagne Piña Colada</span> to
            daring seasonal creations, each cocktail is crafted to surprise and
            delight. Whether you’re seeking a stylish night out, an intimate
            date, or simply the finest cocktails in Central London, Coupette is
            an unforgettable destination that lingers long after the last sip.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            {/* Image Gallery */}
            <img
              src="https://static.wixstatic.com/media/fe41f9_702649e8b6aa4d1e82fe470192aef364~mv2.jpg"
              alt="Coupette interior 1"
              className="w-full h-96 object-cover rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_6900c9bc00ac4705b096d1859135c7bb~mv2.jpg"
              alt="Coupette interior 2"
              className="w-full h-96 object-cover rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_a864ac7097194e67bfe124dc1f68e424~mv2.jpg"
              alt="Coupette interior 3"
              className="w-full h-96 object-cover rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-20 grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          {/* Left Image */}

          <div
            className="relative w-full h-full z-10"
            data-aos="flip-left"
            data-aos-delay="200"
          >
            <div className="absolute top-16 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
            <div className="absolute right-10 top-32 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
            <img
              src="https://static.wixstatic.com/media/1d4581_b98fcf51e6344e628b653e11da24eac9~mv2.png"
              alt="Coupette"
              className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          <div>
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Discover Coupette – Where Cocktails Meet Art in London
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Step into <span className="font-semibold">Coupette</span>,
              London’s award-winning cocktail haven, where French elegance meets
              modern creativity. Inspired by the timeless Coupe glass, our bar
              has captivated guests since opening in Bethnal Green in 2017.
              Ranked{" "}
              <span className="italic">#23 in The World’s 50 Best Bars</span>,
              Coupette is more than a place to drink; it’s a stage for
              unforgettable moments. From dazzling cocktails that push the
              boundaries of flavor to a chic, Parisian-inspired ambiance that
              whispers romance and sophistication, every visit feels like a
              celebration. Discover why Coupette is not just one of the best
              cocktail bars in London, it’s an experience you’ll never forget.
            </p>
            {/* Explore Button */}
            <a href="/contact">
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
          <h2
            className="text-2xl md:text-3xl font-semibold mb-4"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Cocktail Bar & Restaurant in Soho
          </h2>
          <p
            className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Welcome to <span className="font-semibold">Coupette Soho</span>, a
            destination where sophistication meets sustainability. Our award
            winning bartenders reimagine French cocktail artistry with a modern
            twist, using{" "}
            <span className="italic">locally sourced ingredients</span> to craft
            drinks that tell intricate stories with every sip. Every element
            from bold, layered flavors to thoughtful, sustainable practices is
            crafted to indulge your senses while caring for the planet.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://static.wixstatic.com/media/1d4581_f5fe5812b8b0490f8fa3650912b2ea37~mv2.png"
              alt="Sustainable cocktail"
              className="h-full object-cover rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_1b5419bb954a4b0283823e65061f871c~mv2.jpg"
              alt="Cocktail example"
              className="h-full object-cover rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            />
            <img
              src="https://static.wixstatic.com/media/fe41f9_25b64aa40c07494d813849bc492e5bb4~mv2.jpg"
              alt="Interior decor"
              className="h-full object-cover rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Location</h2>
          <div className="border rounded overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.2378937973726!2d-0.06170442352879775!3d51.52719637181788!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761cc5314cf5d1%3A0x86778d55de5a820c!2sCoupette!5e0!3m2!1sen!2sin!4v1746706756972!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Coupette Bethnal Green Location"
            ></iframe>
          </div>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default Coupette;
