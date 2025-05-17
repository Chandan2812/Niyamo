import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowRight } from "lucide-react";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-28 px-6 font-raleway dark:font-thin">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="md:w-1/2">
              <p className="uppercase tracking-widest font-semibold text-xs text-gray-800 dark:text-gray-200 mb-4">
                Our Story
              </p>
              <h2 className="text-2xl md:text-4xl font-semibold mb-6 text-black dark:text-white">
                Leading Hospitality with Vision and Flavor
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-base mb-6">
                Fern Hospitality is a dynamic hospitality company redefining
                culinary experiences through a portfolio of innovative
                restaurant concepts. Founded with a vision to elevate dining
                culture, we craft memorable environments where taste, service,
                and ambiance converge.
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base mb-6">
                With a focus on originality and global inspiration, our team
                blends expertise with creativity to deliver venues that are both
                refined and inviting. From contemporary casual to upscale
                luxury, each concept reflects our commitment to excellence.
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base mb-10">
                As we continue to expand across vibrant markets, we remain
                dedicated to building hospitality brands that spark connection,
                celebrate flavor, and set new standards in guest experience.
              </p>

              <a href="/contact">
                <button className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden">
                  <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                    Contact Us <ArrowRight size={16} />
                  </span>
                  <span
                    className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                    style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                  ></span>
                </button>
              </a>
            </div>

            {/* Right: Image */}
            <div className="md:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
                alt="Fern Hospitality Hospitality"
                className="w-full h-auto rounded-xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default AboutUs;
