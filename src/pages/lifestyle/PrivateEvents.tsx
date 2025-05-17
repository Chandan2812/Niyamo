import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";

const PrivateEvents: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-raleway">
      <Navbar />
      <section className="w-11/12 mx-auto px-4 md:px-8 py-20 mt-10 md:mt-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Private Events</h1>
          <p className="text-lg font-medium">
            At Fern Hospitality, we understand the importance of creating
            extraordinary events that leave a lasting impression.
          </p>
          <p className="text-sm leading-relaxed">
            Whether it’s a milestone celebration, a corporate function, or a
            private gathering, our team is here to help you craft a truly
            memorable experience. From catering and décor to music and
            logistics, every aspect is thoughtfully curated to reflect your
            vision and exceed expectations.
          </p>

          <div className="space-y-3">
            <div className="flex items-center border border-[var(--primary-color)] rounded overflow-hidden w-fit">
              <a
                href="mailto:admin@commcommuk.com"
                className="bg-[var(--primary-color)] text-white px-4 py-2 text-sm inline-block"
              >
                admin@commcommuk.com
              </a>
              <button className="bg-white dark:bg-black px-3">
                <ChevronRight className="text-[var(--primary-color)]" />
              </button>
            </div>
            <div className="flex items-center border border-[var(--primary-color)] rounded overflow-hidden w-fit">
              <a
                href="tel:02071250421"
                className="bg-[var(--primary-color)] text-white px-4 py-2 text-sm font-sans inline-block"
              >
                020 7125 0421
              </a>
              <button className="bg-white dark:bg-black px-3">
                <ChevronRight className="text-[var(--primary-color)]" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Static Image */}
        <div>
          <img
            src="https://fundamentalhospitality.com/wp-content/uploads/2022/12/PRIVATE-EVENTS.jpg"
            alt="Private event setup"
            className="rounded-lg w-full h-[400px] object-cover"
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default PrivateEvents;
