import React, { useLayoutEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { verifyToken } from "./app/api/userAPI";
// import useAuth from "./hooks/auth";
const ProtectedRoute = ({ children }) => {
  // let verified = false;
  let checked = false;
  const [verified, setVerified] = useState(false);
  useLayoutEffect(() => {
    const x = async () => {
      const c = await verifyToken();
      setVerified(c);
      checked = true;
    };
    x();
  }, []);
  console.log(verified);
  return verified ? children : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
