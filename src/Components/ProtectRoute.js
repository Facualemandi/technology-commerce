import { async } from "@firebase/util";
import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export const ProtectRoute = ({ children }) => {
  const { user } = useAuth();

  useEffect(() => {
    async function getUser() {
      const data = await user;

      if (!data) return <Navigate to={"/"} />;
    }
    getUser();
  }, [user]);

  useEffect(() => {}, [user]);

  return <>{children}</>;
};
