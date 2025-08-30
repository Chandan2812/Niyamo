import { useState } from "react";
import { Mail, User, Phone, MessageSquare, X } from "lucide-react";
import countryCodes from "../utils/countryCodes.json";

type PopupContactFormProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PopupContactForm = ({ isOpen, onClose }: PopupContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCode: countryCodes[70].dial_code,
    phone: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

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
            phone: `${formData.phoneCode}${formData.phone}`,
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
        phoneCode: countryCodes[70].dial_code,
        phone: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Server error, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-[#111827] text-black dark:text-white w-full max-w-lg rounded-2xl shadow-xl relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Form Content */}
        <div className="p-8">
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Send Us a Message
          </h3>

          {/* ✅ Error & Success Messages */}
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
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
                <span className="relative z-10 text-[var(--primary-color)] group-hover:text-black transition-colors duration-300">
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
    </div>
  );
};

// ✅ Reuse InputField from your code
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

export default PopupContactForm;
