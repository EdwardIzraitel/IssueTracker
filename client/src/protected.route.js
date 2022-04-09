import React, { useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { verifyToken } from "./app/api/userAPI";
import useAuth from "./hooks/auth";
const ProtectedRoute = ({ children }) => {
  const isVerified = useAuth();
  console.log(isVerified);
  return isVerified ? children : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
