import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

const Bkc: React.FC = () => {
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light ">
      <div className="mb-20">
        <Navbar />
      </div>

      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
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
            Visit Biryani Kebab Chai
          </a>
        </div>
      </section>
      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">
            Bringing authentic Awadhi delights to London
          </h2>
          <p className=" text-md leading-relaxed mb-4">
            At BKC – Biryani Kebab Chai, our story is one of passion,
            exploration, and the desire to share the unparalleled tastes of
            Awadhi cuisine with London. Launched in Marble Arch in 2022 and in
            Soho in 2023, our mission remains the same: to celebrate the
            culinary wonders of Lucknow...
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
        <div className="mb-16 grid md:grid-cols-2 gap-8 items-start">
          <div className="grid grid-cols-1 gap-4">
            <img
              src="https://bkclondon.uk/wp-content/uploads/2023/08/DSC00189-2400x1600.jpg"
              alt="Cuisine 1"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-4">
              The dum pukht delight: Lucknowi Biryani at BKC
            </h2>
            <p className="text-md leading-relaxed">
              At BKC the dishes are thoughtfully curated by our Head Chef – Arsh
              Thakur, following the age-old Awadhi cooking techniques using the
              freshest British produce...
            </p>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <p className="text-md leading-relaxed mb-6 ">
            Charles Street has character and history, which we are keen to
            preserve and enhance...
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
              src="https://bkclondon.uk/wp-content/uploads/2024/06/attachment-1.png"
              alt="Design 3"
              className="h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Location Section */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Location</h2>
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
      <Footer />
    </div>
  );
};

export default Bkc;
