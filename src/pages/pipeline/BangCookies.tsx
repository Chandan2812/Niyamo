import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function BangCookies() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-48 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Bang Cookies – USA
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300">
            High-Margin Direct-to-Consumer Premium Cookie Brand
          </p>
        </div>
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-20"></div>
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
              <HighlightCard title="Viral, High-Margin Product with Direct-to-Consumer DNA" />
              <p>
                Gained traction through <strong>Instagram-fueled growth</strong>
                , offering oversized, gooey gourmet cookies with unique flavors.
              </p>
              <p className="mt-4">
                <strong>Average order value exceeds $35</strong> with strong
                repeat purchase behavior.
              </p>
              <p className="mt-4">
                <strong>Gross margins exceed 60%</strong> due to premium pricing
                and batch-based production.
              </p>
            </div>
            <div>
              <HighlightCard title="Explosive Online & Gifting Demand in the U.S." />
              <p>
                Gourmet cookies have become a <strong>$5B+ niche</strong> within
                the $30B baked goods market.
              </p>
              <p className="mt-4">
                Dominates the{" "}
                <strong>giftable, indulgent delivery segment</strong>,
                especially in metro areas.
              </p>
              <p className="mt-4">
                <strong>Seasonal & influencer-driven drops</strong> drive spikes
                of 4–6x daily revenue.
              </p>
            </div>
            <div>
              <HighlightCard title="Scalable Production and Delivery Infrastructure" />
              <p>
                Operates out of a <strong>centralized kitchen hub in NJ</strong>
                , shipping nationwide.
              </p>
              <p className="mt-4">
                Ready to scale with new fulfillment centers in Texas and
                California, allowing{" "}
                <strong>2-day shipping across 90%+ of the U.S.</strong>
              </p>
              <p className="mt-4">
                Future upside includes{" "}
                <strong>
                  collaborations, pop-ups, and branded experiences
                </strong>
                .
              </p>
            </div>
            <div>
              <HighlightCard title="Positioned for Strategic Exit or Vertical Roll-Up" />
              <p>
                Ideal acquisition target for{" "}
                <strong>Milk Bar, Crumbl, or consumer PE aggregators</strong>.
              </p>
              <p className="mt-4">
                <strong>Brand IP includes:</strong>
              </p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Strong name recognition</li>
                <li>Trademarked recipes</li>
                <li>Loyal email & SMS customer base</li>
              </ul>
              <p className="mt-4">
                Already generating <strong>7-figure annual revenue</strong> with
                minimal retail footprint — poised for explosive growth with
                capital.
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

export default BangCookies;
