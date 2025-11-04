import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/Routes";
import AuthProvider from "./providers/AuthProvider";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "aos/dist/aos.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
      </RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
