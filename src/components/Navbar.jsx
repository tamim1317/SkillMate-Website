import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import toast from 'react-hot-toast'; // Assuming you use react-hot-toast

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
  logOut()
    .then(() => toast.success("Logged out successfully!"))
    .catch((error) => toast.error(error.message));
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">
          SkillMate
        </Link>

        {/* Nav Links */}
        <div className="flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-blue-600 font-medium"
                : "text-gray-700 hover:text-blue-600"
            }
          >
            My Profile
          </NavLink>

          {/* Conditional Rendering */}
          {user ? (
            <div className="flex items-center space-x-4">
              {/* Avatar with hover name */}
              <div className="relative group">
                <img
                  src={user.photoURL || "https://i.ibb.co/2g9R7zD/default-avatar.png"}
                  alt="User Avatar"
                  className="w-10 h-10 rounded-full border-2 border-blue-500 cursor-pointer"
                />
                <div className="absolute bottom-[-35px] left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition">
                  {user.displayName || "User"}
                </div>
              </div>

              {/* Logout button */}
              <button
                onClick={handleLogOut}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-x-3">
              <Link
                to="/login"
                className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition"
              >
                Login
              </Link>
              <Link
                to="/signup"
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
              >
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
