import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import img1 from "../../assets/Fern Hospitality9098.jpg";
import img2 from "../../assets/Akshat.jpg";
// import img3 from "../../assets/team/13.jpg";
import img4 from "../../assets/team/14.jpg";
// import img5 from "../../assets/team/15.jpg";
// import img6 from "../../assets/team/16.jpg";
import img7 from "../../assets/team/17.jpg";
import img8 from "../../assets/team/18.jpg";
import img9 from "../../assets/team/19.jpg";

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
    // {
    //   name: "Bartolémy Lemoine",
    //   designation: "Head of Operations",
    //   image: img6,
    //   description:
    //     "15+ years in luxury hospitality and high-end concierge services. Former VIP Director at Bagatelle Group. Expert in curating guest experiences, managing elite relationships, and leading hospitality operations worldwide.",
    // },
    // {
    //   name: "Alex Cordoba",
    //   designation: "CEO, Savaya",
    //   image: img3,
    //   description:
    //     "CEO of Savaya, a globally recognized hospitality and entertainment group based in Bali. Leads strategic growth across lifestyle brands, with a focus on innovation, guest experiences, and premium hospitality expansion.",
    // },
    {
      name: "Zachary Cefaratti",
      designation: "Founder & CEO, Dalma Capital ",
      image: img4,
      description:
        "Founder & CEO of, managing $50B+ in assets across multiple regions. Known for structuring cross-border deals. Also, the founder of AIM Summit, driving innovation in finance and hospitality platforms.",
    },
    // {
    //   name: "Mark Lotenburg",
    //   designation: "Founder & CEO, DORSIA",
    //   image: img5,
    //   description:
    //     "Founder & CEO of DORSIA, redefining restaurant access through venture-backed innovation. Focused on hospitality tech, luxury dining, and curated lifestyle memberships with category-defining impact.",
    // },

    {
      name: "Mishal Kanoo",
      designation: "Director",
      image: img7, // 🔹 Replace with local import if you have
      description:
        "Chairman at The Kanoo Group and KAAF Investments, UAE. Former CEO and Managing Director of AXA Gulf. Experienced leader with an MBA from the University of St. Thomas, USA and EMBA from American University of Sharjah.",
    },
    {
      name: "David Gibson-Moore",
      designation: "Director, Chairman",
      image: img8, // 🔹 Replace with local import if you have
      description:
        "President of Gulf Analytica and Senior Advisor of LGT Group Foundation. Former CEO of LGT Bank covering the GCC and CEO Middle East for the Robeco Group. Holds a BA and MA from Oxford University and MSc in Financial Economics from London University.",
    },
    {
      name: "Amir Anwar",
      designation: "Senior Executive Officer",
      image: img9, // 🔹 Replace with local import if you have
      description:
        "Financial Officer at Burj Global Capital, UAE and Regulated Financial Officer in DIFC. Former Finance Director at XOJET, USA, and Auditor at PwC. Chartered Financial Consultant, USA.",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway py-28 px-6 mt-10">
        <div className="w-11/12 md:w-5/6 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12 text-[var(--primary-color)]">
            Our Team & Advisors
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white dark:bg-[var(--secondary-color)]  shadow-lg p-6 text-center"
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
                <p className="text-gray-600 dark:text-gray-400 text-base my-6 text-justify  font-serif leading-relaxed">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* <NewsSubscribeSection /> */}
      <Footer />
    </div>
  );
}

export default Management;
