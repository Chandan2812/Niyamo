import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function Baoli() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-60 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Baoli
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300">
            Luxury Experiential Concept for Sunset-to-Night Lifestyle
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
            {/* Column 1 */}
            <div>
              <HighlightCard title="Iconic Brand DNA + Bali’s Most Valuable Asset Class" />
              <p>
                Bâoli is already a <strong>global lifestyle brand</strong> via
                its flagship in Miami, known for blending luxury dining, beach
                culture, and vibrant nightlife.
              </p>
              <p className="mt-4">
                Bali is seeing surging demand for{" "}
                <strong>premium beach clubs</strong>, now a dominant format in
                the region’s hospitality spend.
              </p>
              <p className="mt-4">
                Bâoli Bali will be positioned as a{" "}
                <strong>sunset-to-night destination</strong>, capturing F&B,
                bottle service, and events under one roof.
              </p>
            </div>

            {/* Column 2 */}
            <div>
              <HighlightCard title="Premium Location with Barriers to Entry" />
              <p>
                The site is secured in a{" "}
                <strong>highly sought-after beachfront corridor</strong> near
                Seminyak/Canggu.
              </p>
              <p className="mt-4">
                Regulatory constraints make it extremely difficult to obtain{" "}
                <strong>beach-facing licenses</strong> in Bali today.
              </p>
              <p className="mt-4">
                Bâoli’s location is designed to become an{" "}
                <strong>anchor brand</strong> for both international tourists
                and affluent regional visitors.
              </p>
            </div>

            {/* Column 3 */}
            <div>
              <HighlightCard title="Tier-1 Financial Model for Hospitality in Bali" />
              <p>
                <strong>Expected covers per day (high season):</strong>{" "}
                600–1,000
              </p>
              <p className="mt-4">
                <strong>Average spend per guest:</strong> USD 100–180, driven by
                bottle service, cabanas, and experiential dining.
              </p>
              <p className="mt-4">
                <strong>Projected EBITDA margins of 35–40%</strong> — among the
                highest in the global beach club category due to low labor and
                rent.
              </p>
            </div>

            {/* Column 4 */}
            <div>
              <HighlightCard title="Exit-Ready Platform Asset" />
              <p>
                Bâoli Bali will not be a one-off — it’s the{" "}
                <strong>launchpad for an APAC expansion</strong>, with Phuket
                and the Maldives on the radar.
              </p>
              <p className="mt-4">
                Strategic buyers are aggressively pursuing lifestyle assets with
                <strong>
                  {" "}
                  brand equity + real estate + community engagement
                </strong>
                .
              </p>
              <p className="mt-4">
                Positioned for roll-up exit or brand acquisition by global
                hospitality groups, nightlife operators, or sovereign-backed
                lifestyle funds.
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

export default Baoli;
