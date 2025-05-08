import React, { useState } from "react";
import Navbar from "../../components/Nav";
import Footer from "../../components/Footer";
import groupphoto from "../../assets/career.png";
import { ArrowRight } from "lucide-react";

const CareersSection: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    contactNumber: "",
    email: "",
    department: "",
    cvFile: null as File | null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      cvFile: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const isValid =
      formData.fullName &&
      formData.contactNumber &&
      formData.email &&
      formData.department &&
      formData.cvFile;

    if (!isValid) {
      alert("Please fill out all fields and upload your CV.");
      return;
    }

    const submission = {
      fullName: formData.fullName,
      contactNumber: formData.contactNumber,
      email: formData.email,
      department: formData.department,
      cvFile: formData.cvFile,
    };

    console.log("Form Submission:", submission);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-white dark:bg-black py-28 px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-semibold text-center mb-12 text-black dark:text-white">
          Careers
        </h2>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          {/* Form Section */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold mb-1 uppercase text-[#003c5f] dark:text-white">
                  Full Name:
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Name"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-black dark:text-white rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 uppercase text-[#003c5f] dark:text-white">
                  Contact Number:
                </label>
                <input
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  placeholder="Contact Number"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-black dark:text-white rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 uppercase text-[#003c5f] dark:text-white">
                  Email:
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="email@example.com"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-black dark:text-white rounded"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-semibold mb-1 uppercase text-[#003c5f] dark:text-white">
                  Department:
                </label>
                <input
                  type="text"
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  placeholder="Department"
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 bg-white dark:bg-[#2b2b2b] text-black dark:text-white rounded"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-1 uppercase text-[#003c5f] dark:text-white">
                Upload Your CV:
              </label>
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileChange}
                className="block w-full text-sm text-gray-500 dark:text-gray-300"
                required
              />
            </div>

            <button
              type="submit"
              className="relative group flex items-center text-[var(--primary-color)] border border-[var(--primary-color)] text-[12px] px-8 py-3 uppercase tracking-widest bg-transparent transition-all duration-300 overflow-hidden"
            >
              <span className="z-10 relative flex items-center gap-1 group-hover:text-white transition-colors duration-300 font-light">
                Send A Message <ArrowRight size={16} />
              </span>
              <span
                className="absolute inset-0 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 z-0"
                style={{ backgroundImage: "var(--bg-primary-gradient)" }}
              ></span>
            </button>
          </form>

          {/* Image Section */}
          <div className="w-full h-full">
            <img
              src={groupphoto}
              alt="Team Group"
              className="w-full h-auto rounded"
            />
          </div>
        </div>

        {/* Job Locations */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-semibold text-black dark:text-white mb-4">
            Discover Your Next Career Opportunity Here.
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-6">
            Click on the location to explore our job opportunities.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            {["DUBAI", "LONDON", "MONACO", "DOHA", "MARBELLA", "MIAMI"].map(
              (city) => (
                <button
                  key={city}
                  className="bg-gray-100 text-black dark:bg-gray-900 dark:text-white px-6 py-3 rounded hover:bg-[#005280] transition"
                >
                  {city}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CareersSection;
