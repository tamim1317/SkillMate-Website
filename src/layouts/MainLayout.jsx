import { Outlet } from "react-router";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const MainLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[80vh] p-4">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;