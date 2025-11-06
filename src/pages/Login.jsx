import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const Login = () => {
  const { logIn, googleSignIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // Handle email/password login
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await logIn(email, password);
      toast.success("Login successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Handle Google sign-in
  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
      toast.success("Login with Google successful!");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4">
      <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 w-full max-w-md shadow-xl">
        <h2 className="text-4xl font-bold text-center mb-6 text-blue-400">Login</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
            Login
          </button>
        </form>

        <div className="my-4 text-center text-gray-300">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 bg-red-500 rounded-xl text-white font-semibold hover:bg-red-600 transition-colors mb-4"
        >
          Sign in with Google
        </button>

        <p className="mt-4 text-center text-gray-300">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-400 hover:underline">
            Sign Up
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

export default Login;
