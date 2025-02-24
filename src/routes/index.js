import React from "react";
import { useRoutes } from "react-router-dom";
import ProtectedRoute from "./privateRoute";
import Home from "../pages/home/Home";
import Login from "../pages/auth/login/Login";
import Register from "../pages/auth/register/Register";
import Admin from "../pages/admin/Admin";
import NotAuthorized from "../pages/not-authorized/NotAuthorized";

// Route configuration
const routes = [
    {
        path: "/",
        element: (
          <ProtectedRoute
            element={<Home />}
            roles={["user","admin"]}
          />
        ),
      },
      {
        path: "/admin",
        element: (
          <ProtectedRoute
            element={<Admin />}
            roles={["admin"]}
          />
        ),
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path: "/register",
        element: <Register/>
      },
      {
        path: "/not-authorized",
        element: <NotAuthorized/>,
      },
];

const AppRoutes = () => {
    return useRoutes(routes);
};

export default AppRoutes;
