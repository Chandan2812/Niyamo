import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function FundManager() {
  const fundManagers = [
    {
      name: "Zachary Cefaratti",
      designation: "Founder",
      image: "https://via.placeholder.com/300x300.png?text=Zachary+Cefaratti",
      details: [
        "Experienced Portfolio manager, platform CEO and investment banker",
        "London School of Economics and Political Science; University of Pennsylvania; Foster School of Business at the University of Washington USA",
        "BA, Double Major in International Business Management and International Banking and Finance, Franklin University Switzerland",
      ],
    },
    {
      name: "Mishal Kanoo",
      designation: "Director",
      image: "https://via.placeholder.com/300x300.png?text=Mishal+Kanoo",
      details: [
        "Chairman at The Kanoo Group",
        "Chairman of KAAF Investments, UAE",
        "CEO and Managing Director of AXA Gulf",
        "Auditor at Arthur Anderson",
        "EMBA, American University of Sharjah, UAE",
        "MBA, University of St. Thomas, USA",
      ],
    },
    {
      name: "David Gibson-Moore",
      designation: "Director, Chairman",
      image: "https://via.placeholder.com/300x300.png?text=David+Gibson-Moore",
      details: [
        "President of Gulf Analytica",
        "Senior Advisor of LGT Group Foundation",
        "CEO and Managing Director of LGT Bank covering the GCC",
        "CEO Middle East for the Robeco Group, Bahrain",
        "Chairman of the Boards of Chase Manhattan Bank in Switzerland, Luxembourg and Jersey",
        "Bachelor's and Master's in Natural Science from Oxford University",
        "MSc (cum laude) in Financial Economics from London University",
      ],
    },
    {
      name: "Amir Anwar",
      designation: "Senior Executive Officer",
      image: "https://via.placeholder.com/300x300.png?text=Amir+Anwar",
      details: [
        "Financial Officer at Burj Global Capital Limited, UAE",
        "Regulated Financial Officer in the Dubai International Financial Centre, UAE",
        "Finance Director at XOJET, USA",
        "Auditor at PwC",
        "Chartered Financial Consultant, USA",
      ],
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway py-28 px-6 mt-10">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Dalma Capital – Fund Managers
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {fundManagers.map((person, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition duration-300"
              >
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-32 h-32 object-cover rounded-full mx-auto mb-4 shadow-md border-4 border-gray-200 dark:border-gray-700"
                />
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                  {person.designation}
                </p>
                <ul className="text-left text-sm text-gray-700 dark:text-gray-300 list-disc pl-5 space-y-1">
                  {person.details.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FundManager;
