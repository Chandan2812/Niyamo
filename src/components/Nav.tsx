import { useEffect, useState } from "react";
import {
  Menu,
  Moon,
  Sun,
  ChevronDown,
  Twitter,
  Instagram,
  Facebook,
  Linkedin,
  Youtube,
} from "lucide-react";

const navItems = [
  { title: "Group", dropdown: ["About us", "Management"] },
  {
    title: "FH Concepts",
    dropdown: [
      "16 Charles Street",
      "Biryani Kebab Chai (BKC)",
      "Coupette",
      "24 & 30 Sussex Gardens",
      "The Joyce Restaurant",
      "Dorsia",
    ],
  },
  {
    title: "FH Lifestyle",
    dropdown: ["Group Dinning", "Private Events", "News"],
  },
  { title: "FH World", dropdown: ["Careers", "Press", "Contact"] },
];

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [mobileDropdowns, setMobileDropdowns] = useState<
    Record<number, boolean>
  >({});
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme")
      ? localStorage.getItem("theme") === "dark"
      : true;
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

  useEffect(() => {
    const googleTranslateElementInit = () => {
      // @ts-ignore
      new window.google.translate.TranslateElement(
        {
          pageLanguage: "en",
          autoDisplay: false,
        },
        "google_translate_element"
      );
    };
    // Check if the script has already been added
    const loadGoogleTranslateScript = () => {
      if (!window.googleTranslateElementInit) {
        const script = document.createElement("script");
        script.src =
          "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
        script.async = true;
        document.body.appendChild(script);
        window.googleTranslateElementInit = googleTranslateElementInit;
      }
    };

    loadGoogleTranslateScript();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full font-raleway font-light dark:font-thin shadow-sm ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      {/* Desktop View */}
      <div className="hidden md:flex justify-between items-center px-10">
        <div className="flex items-center gap-6  ">
          <div className="text-2xl font-bold bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] bg-clip-text text-transparent">
            <a href="/" className="uppercase">
              Fern Hospitality
            </a>
          </div>

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
                    <a
                      key={subIdx}
                      href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                      className={`block px-4 py-2 hover:${
                        darkMode
                          ? "bg-gray-700 hover:bg-gray-600"
                          : "bg-gray-100 hover:bg-gray-300"
                      } cursor-pointer`}
                    >
                      {sub}
                    </a>
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
          <div className="relative group">
            <span className="text-sm text-[var(--primary-color)] font-medium cursor-pointer py-8">
              Follow Us
            </span>

            <div
              className={`absolute top-14 -right-20 min-w-[150px] rounded shadow-lg z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none group-hover:pointer-events-auto ${
                darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
              }`}
            >
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
              >
                <Facebook size={16} />
                Facebook
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
              >
                <Instagram size={16} />
                Instagram
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
              >
                <Twitter size={16} />
                Twitter
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
              >
                <Linkedin size={16} />
                Linkedin
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 hover:text-white"
              >
                <Youtube size={16} />
                Youtube
              </a>
            </div>
          </div>

          <span className="text-sm  text-[var(--primary-color)] font-medium cursor-pointer">
            <a href="tel:+1234567890">Call Us</a>
          </span>
        </div>
      </div>

      {/* Mobile View */}
      <div className="md:hidden flex justify-between items-center px-4 py-3">
        <div className="text-xl font-bold bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] bg-clip-text text-transparent">
          <a href="/">Fern Hospitality</a>
        </div>
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
                      <li key={subIdx}>
                        <a
                          href={`/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                          className="hover:underline font-light dark:font-thin block"
                        >
                          {sub}
                        </a>
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
              <a href="tel:+1234567890">Call Us</a>
            </div>
          </div>
        </div>
      )}

      <div
        id="google_translate_element"
        className="fixed top-2 right-[20px] -translate-x-1/2 z-[9990] md:top-7 md:right-[160px]"
      ></div>
    </nav>
  );
};

export default Navbar;
