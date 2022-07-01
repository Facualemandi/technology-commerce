import React, { useEffect, useState } from 'react'
import { collection, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from '../Firebase';

export const useProducts = () => {

    const [notebook, setNotebook] = useState([]);
    const [placas, setPlacas] = useState([]);
    const [monitores, setMonitores] = useState([]);
    
    const [loaging, setLoaging] = useState(false);

    const productsCollection = collection(db, "Products");
    const productsPlacas = collection(db, "Placas");
    const productsMonitores = collection(db, "Monitores");

    const getProducts = async () => {
        setLoaging(true);
        const data = await getDocs(productsCollection);
        const placas = await getDocs(productsPlacas);
        const monitores = await getDocs(productsMonitores);
        setNotebook(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setPlacas(placas.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setMonitores(monitores.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        setLoaging(false);
      };

      useEffect(() => {
        getProducts();
      }, []);
      

  return{
    notebook,
    placas,
    monitores,
    loaging,
  }
}
