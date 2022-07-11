import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../Firebase";

export const useProducts = () => {
  const [notebook, setNotebook] = useState([]);
  const [placas, setPlacas] = useState([]);
  const [monitores, setMonitores] = useState([]);
  const [procesadores, setProcesadores] = useState([]);
  const [perifericos, setPerifericos] = useState([]);

  const [isPageNotebook, setIsPageNotebook] = useState([]);
  const [isPagePlacas, setIsPagePlacas] = useState([]);
  const [isPageMonitor, setIsPageMonitor] = useState([]);

  const [loaging, setLoaging] = useState(false);

  const productsCollection = collection(db, "Products");
  const productsPlacas = collection(db, "Placas");
  const productsMonitores = collection(db, "Monitores");
  const totalNotebooks = collection(db, "TotalNotebook");
  const totalPlacas = collection(db, "TotalPlacas");
  const totalMonitores = collection(db, "TotalMonitores");
  const totalProcesador = collection(db, "Procesadores");
  const totalPerifericos = collection(db, "Perifericos");

  const getProducts = async () => {
    setLoaging(true);
    const data = await getDocs(productsCollection);
    const placas = await getDocs(productsPlacas);
    const monitores = await getDocs(productsMonitores);
    const pageNotebooks = await getDocs(totalNotebooks);
    const pagePlacas = await getDocs(totalPlacas);
    const pageMonitores = await getDocs(totalMonitores);
    const procesadores = await getDocs(totalProcesador);
    const perifericos = await getDocs(totalPerifericos);
    setNotebook(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setPlacas(placas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setMonitores(monitores.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    setIsPageNotebook(
      pageNotebooks.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setIsPagePlacas(
      pagePlacas.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setIsPageMonitor(
      pageMonitores.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setProcesadores(
      procesadores.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );
    setPerifericos(
      perifericos.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
    );

    setLoaging(false);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    notebook,
    placas,
    loaging,
    monitores,
    isPageNotebook,
    isPagePlacas,
    isPageMonitor,
    procesadores,
    perifericos,
  };
};
