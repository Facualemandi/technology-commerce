import React, { useEffect } from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";
import ProductsHome from "../../Components/ProductsHome";
import { ProtectRoute } from "../../Components/ProtectRoute";
import Footer from "../../Components/Footer";
import { useAuth } from "../../Context/authContext";
import { Navigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuth();

  useEffect(() => {
    async function getUser() {
      const data = await user;
      console.log(data);
      if (!data) return <Navigate to={"/"} />;
    }
    getUser();
  }, [user]);

  return (
    <>
      {user && (
        <>
          <Nav />
          <SliderShow />
          <Marks />
          <Categories />
          <ProductsHome />
          <Footer />
        </>
      )}
    </>
  );
};

export default Home;
