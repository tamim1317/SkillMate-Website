import React from "react";
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Outlet } from "react-router-dom";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen flex flex-col">
      <header>
        <Navbar></Navbar>
      </header>

      <main className="flex-grow">
        <Outlet></Outlet>
      </main>

        <Footer></Footer>
       <Toaster/>
    </div>
  );
};

export default MainLayout;
