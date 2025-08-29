import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowRight } from "lucide-react";
import NewsSubscribeSection from "../../components/Newsletter";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-28 px-6 font-raleway dark:font-thin">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--primary-color)]">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="md:w-1/2">
              <p className="uppercase tracking-widest font-semibold text-xs text-[var(--primary-color)] dark:text-gray-200 mb-4">
                Our Story
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-black dark:text-white">
                Redefining Hospitality with Taste and Vision
              </h2>
              <p className="text-gray-800 dark:text-gray-200 text-base mb-6">
                Fern Hospitality is more than a hospitality company—we’re
                curators of exceptional dining experiences. With a passion for
                innovation and a commitment to excellence, we create restaurant
                concepts that blend flavor, service, and ambiance into
                unforgettable moments.
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base mb-6">
                Our vision is to elevate dining culture by delivering spaces
                that are as inspiring as they are inviting. Each venue in our
                portfolio—whether chic and contemporary or elegantly
                luxurious—reflects originality, global influence, and meticulous
                attention to detail.
              </p>
              <p className="text-gray-800 dark:text-gray-200 text-base mb-10">
                As we grow across dynamic markets, we remain devoted to crafting
                hospitality brands that ignite connections, celebrate culinary
                artistry, and set new benchmarks for guest experience.
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
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
}

export default AboutUs;
