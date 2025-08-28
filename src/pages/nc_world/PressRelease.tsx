import Footer from "../../components/Footer";
import Navbar from "../../components/Nav";
import NewsSubscribeSection from "../../components/Newsletter";

const PressRelease = () => {
  return (
    <div>
      <Navbar />
      <div className="px-4 md:px-12 py-[100px] font-ptserif text-black bg-white dark:bg-black dark:text-white leading-relaxed">
        <div className="w-11/12 md:w-5/6 mx-auto ">
          <h1 className="text-2xl md:text-3xl font-bold mb-6 text-center">
            Dubai Based Fern Hospitality Ventures (FHV) Launches Fund To Raise
            An Initial $100m To Invest in High-Growth Global Hospitality Sector
          </h1>

          <p className="italic mb-6 text-center max-w-3xl mx-auto">
            “This is a once in a generation moment for hospitality investment,”
            said Uday Singh, CEO of Fern Hospitality Ventures and the
            entrepreneur behind global successes like OPA and Bagatelle Dubai.
          </p>

          <section className="space-y-4">
            <h2 className="text-xl md:text-2xl font-semibold">The Fund</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Raised $15m in first 24 hours of launching the fund.</li>
              <li>
                Leveraging Dubai’s hospitality success to scale brands
                worldwide.
              </li>
              <li>
                Diverse portfolio including technology-led concepts, luxury
                experiential brands, and established brands in emerging
                destinations.
              </li>
              <li>
                Dual return model: cashflow from operations + capital upside
                from real estate.
              </li>
              <li>
                Target fund size of $100m with net 20% return, managed by Dalma
                Capital.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-xl md:text-2xl font-semibold">The Board</h2>
            <p>
              Comprising sector investment experts and young talent with a track
              record of global successes:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                Uday Singh: Bagatelle Dubai, Opa Dubai, La Nina Dubai, and more.
              </li>
              <li>
                Akshat Tiberwala: MD of Niyamo Capital, managing $25m AUM,
                brings Gen-Z perspective.
              </li>
            </ul>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-xl md:text-2xl font-semibold">
              Portfolio (Post $15m Raise)
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Dorsia – Tech-driven reservations platform.</li>
              <li>16 Charles Street, Mayfair – Private members club.</li>
              <li>Ramen Me – Disco-dining concept in Portugal.</li>
              <li>The Joyce – Miami based American dining.</li>
              <li>Opa Bali – Experiential Greek dining concept.</li>
            </ul>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-xl md:text-2xl font-semibold">
              Fund Strategy & Rationale
            </h2>
            <p>
              FHV backs early-stage culturally relevant brands, disruptive
              technology, and scalable experiential formats. The global luxury
              hospitality industry is projected to grow from $239B in 2023 to
              $391B in 2028, outpacing other sectors with dining being the #1
              consumer spend worldwide.
            </p>
          </section>

          <section className="space-y-4 mt-8">
            <h2 className="text-xl md:text-2xl font-semibold">
              Gen Z & Hospitality
            </h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>79% dine out 5+ times per month.</li>
              <li>88% follow travel influencers on TikTok/Instagram.</li>
              <li>73% willing to pay more for sustainable options.</li>
              <li>“Snackification” and experiential dining on the rise.</li>
            </ul>
          </section>
        </div>
      </div>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
};

export default PressRelease;
