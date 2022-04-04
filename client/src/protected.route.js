import React from "react";
import { Route, Navigate, Outlet } from "react-router-dom";
import { verifyToken } from "./app/api/userAPI";
//TODO
/*
1 -> localstorage vs cookies search for jwt token -> localstorage
2 -> check if token exists and if it is valid
2.1 -> methods to validate this in api
3 -> complete protectedroute to validate routes

*/
const ProtectedRoute = () => {
  const verify = async () => {
    return await verifyToken().then((res) => {
      //   console.log(res);
      return res;
    });
  };
  //   const x = async () => {
  //     const y = await verify();
  //     // console.log(y);
  //     return y;
  //   };
  const y = verify().then((value) => {
    return value;
  });
  console.log(y);
  return verify() ? <Outlet /> : <Navigate replace to="/login" />;
};

export default ProtectedRoute;
