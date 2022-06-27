import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";

const Home = () => {
  const { user, logAut } = useAuth();

 const isLogAuth =  useNavigate()

  const handleLogOut = async () => {
    await logAut();
    isLogAuth('/Login')
  }


  if(user && <p>hola</p>)

  return (
    <>
      <div>{user.email}</div>

      <button onClick={handleLogOut}>Log Out</button>

    </>
  );
};

export default Home;
