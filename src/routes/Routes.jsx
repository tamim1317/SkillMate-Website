import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Profile from "../pages/Profile";
import SkillDetails from "../pages/SkillDetails";

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
        element: <Profile></Profile>
      },

      { path: "/skills/:id", 
        element: <SkillDetails></SkillDetails>
      },
    ],
  },
]);

export default router;
