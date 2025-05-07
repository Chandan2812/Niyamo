import FundamentalsSection from "../components/Fundamental";
import GlobalFootprintSection from "../components/HospitalityConcepts";
import Navbar from "../components/Nav";
import HospitalityConcepts from "../components/slider";

function Landing() {
  return (
    <div>
      <Navbar />
      <HospitalityConcepts />
      <GlobalFootprintSection />
      <FundamentalsSection />
    </div>
  );
}

export default Landing;
