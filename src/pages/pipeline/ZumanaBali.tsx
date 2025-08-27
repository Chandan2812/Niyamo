import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function ZumanaBali() {
  return (
    <div>
      <Navbar />

      {/* Hero Section */}
      <section className="relative bg-black text-white py-60 px-6">
        <div className="w-11/12 md:w-5/6 mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-wide">
            Zumana Bali
          </h1>
          <p className="text-lg md:text-xl mt-6 text-gray-300">
            Landmark Beachfront Hospitality Concept Redefining Bali’s
            Entertainment Scene
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
              <HighlightCard title="Iconic Kuta Beachfront Site with Global Tourism Demand" />
              <p>
                Prime <strong>4,200 sqm beachfront site</strong> in Kuta,
                minutes from Ngurah Rai Intl. Airport (DPS).
              </p>
              <p className="mt-4">
                Located in Bali’s most visited area with{" "}
                <strong>year-round international tourist traffic</strong>.
              </p>
              <p className="mt-4">
                A once-in-a-generation{" "}
                <strong>real estate opportunity with scarcity value</strong>.
              </p>
            </div>
            <div>
              <HighlightCard title="High-Impact Entertainment-Led Hospitality Concept" />
              <p>
                Combines immersive{" "}
                <strong>entertainment with premium dining</strong> experiences.
              </p>
              <p className="mt-4">
                Venue capacity: <strong>1,500 guests</strong> including 285 VIP
                tables and 219 fine dining seats.
              </p>
              <p className="mt-4">
                World-class programming featuring{" "}
                <strong>Alesso, Black Coffee, Kygo, Rufus Du Sol</strong>.
              </p>
            </div>
            <div>
              <HighlightCard title="Dual Yield: F&B Revenue + Cultural Programming Platform" />
              <p>
                Projected annual revenue:{" "}
                <strong>USD 16.8M with 18% EBITDA margin</strong>.
              </p>
              <p className="mt-4">
                Investors benefit from{" "}
                <strong>priority repayment from 80% of EBITDA</strong> until
                full return.
              </p>
              <p className="mt-4">
                Includes <strong>5% APY fixed incentive</strong> during the
                construction phase.
              </p>
            </div>
            <div>
              <HighlightCard title="Strategic Asset for Brand Expansion Across Asia-Pacific" />
              <p>
                Anchor venue in the{" "}
                <strong>Kaja × Savaya Group brand platform</strong>.
              </p>
              <p className="mt-4">
                A flagship project driving{" "}
                <strong>regional brand halo across Asia</strong> (Jakarta,
                Canggu, and beyond).
              </p>
              <p className="mt-4">
                Scalable model for{" "}
                <strong>regional beach destinations & festival circuits</strong>
                .
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

export default ZumanaBali;
