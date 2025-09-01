import { useEffect, useState } from "react";
import { Mail, MapPin, User, Phone, MessageSquare } from "lucide-react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import countryCodes from "../../utils/countryCodes.json";
import NewsSubscribeSection from "../../components/Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: countryCodes[150].dial_code, // default first country
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  useEffect(() => {
    AOS.init({
      duration: 1000, // animation duration in ms
      once: true, // animation happens only once
      offset: 100, // offset from the original trigger point
    });
  }, []);

  // ✅ email regex
  const validateEmail = (email: string) => {
    const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,})+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // ✅ validate email before API call
    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_BASE_URL}/api/contact`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: `${formData.phoneCode}${formData.phone}`, // ✅ full phone
            message: formData.message,
          }),
        }
      );

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Something went wrong!");
      }

      setSuccess("Your message has been sent successfully!");
      setFormData({
        name: "",
        email: "",
        phoneCode: countryCodes[150].dial_code,
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Server error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-6 mt-10">
        <div className="w-11/12 md:w-5/6 mx-auto font-raleway">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl md:text-5xl font-bold mb-4"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              Let’s Connect
            </h2>
            <p
              className="text-base md:text-lg text-gray-700 dark:text-gray-300 max-w-1xl mx-auto"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              Our team is always happy to connect. <br />
              We’re here for you! Reach out via email, drop by our office, or
              send us a quick message.
            </p>
          </div>

          {/* Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div
              className="bg-white dark:bg-[#111827] text-black dark:text-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-shadow"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                Send Us a Message
              </h3>

              {/* ✅ Error & Success Messages */}
              {error && (
                <p className="text-red-500 text-center mb-4">{error}</p>
              )}
              {success && (
                <p className="text-green-500 text-center mb-4">{success}</p>
              )}

              <form onSubmit={handleSubmit} className="grid gap-6">
                {/* Name + Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <InputField
                    icon={<User className="w-5 h-5 text-gray-400" />}
                    type="text"
                    placeholder="Your Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <InputField
                    icon={<Mail className="w-5 h-5 text-gray-400" />}
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Phone with Country Code */}
                <div className="flex gap-3">
                  <select
                    name="phoneCode"
                    value={formData.phoneCode}
                    onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="flex-1"
                  />
                </div>

                {/* Message */}
                <div className="relative">
                  <MessageSquare className="w-5 h-5 text-gray-400 absolute left-3 top-3" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={5}
                    className="w-full pl-10 p-3 rounded-lg bg-white dark:bg-[#111827] text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
                    required
                  ></textarea>
                </div>

                <div className="flex justify-center">
                  <button
                    type="submit"
                    disabled={loading}
                    className="relative inline-block px-6 py-2 border border-[var(--primary-color)] font-light group overflow-hidden transition-all disabled:opacity-50"
                  >
                    <span className="relative z-10 text-[var(--primary-color)] group-hover:text-white transition-colors duration-300">
                      {loading ? "Sending..." : "Send Message"}
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
      <NewsSubscribeSection />
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
      className="bg-gray-50 dark:bg-gray-900 text-black dark:text-white rounded-2xl p-6 flex items-start gap-4 shadow-md hover:shadow-lg transition-shadow"
      data-aos="zoom-in"
      data-aos-delay="200"
    >
      <div className="flex-shrink-0 text-[var(--primary-color)]">{icon}</div>
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
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const InputField = ({
  icon,
  type,
  placeholder,
  required,
  className,
  name,
  value,
  onChange,
}: InputFieldProps) => {
  return (
    <div className={`relative ${className || ""}`}>
      <div className="absolute left-3 top-3">{icon}</div>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full pl-10 p-3 rounded-lg bg-white dark:bg-[#111827] text-black dark:text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)]"
      />
    </div>
  );
};

export default Contact;
