import React, { useState } from "react";


const Complaints = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
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
      setMessage("");
    } catch {
      setError("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="flex dark:text-white justify-between dark:bg-black font-sans">
        <div className="flex flex-col justify-center p-2 m-2">
      <div className="text-2xl font-bold pl-4 ml-4">
        Resolving your complaints!
      </div>
      <div className="pl-4 ml-4 p-2 m-2">
        Help us improve Fixify — share your<br/> complaint so we can serve you
        better.
      </div>
      </div>
      <div className="w-full max-w-3xl m-4 px-4 sm:px-6 lg:px-8 py-8 relative z-10">
        <div className="bg-[#231212] dark:bg-black border-2 border-[#231212] dark:border-[#231212] rounded-lg shadow p-8">
          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success && (
            <div className="mb-4 text-green-600">
              Message sent — thanks! We'll reply soon.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white mb-1">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                  placeholder="Your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm text-white mb-1">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                  placeholder="you@example.com"
                  required
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-white mb-1">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white min-h-[80px] focus:outline-none"
                placeholder="Write your message"
                required
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-white dark:bg-[#231212] hover:text-white dark:text-white hover:bg-[#422727] dark:hover:bg-gray-800 text-black p-2 px-4 rounded"
              >
                Send message
              </button>
              <div className="text-sm text-white dark:text-gray-300">
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

export default Complaints;
