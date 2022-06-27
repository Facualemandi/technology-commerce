import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

const Home = () => {
  const { user, logAut } = useAuth();
  

 const isLogAuth =  useNavigate()

  const handleLogOut = async () => {
    await logAut();
    isLogAuth('/')
  }



  return (
    <>
      <div>{user.email}</div>

      <button onClick={handleLogOut}>Log Out</button>

    </>
  );
};

export default Home;
