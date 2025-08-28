import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";

const baseURL = import.meta.env.VITE_API_BASE_URL;

const NewsSubscribeSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [popup, setPopup] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    if (!email) {
      setPopup({ type: "error", message: "Please enter your email address." });
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${baseURL}/subscribe`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        setPopup({ type: "success", message: data.message });
        setEmail("");
      } else {
        setPopup({
          type: "error",
          message: data.error || "Subscription failed.",
        });
      }
    } catch (err) {
      setPopup({
        type: "error",
        message: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  // Auto-dismiss popup after 3 seconds
  useEffect(() => {
    if (popup) {
      const timeout = setTimeout(() => {
        setPopup(null);
      }, 3000);
      return () => clearTimeout(timeout);
    }
  }, [popup]);

  return (
    <div
      id="newsletter-section"
      className="border-t border-gray-300 dark:border-gray-700 w-full"
    >
      <div className="bg-white dark:bg-black text-black dark:text-white py-12 px-4 sm:px-6 md:px-10 font-raleway">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="w-full md:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold mt-2">
              Sign up for exclusive offers from us
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full md:w-1/2 flex flex-col items-center lg:items-end gap-4">
            <p className="text-base text-gray-700 dark:text-gray-300 text-center lg:text-right">
              Sign up to our newsletter for all the latest news and events.
            </p>

            {/* Input + Button */}
            <div className="w-full flex flex-col sm:flex-row items-center justify-end gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[300px] px-4 py-3 rounded-md text-black dark:text-white bg-transparent border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[var(--primary-color)] focus:outline-none transition"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="relative group flex items-center justify-center text-[var(--primary-color)] border border-[var(--primary-color)] text-xs sm:text-sm px-8 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden rounded-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="z-10 relative flex items-center gap-2 group-hover:text-white transition-colors duration-300 font-light">
                  {loading ? "Subscribing..." : "Subscribe"}{" "}
                  <ArrowRight size={16} />
                </span>
                <span
                  className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                  style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                ></span>
              </button>
            </div>

            {/* Popup Message */}
            {popup && (
              <div
                className={`w-full sm:w-auto px-4 py-2 rounded-md text-sm shadow-md ${
                  popup.type === "success"
                    ? "bg-green-100 text-green-800 border border-green-300"
                    : "bg-red-100 text-red-800 border border-red-300"
                }`}
              >
                {popup.message}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsSubscribeSection;
