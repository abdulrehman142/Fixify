import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (ev: React.FormEvent) => {
    ev.preventDefault();
    setError(null);

    if (!email.trim() || !password.trim()) {
      setError("Please enter email and password.");
      return;
    }

    // Placeholder: call login API here. We'll just simulate success.
    setSuccess(true);
  };

  return (
    <div className="relative min-h-screen flex items-center bg-[url('/Fixify_images/herobg.png')] bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black/55" />
      <div className="w-full py-10 relative z-10">
        <div className="max-w-md mx-auto p-6 bg-[#231212] dark:bg-black rounded-4xl shadow">
          <h2 className="text-2xl font-semibold mb-4 text-white dark:text-white">
            Sign in to your account
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success ? (
            <div className="text-green-500">
              Login successful. (This is a UI placeholder.)
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm text-white dark:black">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-3 p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
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
                className="w-full mb-4 p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none"
                placeholder="Your password"
                required
              />

              <div className="flex items-center justify-between mb-4 text-sm text-white dark:text-gray-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox focus:outline-none" /> Remember
                  me
                </label>
                <Link to="/" className="underline">
                  Forgot password?
                </Link>
              </div>
<div className="flex items-center justify-center">
              <button
                className="bg-white dark:bg-[#231212] hover:text-white dark:text-white hover:bg-[#422727] dark:hover:bg-gray-800 text-black p-2 px-4 rounded"
                type="submit"
              >
                Login
              </button>
              </div>
            </form>
          )}

          <div className="mt-4 text-sm text-white dark:text-gray-300">
            Don’t have an account?{" "}
            <Link to="/register" className="underline">
              Register
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
