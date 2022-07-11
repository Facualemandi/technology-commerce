import React, { useEffect } from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";
import ProductsHome from "../../Components/ProductsHome";
import Footer from "../../Components/Footer";
import { useAuth } from "../../Context/authContext";
import Loader from "../../Loader/Loader";

const Home = () => {
  const { user } = useAuth();

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

      {!user && <Loader />}
    </>
  );
};

export default Home;
