import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Bagatelle() {
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
      <section className="relative bg-black text-white h-[50vh] md:h-[90vh] py-32 md:py-60 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1
            className="text-4xl md:text-6xl font-bold tracking-wide"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Bagatelle – Dubai, Singapore, & Mykonos
          </h1>
          <p
            className="text-lg md:text-xl mt-6 text-gray-300"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Iconic Party-Centric Venue with International Licensing Power
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://bagatelle.com/app/uploads/2021/01/Design-sans-titre-2024-03-25T114650.357.jpg')] bg-cover bg-center opacity-60 dark:opacity-30"></div>
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
              <HighlightCard title="Proven Global Concept with Massive Brand Equity" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                Bagatelle is a globally recognized{" "}
                <strong>French-Mediterranean dining and party concept</strong>,
                active in New York, Dubai, London, and St. Barth.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                The Dubai venue is already operating with{" "}
                <strong>high gross revenue per sqm</strong> and a strong
                nightlife crossover.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                The brand consistently draws HNWIs, celebrities, and luxury
                tourists with its signature{" "}
                <strong>"dinner to dancefloor"</strong> experience.
              </p>
            </div>
            <div>
              <HighlightCard title="Strong Unit-Level Performance in Key Cities" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Dubai location generates{" "}
                <strong>multi-million USD annual revenue</strong>, with high
                occupancy year-round and low promotional dependence.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Mykonos sees <strong>seasonal EBITDA margins &gt;40%</strong>{" "}
                due to short but high-demand operating windows.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                Sydney and Singapore offer major upside via{" "}
                <strong>first-mover positioning</strong> in premium F&amp;B
                districts.
              </p>
            </div>
            <div>
              <HighlightCard title="Powerful Brand Licensing & Operating Model" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Fern’s model supports{" "}
                <strong>equity + license partnerships</strong> with local
                operators, reducing execution risk and CapEx.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Bagatelle’s playbook is <strong>replicable</strong>, with
                signature design, menu, entertainment programming, and seasonal
                activations built in.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="600"
              >
                Ideal for institutional roll-up, IPO, or strategic sale to
                luxury hospitality groups or PE consolidators.
              </p>
            </div>
            <div>
              <HighlightCard title="Market Timing: Premium Nightlife Dining Is Soaring" />
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Cities like <strong>Singapore and Sydney</strong> are
                underpenetrated in upscale experiential F&amp;B.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Post-COVID demand for <strong>"occasion-driven" venues</strong>{" "}
                has surged, with +20% YoY spend growth in top nightlife
                districts.
              </p>
              <p
                className="text-gray-600 dark:text-gray-400 text-base mb-6 font-serif text-justify"
                data-aos="zoom-in"
                data-aos-delay="800"
              >
                Bagatelle’s positioning hits the sweet spot between{" "}
                <strong>exclusivity, fun, and food</strong> — with no scaled
                competitor replicating its model.
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

export default Bagatelle;
