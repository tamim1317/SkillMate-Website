import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";

const ForgotPassword = () => {
  const { resetPassword } = useContext(AuthContext);
  const [email, setEmail] = useState("");

  const handleReset = (e) => {
    e.preventDefault();
    if (!email) {
      toast.error("Please enter your email");
      return;
    }

    resetPassword(email)
      .then(() => {
        toast.success("Password reset email sent! Check your inbox.");
        setEmail("");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 w-full max-w-md shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-400">
          Forgot Password
        </h2>

        <form onSubmit={handleReset} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-semibold hover:from-indigo-600 hover:to-blue-500 transition-colors mt-2">
            Send Reset Link
          </button>
        </form>

        <p className="mt-6 text-center text-gray-300">
          Remembered your password?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
