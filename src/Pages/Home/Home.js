import React, { useEffect, useState } from "react";
import Categories from "../../Components/Categories";
import Marks from "../../Components/Marks";
import Nav from "../../Components/Nav";
import Notebooks from "../../Components/Notebooks";
import SliderShow from "../../Components/SliderShow";

// Acá importmaos todo de Firebase
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
/// Llmamos a la Base de datos
import { db } from "../../Firebase";

const Home = () => {
  const [notebook, setNotebook] = useState([]);
  const [loaging, setLoaging] = useState(false)

  const productsCollection = collection(db, "Products");

  const getProducts = async () => {
    setLoaging(true)
    const data = await getDocs(productsCollection);
    setNotebook(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoaging(false)
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(notebook);
  }, [notebook]);

  return (
    <>
      <Nav />
      <SliderShow />
      <Marks />
      <Categories />
    
      <Notebooks  notebook={notebook} loaging={loaging}/>
    </>
  );
};

export default Home;
