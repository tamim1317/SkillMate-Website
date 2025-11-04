// src/layouts/MainLayout.jsx
import React from "react";
import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <footer className="bg-gray-100 text-center py-4">
        © 2025 SkillSwap. All rights reserved.
      </footer>
    </div>
  );
};

export default MainLayout;
