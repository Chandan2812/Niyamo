import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { ArrowRight } from "lucide-react";
import NewsSubscribeSection from "../../components/Newsletter";

function AboutUs() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-28 px-6 font-raleway">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-16 text-[var(--primary-color)]">
            About Us
          </h1>
          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Left: Content */}
            <div className="md:w-1/2">
              <p className="uppercase tracking-widest font-semibold text-xs text-[var(--primary-color)] mb-4">
                Our Story
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-black dark:text-white mt-2">
                Redefining Hospitality with Taste and Vision
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif">
                Fern Hospitality is more than a hospitality company, we’re
                curators of exceptional dining experiences. With a passion for
                innovation and a commitment to excellence, we create restaurant
                concepts that blend flavor, service, and ambiance into
                unforgettable moments.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif">
                Our vision is to elevate dining culture by delivering spaces
                that are as inspiring as they are inviting. Each venue in our
                portfolio, whether chic and contemporary or elegantly luxurious,
                reflects originality, global influence, and meticulous attention
                to detail.
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify font-serif">
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
              <div className="relative w-full h-full z-10">
                <div className="absolute top-20 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
                <div className="absolute right-10 top-32 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
                <img
                  src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
                  alt="Dining"
                  className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
                />
              </div>
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

<div className="relative w-full h-full z-10">
  <div className="absolute top-10 right-6 w-full h-full bg-[radial-gradient(var(--primary-color)_2.5px,transparent_2.5px)] bg-[length:28px_28px] z-0" />
  <div className="absolute right-10 top-44 md:bottom-0 md:right-0 w-[90%] h-[90%] md:w-[90%] md:h-[80%] bg-[var(--primary-color)] dark:bg-[var(--secondary-color)]  z-0"></div>
  <img
    src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
    alt="Dining"
    className="relative z-10 w-full h-[300px] md:h-[400px] object-cover"
  />
</div>;
