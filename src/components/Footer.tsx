import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-black text-black dark:text-white font-raleway text-sm">
      {/* Top horizontal line */}
      <div className="border-t border-gray-300 dark:border-gray-700 w-full" />

      {/* Logo + CONTACTS */}
      <div className="w-11/12 mx-auto px-3 md:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="flex flex-col items-center md:items-start">
          <div className="flex items-center gap-4">
            <div className="w-16 border-t border-[var(--primary-color)]" />
            <p className="text-xl uppercase md:text-3xl py-6 font-bold bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] bg-clip-text text-transparent">
              Fern Hospitality
            </p>
            <div className="w-20 border-t border-[var(--primary-color)]" />
          </div>
        </div>
        <h2 className="text-2xl font-thin md:mt-0">CONTACTS</h2>
      </div>

      {/* Mid horizontal line */}
      <div className="w-11/12 mx-auto px-3 md:px-10 border-t border-gray-300 dark:border-gray-700 mb-8" />

      {/* Main content */}
      <div className="w-11/12 mx-auto flex flex-col lg:flex-row justify-between px-6 sm:px-12 lg:px-6 gap-10 pb-10 font-light dark:font-thin">
        {/* Logo */}
        <div className="md:w-1/4 flex justify-center items-center">
          <img
            src={logo}
            alt="Fern Hospitality"
            className="dark:invert w-24 invert-0"
          />
        </div>

        {/* Navigation Columns */}
        <div className="grid grid-cols-2 gap-10">
          {/* Locations */}
          <ul className="space-y-2">
            {[
              { label: "16 Charles Street", route: "/16-charles-street" },
              {
                label: "Biryani Kabab Chai",
                route: "/biryani-kebab-chai-(bkc)",
              },
              { label: "Coupette", route: "/coupette" },
              {
                label: "24 & 30 Sussex Gardens",
                route: "/24-&-30-sussex-gardens",
              },
              { label: "The Joyce Restaurant", route: "/the-joyce-restaurant" },
              { label: "Dorsia", route: "/dorsia" },
            ].map((item, i) => (
              <li key={i}>
                <Link
                  to={item.route}
                  className="hover:text-[var(--primary-color)] transition duration-300"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Company */}
          <ul className="space-y-2">
            {[
              { label: "About Us", route: "/about-us" },
              { label: "Contact Us", route: "/contact" },
              { label: "Press Release", route: "/press-release" },
              // { label: "News", route: "/news" },
              { label: "Disclaimer", route: "/disclaimer" },
            ].map((item, i) => (
              <li key={i}>
                <a
                  href={item.route}
                  className="hover:text-[var(--primary-color)] transition duration-300"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div className="space-y-4 lg:text-right">
          <h3 className="text-lg font-medium">London, UK</h3>
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            1 Bell Street, London, London, United Kingdom, NW1 5BY
          </p>
        </div>
      </div>

      {/* Footer Bottom Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-12 lg:px-6 py-6 text-xs text-gray-600 dark:text-gray-400 flex flex-col sm:flex-row justify-between gap-2 border-t border-gray-200 dark:border-gray-700 pt-6">
        <span>Fern Hospitality ©2025 All Rights Reserved</span>
        <div>
          <p>
            <a href="https://www.bigwigmediadigital.com">
              Made & Marketed with ❤️ Bigwig Media Digital
            </a>
          </p>
        </div>
        {/* <div className="flex gap-4">
          {[
            { label: "Disclaimer", route: "/disclaimer" },
            { label: "Terms of Use", route: "#" },
            { label: "Privacy Policy", route: "#" },
            { label: "Sitemap", route: "#" },
          ].map((item, idx) => (
            <Link
              key={idx}
              to={item.route}
              className="hover:text-[var(--primary-color)] transition duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
