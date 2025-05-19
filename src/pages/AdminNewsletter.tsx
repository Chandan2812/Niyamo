// NewsletterForm.tsx
import React, { useState } from "react";
import axios from "axios";
import "../index.css";

const NewsletterForm = () => {
  const [form, setForm] = useState({
    subject: "",
    title: "",
    content: "",
    ctaText: "",
    ctaUrl: "",
    imageUrl: "",
    scheduleAt: "",
    emails: "",
    sendToAll: true,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const isCheckbox = (input: EventTarget): input is HTMLInputElement =>
      (input as HTMLInputElement).type === "checkbox";

    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox(e.target)
        ? (e.target as HTMLInputElement).checked
        : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = {
      subject: form.subject,
      title: form.title,
      content: form.content,
      ctaText: form.ctaText,
      ctaUrl: form.ctaUrl,
      imageUrl: form.imageUrl,
      scheduleAt: form.scheduleAt
        ? new Date(form.scheduleAt).toISOString()
        : undefined,
      sendToAll: form.sendToAll,
      emails: form.sendToAll
        ? undefined
        : form.emails.split(",").map((email) => email.trim()),
    };

    try {
      const res = await axios.post(
        `https://niyamo-backend.onrender.com/send-newsletter`,
        payload
      );
      alert(res.data.message);
    } catch (err) {
      console.error(err);
      alert("Failed to send/schedule newsletter.");
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="bg-gray-900 shadow px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-3xl font-bold bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] bg-clip-text text-transparent">
            <a href="/" className="uppercase">
              Fern Hospitality
            </a>
          </div>
        </div>
      </nav>

      {/* Form Container */}
      <form
        onSubmit={handleSubmit}
        className="max-w-5xl mx-auto mt-10 bg-neutral-900 p-8 -lg shadow-lg space-y-6"
      >
        <h2 className="text-2xl font-semibold mb-4 text-center">
          📬 Send Newsletter
        </h2>

        <div>
          <label className="block mb-1">Subject</label>
          <input
            name="subject"
            value={form.subject}
            onChange={handleChange}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Title</label>
          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Content (Plain Text)</label>
          <textarea
            name="content"
            value={form.content}
            onChange={handleChange}
            rows={6}
            placeholder={`Example:\n\n1. We launched a new feature.\n2. Bug fixes in the dashboard.`}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1">CTA Text</label>
          <input
            name="ctaText"
            value={form.ctaText}
            onChange={handleChange}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1">CTA URL</label>
          <input
            type="url"
            name="ctaUrl"
            value={form.ctaUrl}
            onChange={handleChange}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
            required
          />
        </div>

        <div>
          <label className="block mb-1">Image URL (optional)</label>
          <input
            name="imageUrl"
            value={form.imageUrl}
            onChange={handleChange}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Schedule At</label>
          <input
            type="datetime-local"
            name="scheduleAt"
            value={form.scheduleAt}
            onChange={handleChange}
            className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
          />
        </div>

        <div>
          <label className="block mb-1">Recipients</label>
          <label className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              name="sendToAll"
              checked={form.sendToAll}
              onChange={handleChange}
              className="form-checkbox"
            />
            <span>Send to All Subscribers</span>
          </label>

          {!form.sendToAll && (
            <textarea
              name="emails"
              placeholder="Enter comma-separated emails"
              value={form.emails}
              onChange={handleChange}
              className="w-full p-2  bg-neutral-700 border border-gray-600 text-white"
              rows={3}
              required
            />
          )}
        </div>
        <div className="flex justify-center items-center">
          <button
            type="submit"
            className="w-fit bg-gradient-to-r from-[#ac7072] via-[#e6d2d1] to-[#ad7173] hover:opacity-80 text-black py-2 px-4"
          >
            {form.scheduleAt ? "Schedule Newsletter" : "Send Newsletter"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
