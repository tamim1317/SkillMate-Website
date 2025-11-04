import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/SkillDetails";
import Auth from "../components/Auth";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      { path: "/",
        element: <Home></Home>
      },

      { path: "/login", 
        element: <Login></Login>
      },

      { path: "/signup", 
        element: <Signup></Signup>
      },

      { path: "/profile", 
        element: <Auth><Profile></Profile></Auth>
      },

      { path: "/skills/:id", 
        element: <Auth>
            <SkillDetails></SkillDetails>
        </Auth>
      },
    ],
  },
]);

export default router;
