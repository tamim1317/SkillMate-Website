import React, { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Firebase Email/Password login
    // Example using firebase auth directly
    // add your auth function from AuthContext
    toast.success("Login successful!");
    navigate(from, { replace: true });
  };

  const handleGoogleSignIn = () => {
    googleSignIn()
      .then(() => {
        toast.success("Login with Google successful!");
        navigate(from, { replace: true });
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Sign in with Google
        </button>

        <p className="mt-4 text-center">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
