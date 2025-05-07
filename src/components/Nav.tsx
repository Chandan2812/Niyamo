import { useEffect, useState } from "react";
import { Menu, Moon, Sun, ChevronDown } from "lucide-react";

const navItems = [
  { title: "Group", dropdown: ["About us", "Management", "NC Expansion"] },
  {
    title: "NC Concepts",
    dropdown: [
      "Gaia",
      "Sanghai Me",
      "Alaya",
      "Piatti",
      "La Maison Ani",
      "La Petite Ani",
    ],
  },
  {
    title: "Partnership Concepts",
    dropdown: [
      "Cipriani",
      "Cipriani Dolci",
      "Scalini",
      "Scalini Cucina",
      "Socialista",
    ],
  },
  {
    title: "NC Lifestyle",
    dropdown: ["Reservations", "Group Dinning", "Private Events", "News"],
  },
  { title: "NC World", dropdown: ["Careers", "Press", "Contact"] },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<number, boolean>
  >({});
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true; // default to dark
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  const toggleMobileDropdown = (idx: number) => {
    setMobileDropdowns((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full font-raleway font-light dark:font-thin shadow-sm ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-10">
        <div className="flex items-center gap-6  ">
          <div className="text-xl font-bold">Niyamo Capital</div>
          <div className="border-l self-stretch border-gray-400"></div>
          <ul className="flex gap-6">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="flex items-center gap-1 py-8">
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      activeDropdown === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown */}
                <div
                  className={`absolute left-0 min-w-[220px] shadow-lg z-50 transition-all duration-200
                  ${
                    activeDropdown === idx
                      ? "opacity-100 translate-y-0 pointer-events-auto"
                      : "opacity-0 -translate-y-2 pointer-events-none"
                  }
                  ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
                `}
                  // optional: add a slight top padding inside dropdown to reduce flicker on slow mouse
                  style={{ paddingTop: "0.25rem" }}
                >
                  {item.dropdown.map((sub, subIdx) => (
                    <div
                      key={subIdx}
                      className={`px-4 py-2 hover:${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-100 hover:bg-gray-300"
                      } cursor-pointer`}
                    >
                      {sub}
                    </div>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-inherit"
            title="Toggle Theme"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <span className="text-sm text-[var(--primary-color)] font-medium">
            Follow Us
          </span>
          <span className="text-sm  text-[var(--primary-color)] font-medium">
            Call Us
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="text-lg font-semibold">Niyamo</div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-xl text-inherit"
            title="Toggle Theme"
          >
            {darkMode ? <Sun /> : <Moon />}
          </button>
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {mobileMenu && (
        <div
          className={`md:hidden fixed top-12 left-0 w-full h-[calc(100vh-3rem)] overflow-y-auto px-4 pt-4 pb-4 z-40 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          <div className="space-y-6">
            {navItems.map((item, idx) => (
              <div key={idx}>
                <button
                  className="flex justify-between w-full items-center font-light"
                  onClick={() => toggleMobileDropdown(idx)}
                >
                  {item.title}
                  <ChevronDown
                    size={16}
                    className={`transition-transform duration-300 ${
                      mobileDropdowns[idx] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {mobileDropdowns[idx] && (
                  <ul className="pl-4 mt-1 space-y-1 text-sm">
                    {item.dropdown.map((sub, subIdx) => (
                      <li
                        key={subIdx}
                        className="hover:underline font-light dark:font-thin"
                      >
                        {sub}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          {/* Two side-by-side boxes */}
          <div className="mt-8 flex w-full">
            <div className="flex-1 border border-gray-500 text-center py-2">
              Follow Us
            </div>
            <div className="flex-1 border border-gray-500 text-center py-2">
              Call Us
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
