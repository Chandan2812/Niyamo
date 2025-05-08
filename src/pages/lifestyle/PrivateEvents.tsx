import React from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import { ChevronRight } from "lucide-react";

const PrivateEvents: React.FC = () => {
  return (
    <div className="bg-white text-black dark:bg-black dark:text-white font-raleway">
      <Navbar />
      <section className="w-11/12 mx-auto py-20 mt-10 md:mt-16 grid md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-3xl md:text-4xl font-semibold">Private Events</h1>
          <p className="text-lg font-medium">
            If there’s one thing we know at Fundamental Hospitality, it is how
            to throw an unforgettable party.
          </p>
          <p className="text-sm leading-relaxed">
            From a birthday celebration or engagement, to corporate events and
            all-out functions, we can help you tailor the event of the year. Let
            our event planners take care of every last detail, from food, to
            styling, to music, and beyond. Every detail of your event is cared
            for, to bring the vision for your celebration to life.
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
