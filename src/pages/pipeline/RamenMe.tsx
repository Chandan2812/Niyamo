import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function RamenMe() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-60 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Ramen Me
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300">
            Delivery-Optimized Premium Street Food Concept with Franchising
            Upside
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
              <HighlightCard title="High-Margin, Delivery-Optimized Concept" />
              <p>
                Ramen Me is designed for{" "}
                <strong>fast-casual and cloud kitchen scalability</strong> with
                emphasis on high-volume delivery.
              </p>
              <p className="mt-4">
                Typical units deliver <strong>25–35% EBITDA margins</strong>{" "}
                with low labor and minimal kitchen capex.
              </p>
              <p className="mt-4">
                Features a <strong>tight, craveable menu</strong> optimized for
                repeat orders and social media virality.
              </p>
            </div>
            <div>
              <HighlightCard title="Explosive Demand for Affordable Premium Asian Cuisine" />
              <p>
                Ramen is one of the{" "}
                <strong>fastest-growing food categories globally</strong>,
                especially popular with Gen Z and millennials.
              </p>
              <p className="mt-4">
                In markets like UAE, UK, and Southeast Asia, demand for
                <strong> accessible comfort food with a premium twist</strong>
                is surging.
              </p>
              <p className="mt-4">
                Ramen Me fits perfectly into this pocket —{" "}
                <strong>affordable, addictive, and Instagrammable</strong>.
              </p>
            </div>
            <div>
              <HighlightCard title="Built for Multi-Unit Rollout or Franchising" />
              <p>Modular, compact layout ideal for:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Mall food courts</li>
                <li>Standalone kiosks</li>
                <li>Ghost kitchens</li>
              </ul>
              <p className="mt-4">
                Supports <strong>10–15 day fit outs</strong> and sub-$100K
                startup costs, making it ideal for franchising or regional
                rollouts.
              </p>
            </div>
            <div>
              <HighlightCard title="Backed by Experienced Brand Builders" />
              <p>
                Part of Fern’s hospitality portfolio with access to in-house
                expertise in:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Menu engineering</li>
                <li>Influencer-led digital marketing</li>
                <li>Scalable back-of-house systems</li>
              </ul>
              <p className="mt-4">
                Early traction visible with{" "}
                <strong>above-market retention rates</strong> in test locations
                (pending confirmation from internal data).
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

export default RamenMe;
