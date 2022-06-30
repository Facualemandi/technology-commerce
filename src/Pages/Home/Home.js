import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";
import { useAuth } from "../../Context/authContext";

const Home = () => {
  const { user, logAut, form } = useAuth();
  const isLogAuth = useNavigate();
  const handleLogOut = async () => {
    await logAut();
    isLogAuth("/");
  };

  return (
    <>
      <Nav />
      <SliderShow />
      <button onClick={handleLogOut}>Log Out</button>
    </>
  );
};

export default Home;
