import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/authContext';

export const useLogin = () => {

    const {login, logInWithGoogle} = useAuth();
    const navigate = useNavigate();
    const [user, setUser] = useState({
        email: "",
        password: "",
      });

      const [invalidEmail, setInvalidEmail] = useState("");
      const [errorPass, setErrorPass] = useState("");
      const [notUser, setNotUser] = useState("");

      const handleChnade = ({ target: { name, value } }) => {
        setUser({ ...user, [name]: value });
      };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          await login(user.email, user.password);
          navigate("/Home");
        } catch (error) {
          console.log(error.code);
    
          if (error.code === "auth/invalid-email") {
            setInvalidEmail("El e-mail ingresado no es valido.");
            setErrorPass("");
            return;
          } else {
            setInvalidEmail("");
          }
          if (error.code === "auth/missing-email") {
            setInvalidEmail("Por favor, ingresa un e-mail");
            setErrorPass("");
            return;
          } else {
            setInvalidEmail("");
          }
    
          if (error.code === "auth/wrong-password") {
            setErrorPass("La contrseña es incorrecta");
          } else {
            setErrorPass("");
          }
          if (error.code === "auth/user-not-found") {
            setNotUser("El usuario no existe");
          }
        }
      };

      const handleGoogleSign = async () => {
        await logInWithGoogle();
        navigate("/Home");
      };

  return {
    invalidEmail,
    errorPass,
    notUser,
    handleSubmit,
    handleChnade,
    handleGoogleSign

  }
}
