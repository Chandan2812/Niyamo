import { Mail, MapPin, User, Phone, MessageSquare } from "lucide-react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import countryCodes from "../../utils/countryCodes.json";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-6 mt-10">
        <div className="w-11/12 md:w-5/6 mx-auto font-raleway">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Let’s Connect
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
              We’d love to hear from you! Whether you prefer email, visiting our
              office, or sending us a message, our team is ready to connect.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Info Cards */}
            <div className="space-y-6">
              <ContactCard
                icon={<Mail className="w-8 h-8" />}
                label="Email Us"
                content="Dev@fernhospitalityventures.com"
                href="mailto:Dev@fernhospitalityventures.com"
              />
              <ContactCard
                icon={<Mail className="w-8 h-8" />}
                label="Email Us"
                content="Jenna@niyamocapital.com"
                href="mailto:Jenna@niyamocapital.com"
              />
              <ContactCard
                icon={<MapPin className="w-8 h-8" />}
                label="Office"
                content="1 Bell Street, London, United Kingdom, NW1 5BY"
                href="https://www.google.com/maps/place/1+Bell+St,+London+NW1+5BY"
              />
            </div>

            {/* Contact Form */}
            <div className="bg-white dark:bg-[#111827]  text-black dark:text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Send Us a Message
              </h3>
              <form className="grid gap-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    icon={<User className="w-5 h-5 text-gray-400" />}
                    type="text"
                    placeholder="Your Name"
                    required
                  />
                  <InputField
                    icon={<Mail className="w-5 h-5 text-gray-400" />}
                    type="email"
                    placeholder="Your Email"
                    required
                  />
                </div>

                {/* Phone with Country Code */}
                <div className="flex gap-3">
                  <select
                    className="p-3 rounded-lg bg-white dark:bg-[#111827] text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] w-1/3"
                    required
                  >
                    {countryCodes.map((c) => (
                      <option key={c.code} value={c.dial_code}>
                        {c.name} ({c.dial_code})
                      </option>
                    ))}
                  </select>
                  <InputField
                    icon={<Phone className="w-5 h-5 text-gray-400" />}
                    type="tel"
                    placeholder="Phone Number"
                    required
                    className="flex-1"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    placeholder="Your Message"
                    rows={5}
                    className="w-full pl-10 p-3 rounded-lg bg-white dark:bg-[#111827] text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    required
                  ></textarea>
                </div>
                <div className="flex justify-center">
                  <button className="relative inline-block px-6 py-2 border border-[var(--primary-color)] font-light group overflow-hidden transition-all">
                    <span className="relative z-10 text-[var(--primary-color)] group-hover:text-black transition-colors duration-300">
                      Send Message
                    </span>
                    <span
                      className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                      style={{ backgroundImage: "var(--bg-primary-gradient)" }}
                    />
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg mt-16">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5928692374323!2d-0.17052509999999996!3d51.5206849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ab152d94cbd%3A0xbb639c0396f9672b!2s1%20Bell%20St%2C%20London%20NW1%205BY%2C%20UK!5e0!3m2!1sen!2sin!4v1756279718388!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

type ContactCardProps = {
  icon: React.ReactNode;
  label: string;
  content: string;
  href?: string;
};

const ContactCard = ({ icon, label, content, href }: ContactCardProps) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
      className="bg-gray-100 dark:bg-gray-900 text-black dark:text-white rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="flex-shrink-0 text-[var(--primary-color)] ">{icon}</div>
      <div>
        <h3 className="text-lg font-semibold">{label}</h3>
        <p className="mt-1 text-sm">{content}</p>
      </div>
    </Wrapper>
  );
};

type InputFieldProps = {
  icon: React.ReactNode;
  type: string;
  placeholder: string;
  required?: boolean;
  className?: string;
};

const InputField = ({
  icon,
  type,
  placeholder,
  required,
  className,
}: InputFieldProps) => {
  return (
    <div className={`relative ${className || ""}`}>
      <div className="absolute left-3 top-3">{icon}</div>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 p-3 rounded-lg bg-white dark:bg-[#111827] text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      />
    </div>
  );
};

export default Contact;
