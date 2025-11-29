import React, { useState } from "react";
import tc from "/Fixify_images/termsCondition.svg";

const ContactUs: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (e: string) => /\S+@\S+\.\S+/.test(e);

  const handleSubmit = async (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email and message.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (message.trim().length < 10) {
      setError("Message should be at least 10 characters.");
      return;
    }

    try {
      // Placeholder: replace with real API call if available
      // Example:
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify({ name, email, subject, message }) })

      // Simulate success
      setSuccess(true);
      setName("");
      setEmail("");
      setSubject("");
      setMessage("");
    } catch {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="dark:text-white dark:bg-black font-sans">
         <div className="flex flex-col md:flex-row justify-between items-center bg-[#231212] dark:bg-black text-white p-4 md:p-6 mb-4 md:mb-6 shadow-md gap-4">
        <div className="">
          <h2 className="text-3xl md:text-5xl font-bold text-center md:text-left">Contact Us</h2>
        </div>
        <img
          src={tc}
          alt="Banner"
          className="h-40 md:h-70 w-40 md:w-70"
          loading="lazy"
        />
      </div>

      <div className="max-w-4xl mx-auto px-3 md:px-4 md:px-8 py-6 md:py-8 relative z-10">

        <div className="bg-[#231212] dark:bg-black border-2 border-[#231212] dark:border-[#231212] rounded-lg shadow p-4 md:p-6">
          {error && <div className="mb-4 text-red-500 text-sm md:text-base">{error}</div>}
          {success && (
            <div className="mb-4 text-green-600 text-sm md:text-base">
              Message sent — thanks! We'll reply soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              <div>
                <label className="block text-xs md:text-sm text-white mb-1">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none text-sm"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-xs md:text-sm text-white mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none text-sm"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-xs md:text-sm text-white mb-1">
                Subject (optional)
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none text-sm"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-xs md:text-sm text-white mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white min-h-[120px] md:min-h-[140px] focus:outline-none text-sm"
                placeholder="Write your message"
                required
              />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              <button
                type="submit"
                className="bg-white dark:bg-[#231212] hover:text-white dark:text-white hover:bg-[#422727] dark:hover:bg-gray-800 text-black p-2 px-4 rounded w-full md:w-auto text-sm"
              >
                Send message
              </button>
              <div className="text-xs md:text-sm text-black md:text-white dark:text-gray-300 text-center md:text-right">
                Or email us at{" "}
                <a href="mailto:gofixify@gmail.com" className="underline">
                  support@fixify.com
                </a>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
