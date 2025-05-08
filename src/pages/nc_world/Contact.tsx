import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";

function Contact() {
  return (
    <div>
      <Navbar />
      <section className="bg-white dark:bg-black text-black dark:text-white py-24 px-6">
        <div className="w-11/12 mx-auto flex flex-col lg:flex-row gap-12 items-center font-raleway font-light dark:font-thin">
          {/* Left: Contact Info */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative inline-block after:content-[''] after:block after:h-1 after:w-20 after:mt-2 after:bg-[var(--primary-color)]">
              Let's Connect
            </h2>
            <p className="text-base md:text-lg text-gray-700 dark:text-gray-300 mb-10">
              We’d love to hear from you. Reach out and let’s start a
              conversation.
            </p>

            <div className="space-y-6">
              <ContactItem
                icon={<Phone />}
                label="Call us"
                content="020 7125 0421"
                href="tel:02071250421"
              />
              <ContactItem
                icon={<Mail />}
                label="Email us"
                content="admin@commcommuk.com"
                href="mailto:admin@commcommuk.com"
              />
              <ContactItem
                icon={<MapPin />}
                label="Office"
                content="1 Bell Street, London, London, United Kingdom, NW1 5BY"
                href="https://www.google.com/maps/place/1+Bell+St,+London+NW1+5BY"
              />
              <ContactItem
                icon={<Clock />}
                label="Working Hours"
                content="Mon - Fri: 9:00 AM - 6:00 PM"
              />
            </div>
          </div>

          {/* Right: Image */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/6048e88f29a3c733e02afa4f/1616079667915-Z9ECTJF2V83YIHPHM13T/thumbnail_IMG_8335.jpeg?format=750w"
              alt="Contact Us"
              className="w-full max-w-sm h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

type ContactItemProps = {
  icon: React.ReactNode;
  label: string;
  content: string;
  href?: string;
};

const ContactItem = ({ icon, label, content, href }: ContactItemProps) => {
  const Wrapper = href ? "a" : "div";

  return (
    <Wrapper
      href={href}
      className={`flex items-center gap-4 ${href ? "cursor-pointer" : ""}`}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noopener noreferrer" : undefined}
    >
      <div className="p-4 bg-[var(--primary-color)] text-white rounded-full">
        {icon}
      </div>
      <div>
        <p className="text-sm text-gray-600 dark:text-gray-400">{label}</p>
        <p className="text-lg font-medium">{content}</p>
      </div>
    </Wrapper>
  );
};

export default Contact;
