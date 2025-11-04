import React, { useState, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Signup = () => {
  const { googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [photo, setPhoto] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();

    // Password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      toast.error(
        "Password must be at least 6 chars, with uppercase and lowercase letters"
      );
      return;
    }

    // Firebase signup logic
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>
        <form onSubmit={handleSignup} className="space-y-4">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Photo URL</label>
            <input
              type="text"
              value={photo}
              onChange={(e) => setPhoto(e.target.value)}
              className="w-full border rounded px-3 py-2 focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
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
            Sign Up
          </button>
        </form>

        <button
          onClick={handleGoogleSignIn}
          className="w-full mt-4 bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Sign up with Google
        </button>

        <p className="mt-4 text-center">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-500 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
