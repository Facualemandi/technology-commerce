import React from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import Notebooks from "../../Components/Notebooks";
import SliderShow from "../../Components/SliderShow";
import PlacasDeVideo from "../../Components/PlacasDeVideo";
import Monitores from "../../Components/Monitores";

const Home = () => {

  
  return (
    <>
      <Nav />
      <SliderShow />
      <Marks />
      <Categories />
      <Notebooks />
      <PlacasDeVideo />
      <Monitores />
    </>
  );
};

export default Home;
