import React, { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { BASE_URL } from "../utils/function";

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
      const res = await fetch(`${BASE_URL}/subscribe`, {
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
    <div className="border-t border-gray-300 dark:border-gray-700 w-full">
      <div className="bg-white dark:bg-black text-black dark:text-white  py-12 px-4 sm:px-6 md:px-10 font-raleway">
        <div className="w-11/12  mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h2 className="text-2xl md:text-4xl font-semibold text-black dark:text-white mt-2">
              Sign up for exclusive <br /> offers from us
            </h2>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-4">
            <p className="text-center lg:text-left text-base">
              Sign up to our newsletter for all the latest news and events.
            </p>

            <div className="w-full flex flex-col sm:flex-row items-center gap-3">
              <input
                type="email"
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full sm:w-[300px] px-4 py-3  text-black dark:text-white bg-transparent border border-gray-300 focus:outline-none"
              />
              <button
                onClick={handleSubscribe}
                disabled={loading}
                className="relative group flex items-center justify-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-4 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                  {loading ? "Subscribing" : "SUBSCRIBE"}{" "}
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
                className={`w-full px-4 py-2 rounded-md text-sm mt-2 ${
                  popup.type === "success"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-red-800"
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
