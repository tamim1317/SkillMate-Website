import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    // Basic password check
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 chars with uppercase and lowercase letters"
      );
      return;
    }

    toast.success("Signup successful!");
    navigate("/");
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Signup with Google successful!");
        navigate("/");
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 w-full max-w-md shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-400">Sign Up</h2>

        <form onSubmit={handleSignup} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-3 rounded-xl bg-white/10 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />
          <button className="py-3 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl text-white font-semibold hover:from-indigo-600 hover:to-blue-500 transition-colors mt-2">
            Sign Up
          </button>
        </form>

        <div className="my-4 text-center text-gray-300">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 bg-red-500 rounded-xl text-white font-semibold hover:bg-red-600 transition-colors mb-4"
        >
          Sign up with Google
        </button>

        <p className="mt-4 text-center text-gray-300">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-400 hover:underline">
            Login
          </Link>
        </p>

        <p className="mt-2 text-center text-gray-300">
          Forgot password?{" "}
          <Link to="/forgot-password" className="text-blue-400 hover:underline">
            Click here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
