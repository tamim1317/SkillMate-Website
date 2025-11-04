import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 px-6 py-3 shadow">
      <div className="flex-1">
        <Link to="/" className="text-2xl font-bold">SkillSwap</Link>
      </div>
      <div className="flex gap-4">
        <NavLink to="/" className="hover:text-blue-600">Home</NavLink>
        <NavLink to="/profile" className="hover:text-blue-600">My Profile</NavLink>
        <NavLink to="/login" className="hover:text-blue-600">Login</NavLink>
        <NavLink to="/signup" className="hover:text-blue-600">Signup</NavLink>
      </div>
    </div>
  );
};

export default Navbar;