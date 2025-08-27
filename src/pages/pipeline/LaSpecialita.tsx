import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function LaSpecialita() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-60 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            La Specialità – Miami & Los Angeles
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300">
            Heritage Brand Entering High-Growth U.S. Luxury Dining Market
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
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
              <HighlightCard title="Proven Heritage Brand Ready for Global Breakout" />
              <p>
                Established in 1977 in Milan, La Specialità serves{" "}
                <strong>2,000+ guests per week</strong> and has developed a cult
                following for its ultra-thin, crispy pizzas. This is the brand’s{" "}
                <strong>first international expansion</strong> – a rare
                opportunity to back a legacy brand as it enters premium U.S.
                markets.
              </p>
            </div>
            <div>
              <HighlightCard title="Miami & LA Are Experiencing a Premium Italian Boom" />
              <p>
                In both cities, Italian cuisine ranks in the{" "}
                <strong>top 3 most-booked categories</strong> on platforms like
                Resy and OpenTable. Italian casual dining in Miami alone saw{" "}
                <strong>16% YoY growth in average spend</strong> per cover in
                2023, driven by inbound luxury migration and elevated dining
                demand.
              </p>
            </div>
            <div>
              <HighlightCard title="Outstanding Unit Economics" />
              <p>
                Fast-casual pizza concepts deliver{" "}
                <strong>35–45% EBITDA margins</strong>. La Specialità benefits
                from:
                <ul className="list-disc ml-6 mt-2">
                  <li>Low labor costs</li>
                  <li>Quick prep formats</li>
                  <li>Flexible footprint (dine-in + delivery)</li>
                </ul>
                These attributes make it highly replicable across urban
                high-footfall areas.
              </p>
            </div>
            <div>
              <HighlightCard title="Strategic Sites with Operator Advantage" />
              <p>
                The Miami location is being secured in a{" "}
                <strong>hospitality-heavy corridor</strong>, leveraging Fern’s
                local real estate partners. LA rollout is targeting{" "}
                <strong>West Hollywood or Venice</strong>, with proximity to
                affluent residential and tech/media office populations.
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

export default LaSpecialita;
