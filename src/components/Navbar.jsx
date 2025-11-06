import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import AvatarName from "./AvatarName";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-gray-800 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-blue-400">
          SkillSwap
        </Link>

        <div className="flex items-center gap-6">
          <Link to="/" className="hover:text-blue-400 transition">Home</Link>
          {user ? (
            <>
              <Link to="/profile" className="hover:text-blue-400 transition">Profile</Link>
              <button
                onClick={logOut}
                className="px-4 py-2 bg-red-500 rounded-lg hover:bg-red-600 transition"
              >
                Logout
              </button>
              <AvatarName />
            </>
          ) : (
            <>
              <Link to="/login" className="hover:text-blue-400 transition">Login</Link>
              <Link to="/signup" className="px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600 transition">
                Signup
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
