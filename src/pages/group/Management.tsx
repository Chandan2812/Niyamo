import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function Management() {
  const team = [
    {
      name: "Gilles Malafosse",
      designation: "President",
      image:
        "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986124369-AOS313XVNRQYA7YF6SFU/Gilles+Malafosse+%C2%A9+Maxime+Lenik.jpg?format=1000w",
    },
    {
      name: "Alexandre Rossoz",
      designation: "Director General",
      image:
        "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986186503-VX8LVMA550651WBC5E52/Alexandre+Rossoz+2.jpg?format=1000w",
    },
    {
      name: "Benoit Dargère",
      designation: "Executive Chef ",
      image:
        "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986292203-Y03RTEPA38Z8SZ36URW0/Benoit+Darge%CC%81re+Chef+exe%CC%81cutif+Loulou+Groupe+%C2%A9+Maxime+Lenik.jpg?format=1000w",
    },
    {
      name: "Claire Malafosse",
      designation: "Artistic Director ",
      image:
        "https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1615986328568-DCE3CID2NRA8064PTU3L/Claire+Malafosse+0920-6196.jpg?format=1000w",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white font-raleway py-28 px-6">
        <div className="w-11/12 mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">
            Our Management
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full object-cover rounded-xl shadow-md mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.designation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Management;
