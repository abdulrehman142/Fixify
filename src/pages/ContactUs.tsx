import React, { useState } from "react";

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
    } catch (err) {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="relative min-h-screen flex items-start justify-center py-16 px-4 sm:px-6 lg:px-8 bg-[url('/Fixify_images/herobg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/55" />
      <div className="max-w-3xl w-full relative z-10">
        <h1 className="text-3xl font-semibold mb-4 text-white">Contact Us</h1>
        <p className="mb-6 text-gray-200">
          Have a question or need help? Send us a message and we'll get back to
          you shortly.
        </p>

        <div className="bg-white/95 dark:bg-[#0b0b0b]/95 rounded-lg shadow p-6">
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && (
            <div className="mb-4 text-green-600">
              Message sent — thanks! We'll reply soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded border bg-transparent text-black dark:text-white"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded border bg-transparent text-black dark:text-white"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Subject (optional)
              </label>
              <input
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                className="w-full p-2 rounded border bg-transparent text-black dark:text-white"
                placeholder="Subject"
              />
            </div>

            <div>
              <label className="block text-sm text-gray-700 dark:text-gray-300 mb-1">
                Message
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 rounded border bg-transparent text-black dark:text-white min-h-[140px]"
                placeholder="Write your message"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-[#231212] text-white px-4 py-2 rounded"
              >
                Send message
              </button>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                Or email us at{" "}
                <a href="mailto:support@fixify.com" className="underline">
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
