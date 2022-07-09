import React from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";
import ProductsHome from "../../Components/ProductsHome";
import Footer from "../../Components/Footer";
import { useAuth } from "../../Context/authContext";
import Login from "../Login/Login";

const Home = () => {
  const { getToken } = useAuth();
  console.log(getToken);

  return (
    <>
      {getToken.length >= 1 ? (
        <>
          <Nav />
          <SliderShow />
          <Marks />
          <Categories />
          <ProductsHome />
          <Footer />
        </>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;
