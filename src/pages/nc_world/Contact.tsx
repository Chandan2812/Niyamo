import { Mail, MapPin } from "lucide-react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-6 mt-10">
        <div className="w-11/12 mx-auto text-center font-raleway">
          {/* Header */}
          <h2 className="text-3xl md:text-4xl font-semibold mb-4">
            Let's Connect
          </h2>
          <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-16 max-w-2xl mx-auto">
            We’d love to hear from you! Reach out through phone, email, or visit
            our office.
          </p>

          {/* Info Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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

          {/* Map */}
          <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
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
      className="bg-[#111827] text-white rounded-2xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-shadow"
    >
      <div className="mb-4">{icon}</div>
      <h3 className="text-lg font-semibold">{label}</h3>
      <p className="mt-2 text-sm text-center">{content}</p>
    </Wrapper>
  );
};

export default Contact;
