import React, { useEffect } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
// import { ArrowRight } from "lucide-react";

const Bkc: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light ">
      <div className="md:mb-20">
        <Navbar />
      </div>

      <section
        className="relative h-[50vh] md:h-[80vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqrlkbsdq/image/upload/v1756362081/bkc_tuicnp.webp')",
        }}
      >
        <div className="absolute inset-0 bg-black/10 dark:bg-black/40"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1
            className="text-4xl md:text-6xl font-bold mb-6"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Biryani Kebab Chai
          </h1>

          <a
            href="https://bkclondon.uk/"
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
            Bringing authentic Awadhi delights to London
          </h2>
          <p
            className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At <span className="font-semibold">BKC – Biryani Kebab Chai</span>,
            we bring the royal flavors of Lucknow straight to London. Born from
            a passion for authentic Awadhi cuisine, our journey began in Marble
            Arch in 2022 and expanded to Soho in 2023. Indulge in the rich
            flavors of Lucknow, from aromatic dum biryanis and tender kebabs to
            comforting kulhad chai. Each dish is crafted as a tribute to
            timeless traditions, served with warmth and a hint of
            modern sophistication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://bkclondon.uk/wp-content/uploads/2024/06/Slider-1-1.png"
                alt="BKC concept 1"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="500"
            >
              <img
                src="https://bkclondon.uk/wp-content/uploads/2024/06/2-1.png"
                alt="BKC concept 2"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              <img
                src="https://bkclondon.uk/wp-content/uploads/2024/06/3-1.png"
                alt="BKC concept 3"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
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
              src="https://bkclondon.uk/wp-content/uploads/2023/08/DSC00189-2400x1600.jpg"
              alt="Biryani Kebab Chai"
              className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2
              className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Dum Pukht Magic: The Royal Lucknowi Biryani at BKC
            </h2>
            <p
              className="text-gray-600 dark:text-gray-400 text-base mb-6 text-justify font-serif leading-relaxed"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              At <span className="font-semibold">BKC – Biryani Kebab Chai</span>
              , every plate tells a story of passion and precision. Guided by
              our Head Chef, <span className="font-semibold">Arsh Thakur</span>,
              we embrace the art of <em>dum pukht</em> cooking, where
              slow-cooked marinated meats and aromatic rice come together in
              perfect harmony. Using age-old Awadhi techniques and the freshest
              British produce, we craft dishes that are rich, soulful, and
              unforgettable, capturing the royal essence of Lucknow while
              celebrating London’s vibrant spirit.
            </p>

            {/* Explore Button */}
            <a href="/contact">
              <button
                className="relative group flex items-center gap-2 text-white dark:text-[var(--primary-color)] dark:text-white border border-[var(--primary-color)]  text-[12px] px-6 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden"
                data-aos="fade-up"
                data-aos-delay="600"
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
        <div className="mb-16 mt-28">
          <p
            className="text-gray-600 dark:text-gray-400 text-base my-6 mb-20 text-justify font-serif"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            More than just a restaurant,{" "}
            <span className="font-semibold">BKC</span> is a cultural experience.
            Inspired by Lucknow’s tradition of <em>mehmaan nawazi</em> (royal
            hospitality), we welcome every guest with warmth, elegance, and
            care. Whether you’re enjoying chai in a rustic kulhad, savoring
            kebabs with friends, or gathering for a Nawabi feast, every moment
            at BKC is designed to feel special. Step inside, and let us
            transport you to the heritage-rich streets of Lucknow, right here in
            the heart of London.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div
              className="overflow-hidden rounded"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src="https://bkclondon.uk/wp-content/uploads/2024/06/IMG2.jpg"
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
                src="https://bkclondon.uk/wp-content/uploads/2024/06/Home-replace3-1.png"
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
                src="https://bkclondon.uk/wp-content/uploads/2024/06/Rectangle-11.png"
                alt="Design 3"
                className="h-full object-cover rounded transition-transform duration-500 ease-in-out hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">Location</h2>
          <div className="border rounded overflow-hidden h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.9659341051693!2d-0.16402052352963883!3d51.51384097181476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876053ad1fce285%3A0x679683173f356f02!2sBKC%20-%20Biryani%20Kebab%20Chai%20-%20Marble%20Arch!5e0!3m2!1sen!2sin!4v1746705021018!5m2!1sen!2sin"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="BKC Marble Arch"
            ></iframe>
          </div>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default Bkc;
