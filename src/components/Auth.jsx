import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Auth = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) return <p>Loading...</p>; // show loading while checking auth

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children; // ✅ render the protected component
};

export default Auth;
