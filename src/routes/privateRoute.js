  import React from "react";
  import { Navigate } from "react-router-dom";
import { useUser } from "../context/context";


  const ProtectedRoute = ({ element, roles }) => {
    const {user}= useUser()

    if (!user) {
      return <Navigate to="/login" />;
    }

    if (roles && !roles.includes(user.role.toLowerCase())) {
      return <Navigate to="/not-authorized" />;
    }

    return <>{element}</>;
  };

  export default ProtectedRoute;
