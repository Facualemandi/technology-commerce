import { createContext, useContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase";

const authContext = createContext();

export const useAuth = () => {
  const context = useContext(authContext);

  return context;
};

export function AuthProvider({ children }) {
  const signUp = async (email, password) => {
    await createUserWithEmailAndPassword(auth, email, password);
  };

  return (
    <authContext.Provider value={{ signUp }}>{children}</authContext.Provider>
  );
}
