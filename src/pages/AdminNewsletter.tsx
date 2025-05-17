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
      sendToAll: form.sendToAll, // ✅ Properly include the flag
      emails: form.sendToAll
        ? undefined // ✅ Don't include dummy email
        : form.emails.split(",").map((email) => email.trim()),
    };

    // console.log(payload);
    // console.log(`${BASE_URL}/send-newsletter`);

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
    <form
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto p-6 bg-white shadow rounded space-y-4"
    >
      <h2 className="text-xl font-semibold">Send Newsletter</h2>

      <div className="space-y-2">
        <label>Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="space-y-2">
        <label>Title</label>
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="space-y-2">
        <label>Content</label>
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          className="textarea"
          rows={5}
          required
        />
      </div>

      <div className="space-y-2">
        <label>CTA Text</label>
        <input
          name="ctaText"
          value={form.ctaText}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="space-y-2">
        <label>CTA URL</label>
        <input
          type="url"
          name="ctaUrl"
          value={form.ctaUrl}
          onChange={handleChange}
          className="input"
          required
        />
      </div>

      <div className="space-y-2">
        <label>Image URL (optional)</label>
        <input
          name="imageUrl"
          value={form.imageUrl}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div className="space-y-2">
        <label>Schedule At (optional)</label>
        <input
          type="datetime-local"
          name="scheduleAt"
          value={form.scheduleAt}
          onChange={handleChange}
          className="input"
        />
      </div>

      <div className="space-y-2">
        <label className="block mb-1">Recipients</label>
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            name="sendToAll"
            checked={form.sendToAll}
            onChange={handleChange}
          />
          <span>Send to All Subscribers</span>
        </label>

        {!form.sendToAll && (
          <textarea
            name="emails"
            placeholder="Enter comma-separated emails"
            value={form.emails}
            onChange={handleChange}
            className="textarea"
            rows={3}
            required
          />
        )}
      </div>

      <button type="submit" className="btn btn-primary w-full">
        {form.scheduleAt ? "Schedule Newsletter" : "Send Newsletter"}
      </button>
    </form>
  );
};

export default NewsletterForm;
