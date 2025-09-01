import { useEffect, useState } from "react";
import { FaUsers } from "react-icons/fa";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const GRADIENTS = [
  "from-indigo-500 via-purple-500 to-pink-500",
  "from-sky-500 via-blue-500 to-indigo-600",
];

const Dashboard = () => {
  const [counts, setCounts] = useState({
    subscribers: 0,
    contacts: 0,
  });

  useEffect(() => {
    Promise.all([
      fetch(`${baseURL}/subscribers`).then((r) => r.json()),
      fetch(`${baseURL}/api/contact`).then((r) => r.json()),
    ])
      .then(([subscribers, contacts]) => {
        console.log(contacts);
        setCounts({
          subscribers: Array.isArray(subscribers) ? subscribers.length : 0,
          contacts: Array.isArray(contacts) ? contacts.length : 0,
        });
      })
      .catch((error) => {
        console.error("Error loading dashboard data:", error);
      });
  }, []);

  const cards = [
    // { title: "Subscribers", icon: <FaUser />, count: counts.subscribers },
    { title: "Contacts", icon: <FaUsers />, count: counts.contacts },
  ];

  return (
    <section className="px-4 py-8 space-y-10">
      <h2 className="text-2xl font-bold text-center">Admin Dashboard</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
        {cards.map((card, idx) => (
          <StatCard
            key={card.title}
            {...card}
            gradient={GRADIENTS[idx % GRADIENTS.length]}
          />
        ))}
      </div>
    </section>
  );
};

const StatCard = ({
  title,
  icon,
  count,
  gradient,
}: {
  title: string;
  icon: JSX.Element;
  count: number;
  gradient: string;
}) => (
  <div
    className={`w-full max-w-sm rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-white bg-gradient-to-br ${gradient}`}
  >
    <div className="text-4xl mb-3">{icon}</div>
    <h3 className="text-lg font-semibold mb-1 text-center">{title}</h3>
    <p className="text-3xl font-bold">{count}</p>
  </div>
);

export default Dashboard;
