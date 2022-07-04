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

  const logAut = () => {
    signOut(auth);
    console.log(user);
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
      }}
    >
      {children}
    </authContext.Provider>
  );
}
