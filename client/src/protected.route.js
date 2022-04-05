import React, { useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "./app/api/userAPI";
//TODO
/*
1 -> localstorage vs cookies search for jwt token -> localstorage
2 -> check if token exists and if it is valid
2.1 -> methods to validate this in api
3 -> complete protectedroute to validate routes

*/
const ProtectedRoute = ({ children }) => {
  const [routeTo, setRouteTo] = useState(children);
  // var routeTo = childr
  //   var routeTo = children;
  const c = verifyToken();

  c.then((value) => {
    console.log(value);
    routeTo = value
      ? setRouteTo((prev) => children)
      : setRouteTo((prev) => <Navigate replace to="/login" />);
  }).catch((err) => {
    console.log(err);
    setRouteTo((prev) => <Navigate replace to="/login" />);
  });

  //   console.log(c);
  return routeTo;
  //   return verify() ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
