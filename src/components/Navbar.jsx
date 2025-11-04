// src/components/Navbar.jsx
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SkillSwap
        </Link>

        {/* Menu */}
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-blue-500">
            Home
          </Link>
          {user && (
            <Link to="/profile" className="hover:text-blue-500">
              My Profile
            </Link>
          )}

          {user ? (
            <div className="flex items-center space-x-2">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName}
                title={user.displayName}
                className="w-10 h-10 rounded-full"
              />
              <button
                onClick={logOut}
                className="px-3 py-1 bg-red-500 text-white rounded hover:bg-red-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <>
              <Link
                to="/login"
                className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600"
              >
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
