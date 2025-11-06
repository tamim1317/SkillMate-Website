import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import AuthProvider from "./providers/AuthProvider.jsx";
import router from "./routes/Routes.jsx";  // ✅ your react-router file

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* ✅ Wrap entire app with AuthProvider */}
    <AuthProvider>
      {/* ✅ RouterProvider handles all routes */}
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
