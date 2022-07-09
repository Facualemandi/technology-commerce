import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../Firebase";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [producto, setProducto] = useState([]);
  const [productCart, setProductCart] = useState([]);
  const [amount, setAmount] = useState(0);
  const [modalAdd, setModalAdd] = useState(false);

  const [getToken, setGetToken] = useState("");

  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  const login = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logInWithGoogle = async () => {
    const googleProvider = new GoogleAuthProvider();
    await signInWithPopup(auth, googleProvider);
  };

  useEffect(() => {
    if (user) {
      localStorage.setItem("TOKENUSER", user.accessToken);
      const obtenToken = localStorage.getItem("TOKENUSER");
      // console.log(obtenToken);
      setGetToken(obtenToken)
    }
    if(!user){
      console.log('Usuario Deslogueado')
    }
    console.log(user);
  }, [user]);

  useEffect(() => {
    // console.log(getToken);
  }, [getToken]);

  const logAut = () => {
    localStorage.removeItem("TOKENUSER");
    signOut(auth);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, [user]);

  const handleProduct = (product) => {
    setProducto(product);
  };

  const addAmount = () => {
    setAmount(amount + 1);
  };
  const deleteAmount = () => {
    if (amount > 0) {
      setAmount(amount - 1);
    }
  };

  const addProductCart = (product, id) => {
    if (amount > 0) {
      if (productCart.find((obj) => obj.id === id)) {
        // console.log("Producto ya agrregadao");
        setAmount(0);
      } else {
        setProductCart([...productCart, product]);
        product.amount = amount;
        setModalAdd(true);
        setAmount(0);
        setTimeout(() => {
          setModalAdd(false);
        }, 1500);
      }
    }
  };

  return (
    <authContext.Provider
      value={{
        signUp,
        login,
        user,
        logAut,
        logInWithGoogle,
        handleProduct,
        producto,
        amount,
        addAmount,
        deleteAmount,
        addProductCart,
        productCart,
        setProductCart,
        modalAdd,
        getToken
      }}
    >
      {children}
    </authContext.Provider>
  );
}
