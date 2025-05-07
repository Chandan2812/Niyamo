import { useState } from "react";
import { Menu, Moon, Sun } from "lucide-react";

const navItems = [
  { title: "Group", dropdown: ["About us", "Management", "NC Expansion"] },
  { title: "NC Concepts", dropdown: ["Concept 1", "Concept 2"] },
  { title: "Partnership Concepts", dropdown: ["Partner 1", "Partner 2"] },
  { title: "NC Lifestyle", dropdown: ["Lifestyle 1", "Lifestyle 2"] },
  { title: "NC World", dropdown: ["World 1", "World 2"] },
];

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);

  const [mobileMenu, setMobileMenu] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => setDarkMode(!darkMode);

  return (
    <nav
      className={`w-full border-b shadow-sm ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-6 py-4">
        {/* Left: Logo + Nav */}
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="text-xl font-bold">Niyamo Capital</div>
          <div className="border-l h-6 border-gray-400"></div>
          {/* Navigation */}
          <ul className="flex gap-6">
            {navItems.map((item, idx) => (
              <li
                key={idx}
                className="relative"
                onMouseEnter={() => setActiveDropdown(idx)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button className="hover:underline">{item.title}</button>
                {activeDropdown === idx && (
                  <div className="absolute bg-white text-black shadow-lg mt-2 py-2 px-4 rounded z-50">
                    {item.dropdown.map((sub, subIdx) => (
                      <div
                        key={subIdx}
                        className="hover:bg-gray-100 px-2 py-1 rounded cursor-pointer"
                      >
                        {sub}
                      </div>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </div>

        {/* Right: Theme + Contact */}
        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded hover:bg-gray-200 dark:hover:bg-gray-700"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <span className="text-sm">Follow Us</span>
          <span className="text-sm font-medium">Call Us</span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        {/* Logo */}
        <div className="text-lg font-semibold">Niyamo</div>

        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button onClick={toggleTheme}>
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Hamburger */}
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenu && (
        <div
          className={`md:hidden px-4 pb-4 ${
            darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
          }`}
        >
          {navItems.map((item, idx) => (
            <div key={idx} className="mb-4">
              <div className="font-semibold">{item.title}</div>
              <ul className="pl-4 mt-1 space-y-1 text-sm">
                {item.dropdown.map((sub, subIdx) => (
                  <li key={subIdx} className="hover:underline">
                    {sub}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="mt-4 flex justify-between text-sm">
            <span>Follow Us</span>
            <span>Call Us</span>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
