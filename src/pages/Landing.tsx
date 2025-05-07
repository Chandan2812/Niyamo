import DiningExperienceSection from "../components/DineWithUs";
import FundamentalsSection from "../components/Fundamental";
import GlobalFootprintSection from "../components/GlobalFootprint";
import Hero from "../components/Hero";
import Navbar from "../components/Nav";
import HospitalityConcepts from "../components/slider";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <DiningExperienceSection />
      <HospitalityConcepts />
      <GlobalFootprintSection />

      <FundamentalsSection />
    </div>
  );
}

export default Landing;
