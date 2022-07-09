import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export const ProtectRoute = ({ children }) => {
  const { user, getToken } = useAuth();

  if (!getToken) {
    <Navigate to={"/"} />;
  } else {
    <Navigate to={"/Home"} />;
  }

  return <>{children}</>;
};
