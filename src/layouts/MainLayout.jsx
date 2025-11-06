// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
// Assuming you install and use react-hot-toast
import { Toaster } from 'react-hot-toast'; 

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer></Footer>
      {/* Add Toaster here for global toast visibility */}
      <Toaster /> 
    </div>
  );
};
export default MainLayout;