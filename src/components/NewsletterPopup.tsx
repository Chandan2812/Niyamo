import { useEffect, useState } from "react";
import { X } from "lucide-react";

const NewsletterPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const alreadyShown = sessionStorage.getItem("newsletter-popup-shown");
    if (!alreadyShown) {
      const timer = setTimeout(() => {
        setShowPopup(true);
        sessionStorage.setItem("newsletter-popup-shown", "true");
      }, 7000); // Show after 7 seconds

      return () => clearTimeout(timer);
    }
  }, []);

  const handleScrollToSubscribe = () => {
    const section = document.getElementById("newsletter-section");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setShowPopup(false);
  };

  if (!showPopup) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-black text-black dark:text-white px-6 py-8 rounded-lg w-[90%] max-w-md relative font-raleway border border-gray-300 dark:border-gray-700">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-800 dark:hover:text-white"
          onClick={() => setShowPopup(false)}
        >
          <X size={20} />
        </button>
        <h2 className="text-xl md:text-2xl font-semibold mb-2">
          Subscribe to our Newsletter
        </h2>
        <p className="mb-4 text-sm">
          Get the latest updates, offers and more straight to your inbox.
        </p>
        <button
          onClick={handleScrollToSubscribe}
          className="relative group flex items-center justify-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden"
        >
          <span className="z-10 relative group-hover:text-white flex items-center gap-1">
            SUBSCRIBE
          </span>
          <span
            className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
            style={{ backgroundImage: "var(--bg-primary-gradient)" }}
          ></span>
        </button>
      </div>
    </div>
  );
};

export default NewsletterPopup;
