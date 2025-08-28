import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import CareersSection from "./pages/nc_world/Career";
import PressPage from "./pages/nc_world/Press";
import Contact from "./pages/nc_world/Contact";
import Charles from "./pages/nc_concepts/Charles-street";
import Bkc from "./pages/nc_concepts/Bkc";
import AboutUs from "./pages/group/About";
import Management from "./pages/group/Management";
import Coupette from "./pages/nc_concepts/Coupette";
import GroupDining from "./pages/lifestyle/GroupDinning";
import Garden from "./pages/nc_concepts/Garden";
import PrivateEvents from "./pages/lifestyle/PrivateEvents";
import News from "./pages/lifestyle/News";
import Joyce from "./pages/nc_concepts/Joyce";
import AdminNewsletterSender from "./pages/AdminNewsletter";
import Emailer from "./pages/Emailer";
import Dorsia from "./pages/nc_concepts/Dorsia";
import FundManager from "./pages/group/FundManager";
import LaSpecialita from "./pages/pipeline/LaSpecialita";
import OpaBali from "./pages/pipeline/OpaBali";
import Bagatelle from "./pages/pipeline/Bagatelle";
import RamenMe from "./pages/pipeline/RamenMe";
import ZumanaBali from "./pages/pipeline/ZumanaBali";
import BangCookies from "./pages/pipeline/BangCookies";
import Baoli from "./pages/pipeline/Baoli";
import Thamel from "./pages/pipeline/Thamel";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";
import AdminSubscriber from "./pages/admin/AdminSubscriber";
import AdminContact from "./pages/admin/AdminContact";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/careers" element={<CareersSection />} />
        <Route path="/Press" element={<PressPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/16-charles-street" element={<Charles />} />
        <Route path="/biryani-kebab-chai-(bkc)" element={<Bkc />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/management" element={<Management />} />
        <Route path="/fund-manager" element={<FundManager />} />
        <Route path="/coupette" element={<Coupette />} />
        <Route path="/24-&-30-sussex-gardens" element={<Garden />} />
        <Route path="/group-dinning" element={<GroupDining />} />
        <Route path="/private-events" element={<PrivateEvents />} />
        <Route path="/news" element={<News />} />
        <Route path="/the-joyce-restaurant" element={<Joyce />} />
        <Route path="/dorsia" element={<Dorsia />} />
        <Route path="/newsletter" element={<AdminNewsletterSender />} />
        <Route path="/emailer" element={<Emailer />} />
        <Route path="/la-specialita" element={<LaSpecialita />} />
        <Route path="/opa-bali" element={<OpaBali />} />
        <Route path="/bagatelle" element={<Bagatelle />} />
        <Route path="/ramen-me" element={<RamenMe />} />
        <Route path="/zumana-bali" element={<ZumanaBali />} />
        <Route path="/bang-cookies" element={<BangCookies />} />
        <Route path="/baoli" element={<Baoli />} />
        <Route path="/thamel" element={<Thamel />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />

          <Route path="subscriber" element={<AdminSubscriber />} />
          <Route path="contact" element={<AdminContact />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
