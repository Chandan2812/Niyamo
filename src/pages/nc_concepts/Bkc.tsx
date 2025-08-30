import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
// import { ArrowRight } from "lucide-react";

const Bkc: React.FC = () => {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Biryani Kebab Chai
          </h1>

          <a
            href="https://bkclondon.uk/"
            className="mt-6 inline-block px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore
          </a>
        </div>
      </section>
      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Bringing authentic Awadhi delights to London
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif">
            At <strong>BKC – Biryani Kebab Chai</strong>, we bring the royal
            flavors of Lucknow straight to London. Born from a passion for
            authentic Awadhi cuisine, our journey began in Marble Arch in 2022
            and expanded to Soho in 2023. From fragrant dum biryanis to
            melt-in-the-mouth kebabs and soulful kulhad chai, every dish is a
            tribute to the timeless culinary heritage of Lucknow, served with
            warmth, tradition, and a touch of modern elegance.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/Slider-1-1.png"
              alt="BKC concept 1"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/2-1.png"
              alt="BKC concept 2"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/3-1.png"
              alt="BKC concept 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-16 grid md:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          {/* Left Image */}
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2023/08/DSC00189-2400x1600.jpg"
              alt="Cuisine 1"
              className="w-full h-full object-cover rounded-lg shadow-md"
            />
          </div>

          {/* Right Content */}
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-gray-900 dark:text-white">
              Dum Pukht Magic: The Royal Lucknowi Biryani at BKC
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-base mb-6 text-justify font-serif leading-relaxed">
              At <strong>BKC</strong>, every plate tells a story of passion and
              precision. Guided by our Head Chef, <strong>Arsh Thakur</strong>,
              we embrace the art of <em>dum pukht</em> cooking, where
              slow-cooked marinated meats and aromatic rice come together in
              perfect harmony. Using age-old Awadhi techniques and the freshest
              British produce, we craft dishes that are rich, soulful, and
              unforgettable, capturing the royal essence of Lucknow while
              celebrating London’s vibrant spirit.
            </p>

            {/* Explore Button */}
            <a href="/contact">
              <button className="relative group flex items-center gap-2 text-white dark:text-[var(--primary-color)] dark:text-white border dark:border-[var(--primary-color)]  text-[12px] px-6 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
                <span className="z-10 relative flex items-center gap-2 dark:text-[var(--primary-color)] group-hover:text-white transition-colors duration-300 font-light">
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
          <p className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif">
            More than just a restaurant, <strong>BKC</strong> is a cultural
            experience. Inspired by Lucknow’s tradition of{" "}
            <em>mehmaan nawazi</em> (royal hospitality), we welcome every guest
            with warmth, elegance, and care. Whether you’re enjoying chai in a
            rustic kulhad, savoring kebabs with friends, or gathering for a
            Nawabi feast, every moment at BKC is designed to feel special. Step
            inside, and let us transport you to the heritage-rich streets of
            Lucknow, right here in the heart of London.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/IMG2.jpg"
              alt="Design 1"
              className="h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/Home-replace3-1.png"
              alt="Design 2"
              className="h-full object-cover rounded"
            />
            <img
              src="https://bkclondon.uk/wp-content/uploads/2024/06/Rectangle-11.png"
              alt="Design 3"
              className="h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12">
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
