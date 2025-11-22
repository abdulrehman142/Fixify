import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const validateEmail = (e: string) => {
    return /\S+@\S+\.\S+/.test(e);
  };

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (!name.trim() || !email.trim() || !password.trim() || !confirm.trim()) {
      setError("Please fill in all fields.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    // Placeholder: here you'd call your API to register the user.
    setSuccess(true);
  };

  return (
    <div className="relative min-h-screen flex items-center bg-[url('/Fixify_images/herobg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/55" />
      <div className="w-full py-10 relative z-10">
        <div className="max-w-md mx-auto p-6 bg-[#231212] dark:bg-black rounded-4xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">
            Create an account
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success ? (
            <div className="text-green-500">
              Registration successful. You can now{" "}
              <Link to="/login" className="underline">
                login
              </Link>
              .
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm text-white dark:white">
                Full name
              </label>
              <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full mb-3 p-2 rounded border-3xl bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                placeholder="Jane Doe"
                required
              />

              <label className="block mb-2 text-sm text-white dark:text-white">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-3 p-2 rounded border-3xl bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                placeholder="you@example.com"
                required
              />

              <label className="block mb-2 text-sm text-white dark:text-white">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-3 p-2 rounded border-3xl bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                placeholder="Enter a password"
                required
              />

              <label className="block mb-2 text-sm text-white dark:black">
                Confirm password
              </label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                className="w-full mb-3 p-2 rounded border-3xl bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                placeholder="Repeat your password"
                required
              />
<div className="items-center justify-center flex">
              <button
                className="bg-white dark:bg-[#231212] dark:text-white hover:bg-[#422727] dark:hover:bg-gray-800  hover:text-white text-black p-2 px-4 m-2 rounded"
                type="submit"
              >
                Register
              </button>
              </div>
            </form>
          )}

          <div className="mt-4 text-sm text-white dark:white">
            Already have an account?{" "}
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
