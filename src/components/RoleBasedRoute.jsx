import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const RoleBasedRoute = ({ allowed }) => {
  const { user } = useAuth();

  if (!user) return <Navigate to="/" replace />;
  if (!allowed.includes(user.role))
    return <Navigate to="/unauthorized" replace />;

  return <Outlet />;
};

export default RoleBasedRoute;
