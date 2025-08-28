import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import NewsSubscribeSection from "../../components/Newsletter";
import img1 from "../../assets/team/11.jpg";
import img2 from "../../assets/team/12.jpg";
import img3 from "../../assets/team/13.jpg";
import img4 from "../../assets/team/14.jpg";
import img5 from "../../assets/team/15.jpg";
import img6 from "../../assets/team/16.jpg";

function Management() {
  const team = [
    {
      name: "Uday Singh",
      designation: "CEO",
      image: img1,
      description:
        "Serial hospitality entrepreneur with a proven track record of creating and scaling premium F&B and lifestyle concepts globally. Founder of Global Titans Fight Series and recognized for driving high-margin experiential hospitality investments.",
    },
    {
      name: "Akshat Tiberwala",
      designation: "MD",
      image: img2,
      description:
        "Founder of Niyamo Capital, a UK-based investment firm. Combines financial economics expertise with creative brand insight. Focused on sourcing and scaling next-gen F&B and lifestyle investments worldwide.",
    },
    {
      name: "Bartolémy Lemoine",
      designation: "Head of Operations",
      image: img6,
      description:
        "15+ years in luxury hospitality and high-end concierge services. Former VIP Director at Bagatelle Group. Expert in curating guest experiences, managing elite relationships, and leading hospitality operations worldwide.",
    },
    {
      name: "Alex Cordoba",
      designation: "CEO, Savaya",
      image: img3,
      description:
        "CEO of Savaya, a globally recognized hospitality and entertainment group based in Bali. Leads strategic growth across lifestyle brands, with a focus on innovation, guest experiences, and premium hospitality expansion.",
    },
    {
      name: "Zachary Cefaratti",
      designation: "Founder & CEO, ",
      image: img4,
      description:
        "Founder & CEO of , managing $50B+ in assets across multiple regions. Known for structuring cross-border deals. Also the founder of AIM Summit, driving innovation in finance and hospitality platforms.",
    },
    {
      name: "Mark Lotenburg",
      designation: "Founder & CEO, DORSIA",
      image: img5,
      description:
        "Founder & CEO of DORSIA, redefining restaurant access through venture-backed innovation. Focused on hospitality tech, luxury dining, and curated lifestyle memberships with category-defining impact.",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway py-28 px-6 mt-10">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Our Team & Advisors
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  {member.designation}
                </p>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <NewsSubscribeSection />
      <Footer />
    </div>
  );
}

export default Management;
