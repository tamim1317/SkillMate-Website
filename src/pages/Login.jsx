import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { toast } from "react-hot-toast";

const Login = () => {
  const { user, googleSignIn, logIn } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // redirect path after login
  const from = location.state?.from?.pathname || "/";

  // handle email/password login
  const handleSubmit = (e) => {
    e.preventDefault();
    logIn(email, password)
      .then((result) => {
        toast.success("Login successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // handle Google login
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        toast.success("Login with Google successful!");
        navigate(from, { replace: true });
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">
          Login
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your email"
            />
          </div>

          <div>
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Your password"
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <Link
              to="/forget-password"
              className="text-blue-500 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        <div className="my-4 text-center">OR</div>

        <button
          onClick={handleGoogleSignIn}
          className="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition flex justify-center items-center gap-2"
        >
          Sign in with Google
        </button>

        <p className="mt-4 text-center text-sm">
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
