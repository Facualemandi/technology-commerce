import React from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import Notebooks from "../../Components/Notebooks";
import SliderShow from "../../Components/SliderShow";
import PlacasDeVideo from "../../Components/PlacasDeVideo";
import Monitores from "../../Components/Monitores";
import ProductsHome from "../../Components/ProductsHome";

const Home = () => {


  return (
    <>
      <Nav />
      <SliderShow />
      <Marks />
      <Categories />
      <ProductsHome/>
      {/* <Notebooks />
      <PlacasDeVideo />
      <Monitores /> */}
    </>
  );
};

export default Home;
