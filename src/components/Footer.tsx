import topPattern from "../assets/footer texture.jpg";
import bottomImage from "../assets/footerbottom.png";

const Footer = () => {
  return (
    <footer className="text-white">
      {/* Top Signup Section with Background Pattern */}
      <div
        className="bg-no-repeat bg-cover bg-center px-4 md:px-16 py-12"
        style={{ backgroundImage: `url(${topPattern})` }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
              Sign up for exclusive <br /> offers from us
            </h2>
          </div>
          <div className="flex-1">
            <p className="mb-4 text-sm">
              Sign up to our newsletter for all the latest news and events.
            </p>
            <form className="flex flex-col sm:flex-row items-center">
              <input
                type="email"
                placeholder="Your email"
                className="w-full sm:w-auto flex-1 px-4 py-2 rounded-l-md text-black outline-none"
              />
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-2 rounded-r-md font-semibold"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer Section with Lounge Image */}

      <div
        className="relative bg-no-repeat bg-cover bg-bottom pt-12 pb-4 h-full md:h-[500px]"
        style={{
          backgroundImage: `url(${bottomImage})`,
        }}
      >
        {/* Gradient fade background */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#002f3c] via-[#002f3c]/80 to-transparent pointer-events-none z-[-1]" />

        {/* Foreground content */}
        <div className="relative px-4 md:px-16 py-12 text-white">
          <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <div>
              <p className="mb-2">Instagram</p>
            </div>
            <div>
              <p className="font-semibold mb-2">Discover</p>
              <ul className="space-y-1">
                <li>
                  <a href="#">FH Concepts</a>
                </li>
                <li>
                  <a href="#">News</a>
                </li>
                <li>
                  <a href="#">Reservations</a>
                </li>
                <li>
                  <a href="#">Careers</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Useful Links</p>
              <ul className="space-y-1">
                <li>
                  <a href="#">About</a>
                </li>
                <li>
                  <a href="#">Press</a>
                </li>
                <li>
                  <a href="#">Management</a>
                </li>
                <li>
                  <a href="#">Contact us</a>
                </li>
                <li>
                  <a href="#">Privacy</a>
                </li>
              </ul>
            </div>
            <div>
              <p className="font-semibold mb-2">Get In Touch</p>
              <p>
                <a href="mailto:enquiries@fundamentalhospitality.com">
                  enquiries@fundamentalhospitality.com
                </a>
              </p>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-white/70">
            Copyright © 2025 Fundamental Hospitality. All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
