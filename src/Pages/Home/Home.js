import React from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";
import ProductsHome from "../../Components/ProductsHome";

const Home = () => {
  return (
    <>
      <Nav />
      <SliderShow />
      <Marks />
      <Categories />
      <ProductsHome />
    </>
  );
};

export default Home;
