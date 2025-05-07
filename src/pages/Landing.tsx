import FundamentalsSection from "../components/Fundamental";
import Hero from "../components/Hero";
import GlobalFootprintSection from "../components/HospitalityConcepts";
import Navbar from "../components/Nav";
import HospitalityConcepts from "../components/slider";

function Landing() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HospitalityConcepts />
      <GlobalFootprintSection />
      <FundamentalsSection />
    </div>
  );
}

export default Landing;
