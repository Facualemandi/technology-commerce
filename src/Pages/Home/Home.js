import React from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";
import ProductsHome from "../../Components/ProductsHome";
import { ProtectRoute } from "../../Components/ProtectRoute";
import Footer from "../../Components/Footer";


const Home = () => {
  


  return (
    <>
      <ProtectRoute>
        <Nav />
        <SliderShow />
        <Marks />
        <Categories />
        <ProductsHome />
        <Footer />
      </ProtectRoute>
    </>
  );
};

export default Home;
