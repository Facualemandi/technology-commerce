import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export const useLogOut = () => {
  const { logAut } = useAuth();
  const isLogAuth = useNavigate();

  const handleLogOut = async () => {
    await logAut();
    isLogAuth("/");
  };

  return {
    handleLogOut
  };
};
