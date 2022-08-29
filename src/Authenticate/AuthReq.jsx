import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const AuthReq = ({ children }) => {
  const auth = useSelector((store) => store.AuthReducer.isAuth);
  //console.log(auth)
  if (!auth) {
    return <Navigate to="/" replace />;
  }
  return children;
};

export default AuthReq;
