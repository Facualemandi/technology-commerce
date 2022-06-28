import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Context/authContext";

export const UseRegister = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

  const [invalidEmail, setInvalidEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChnade = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signUp(user.email, user.password);
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
      if (error.code === "auth/email-already-in-use") {
        setInvalidEmail("El e-mail ya esta en uso.");
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

      if (error.code === "auth/weak-password") {
        setErrorPass("Mínimo 6 caracteres.");
      } else {
        setErrorPass("");
      }
    }
  };

  return {
    invalidEmail,
    errorPass,
    handleChnade,
    handleSubmit,
  };
};
