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
import PlacasDeVideo from "../../Components/PlacasDeVideo";

const Home = () => {
  const [notebook, setNotebook] = useState([]);
  const [placas, setPlacas] = useState([])

  const [loaging, setLoaging] = useState(false)

  const productsCollection = collection(db, "Products");
  const productsPlacas = collection(db, "Placas");

  const getProducts = async () => {
    setLoaging(true)
    const data = await getDocs(productsCollection);
    const placas =  await getDocs(productsPlacas)
    setNotebook(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPlacas(placas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setLoaging(false)
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    console.log(placas);
  }, [notebook]);

  return (
    <>
      <Nav />
      <SliderShow />
      <Marks />
      <Categories />
      <Notebooks  notebook={notebook} loaging={loaging}/>
      <PlacasDeVideo placas={placas} loaging={loaging} />
  
    </>
  );
};

export default Home;
