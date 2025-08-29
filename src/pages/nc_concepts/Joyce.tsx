import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";

const Joyce: React.FC = () => {
  return (
    <div className="bg-white text-black font-raleway dark:bg-black dark:text-white  font-light">
      <Navbar />

      <section
        className="relative h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://res.cloudinary.com/dqrlkbsdq/image/upload/v1756458924/2025-02-08_qpg5tq.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black/0 dark:bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            The Joyce Restaurant{" "}
          </h1>

          <a
            href="https://www.thejoycerestaurant.com/"
            className="mt-6 inline-block px-6 py-3 bg-[var(--primary-color)] text-white font-medium rounded-full shadow-lg hover:opacity-90 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit The Joyce Restaurant
          </a>
        </div>
      </section>
      <section className="w-11/12 md:w-5/6 mx-auto py-12">
        {/* Concept Section */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Welcome to The Joyce</h2>
          <p className="text-md leading-relaxed">
            Tucked away on Miami Beach’s vibrant Española Way, The Joyce is an
            intimate 45-seat speakeasy by Alinea alum James Taylor. Guests are
            invited to indulge in refined American cuisine while surrounded by
            emerald-green interiors, a rotating gallery of blue-chip art, and
            collectible design furniture, creating a uniquely immersive blend of
            culinary excellence and cultural sophistication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/26189TheJoyce_122024_1338_1.jpg"
              alt="BKC concept 1"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/55839TheJoyce_122024_6266.jpg"
              alt="BKC concept 2"
              className="w-full h-full object-cover rounded"
            />
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/38694TheJoyce_122024_6462.jpg"
              alt="BKC concept 3"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </div>

        {/* Cuisine Section */}
        <div className="mb-16">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            {/* Image */}
            <div className="md:w-1/3 w-full">
              <img
                src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/images/62526TheJoyce_1120244082.jpg"
                alt="Cuisine 1"
                className="w-full h-[400px] object-contain rounded-lg shadow-md"
              />
            </div>

            {/* Text */}
            <div className="md:w-2/3 w-full space-y-4">
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                James Taylor, The Chef
              </h2>
              <p className="text-md md:text-base leading-relaxed">
                For over a decade, Chef James Taylor has delighted culinary
                enthusiasts and critics alike across the United States. A
                graduate of Le Cordon Bleu Chicago, he perfected his craft at
                Bavette’s Bar and Boeuf Steakhouse (Hogsalt Hospitality) before
                moving into leadership roles at the Michelin-starred Roister (★)
                and the world-renowned Alinea (★★★). Since 2021, he has
                captivated the palates of an exclusive private clientele, whose
                encouragement inspired him to share his culinary artistry with
                the world.
              </p>
            </div>
          </div>
        </div>

        {/* Design Section */}
        <div className="mb-16">
          <p className="text-md leading-relaxed mb-6">
            Nestled in the heart of Charles Street, we embrace its rich
            character and storied history, not just to preserve it, but to
            elevate it. Every detail is crafted to honor the past while shaping
            a vibrant, modern experience for today.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/TV8njQqwQPCOIZlaOWvR_TheJoyce_112024_3876.jpg"
              alt="Design 1"
              className="h-full object-cover rounded"
            />
            <img
              src="https://images.getbento.com/accounts/ca368c28a061a50a6de86598e993a37c/media/dZCWFGjwT0ehKAEc9h4e_TheJoyce_112024_4005.jpg"
              alt="Design 2"
              className="h-full object-cover rounded"
            />
            <img
              src="https://joyce-restaurant.at/wp-content/uploads/2023/07/img-3-1152x1536-optimized.jpg"
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
