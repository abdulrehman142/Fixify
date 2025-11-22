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
    <div className="min-h-screen flex items-center bg-[url('/Fixify_images/herobg.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full py-20 bg-black/55">
        <div className="max-w-md mx-auto p-6 bg-white/95 dark:bg-[#0b0b0b]/95 rounded shadow">
          <h2 className="text-2xl font-semibold mb-4 text-black dark:text-white">
            Sign in to your account
          </h2>

          {error && <div className="mb-4 text-red-500">{error}</div>}
          {success ? (
            <div className="text-green-500">
              Login successful. (This is a UI placeholder.)
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full mb-3 p-2 rounded border bg-transparent text-black dark:text-white"
                placeholder="you@example.com"
                required
              />

              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full mb-4 p-2 rounded border bg-transparent text-black dark:text-white"
                placeholder="Your password"
                required
              />

              <div className="flex items-center justify-between mb-4 text-sm text-gray-600 dark:text-gray-300">
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="form-checkbox" /> Remember
                  me
                </label>
                <Link to="/" className="underline">
                  Forgot password?
                </Link>
              </div>

              <button
                className="w-full bg-[#231212] text-white p-2 rounded"
                type="submit"
              >
                Login
              </button>
            </form>
          )}

          <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
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
