import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login= () => {
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
    <div className="relative flex items-center bg-white dark:bg-black min-h-screen p-3 md:p-0">
      <div className="absolute inset-0" />
      <div className="w-full py-6 md:py-10 relative z-10">
        <div className="max-w-md mx-auto p-4 md:p-6 bg-[#231212] dark:bg-black rounded-4xl shadow border-2 border-[#231212]">
          <h2 className="text-xl md:text-2xl font-semibold mb-3 md:mb-4 text-white dark:text-white">
            Sign in to your account
          </h2>

          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          {success ? (
            <div className="text-green-500 text-sm">
              Login successful. (This is a UI placeholder.)
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <label className="block mb-2 text-xs md:text-sm text-white dark:text-white">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 border-white w-full mb-3 p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none text-sm"
                placeholder="you@example.com"
                required
              />

              <label className="block mb-2 text-xs md:text-sm text-white dark:text-white">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 border-white w-full mb-4 p-2 rounded bg-white dark:bg-[#231212] text-black dark:text-white focus:outline-none text-sm"
                placeholder="Your password"
                required
              />

              <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 text-xs md:text-sm text-white dark:text-gray-300 gap-2 md:gap-0">
                <label className="flex items-center gap-2">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    name="remember"
                    className="form-checkbox focus:outline-none" 
                  /> 
                  Remember me
                </label>
                <Link to="/" className="underline">
                  Forgot password?
                </Link>
              </div>
<div className="flex items-center justify-center">
              <button
                className="border-2 border-white bg-white dark:bg-[#231212] hover:text-white dark:text-white hover:bg-[#422727] dark:hover:bg-gray-800 text-black p-2 px-4 rounded text-sm w-full md:w-auto"
                type="submit"
              >
                Login
              </button>
              </div>
            </form>
          )}

          <div className="mt-4 text-xs md:text-sm text-white dark:text-gray-300 text-center">
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
