import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function OpaBali() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white h-[50vh] md:h-[90vh] py-60 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-wide"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            OPA Bali
          </h1>
          <p
            className="text-lg md:text-xl mt-6 text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            High-Margin, Experiential Concept with Proven Traction
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://res.cloudinary.com/dqrlkbsdq/image/upload/v1756358587/WhatsApp_Image_2025-08-27_at_11.03.24_df16c009_ybkdyp.jpg')] bg-cover bg-center opacity-60 dark:opacity-30"></div>
      </section>

      {/* Why We Like It Section */}
      <section className="bg-white dark:bg-black text-black dark:text-white py-20 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold mb-12 text-center">
            Why We Like It?
          </h2>

          {/* Details Grid */}
          <div className="grid md:grid-cols-2 gap-12 text-lg leading-relaxed">
            <div>
              <HighlightCard title="Proven Concept with Strong Performance in Dubai" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                OPA was launched in Dubai by Fern’s founder and quickly became a{" "}
                <strong>
                  category-defining Greek dining and entertainment experience
                </strong>
                . Dubai location has maintained{" "}
                <strong>&gt;85% occupancy</strong> on peak nights and generated
                strong EBITDA margins due to premium price points and high
                covers.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                The Bali opening replicates this winning format in a destination
                primed for high-energy experiential dining.
              </p>
            </div>
            <div>
              <HighlightCard title="First-Mover Advantage in Bali’s Greek Category" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                There is no dominant modern Greek dining brand in Bali today,
                especially one combining{" "}
                <strong>theatrical dining with nightlife elements</strong>.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                OPA Bali brings a differentiated “dinner-to-party” concept to a
                tourism hotspot increasingly driven by Instagram-era experience
                seekers. Positioned to lead the Greek-Med category in a market
                with massive tourism inflows from Australia, Europe, and the
                Middle East.
              </p>
            </div>
            <div>
              <HighlightCard title="Premium Location with Low Fixed Costs" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                The site is located in Bali’s{" "}
                <strong>Seminyak Petitenget district</strong>, surrounded by
                5-star hotels and nightlife corridors.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Lease terms in Bali remain favorable post-COVID, offering{" "}
                <strong>low occupancy costs and high profit conversion</strong>.
                Buildout optimized by local partners with strong CapEx
                efficiency.
              </p>
            </div>
            <div>
              <HighlightCard title="High Yield + Fast Ramp-up" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Average check size expected:{" "}
                <strong>USD 85–120 per head</strong>.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Target: <strong>300–400 covers per night</strong> during peak
                season.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Projected unit-level EBITDA margins: <strong>30–35%</strong>.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Break-even expected within <strong>8–10 months</strong> of
                launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

const HighlightCard = ({ title }: { title: string }) => (
  <div className="bg-[#111827] text-white rounded-xl shadow-md p-6 font-medium text-center mb-6">
    {title}
  </div>
);

export default OpaBali;
