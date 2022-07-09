import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export const ProtectRoute = ({ children }) => {
  const { user } = useAuth();

  useEffect(() => {
    async function getUser() {
      const data = await user;
      console.log(data);
      if (!data) return <Navigate to={"/"} />;
    }
    getUser();
  }, [user]);

  useEffect(() => {
    console.log(user);
  }, [user]);

  return <>{children}</>;
};
