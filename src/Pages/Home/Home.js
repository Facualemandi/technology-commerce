import React from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import SliderShow from "../../Components/SliderShow";

const Home = () => {
  return (
    <>
      <Nav />
      <SliderShow />
      <Marks />
      <Categories />
    </>
  );
};

export default Home;
