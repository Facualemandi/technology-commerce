import React, { useState } from "react";
import { useAuth } from "../../Context/authContext";

const Register = () => {
  
  const { signUp } = useAuth();

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChnade = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    signUp(user.email, user.password);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input
          type={"email"}
          name="email"
          placeholder="Ingresa tu Email"
          onChange={handleChnade}
        />

        <label htmlFor="password">Contraseña</label>
        <input
          type={"password"}
          name="password"
          placeholder="Ingresa una contraseña"
          onChange={handleChnade}
        />

        <button>Submit</button>
      </form>
    </>
  );
};

export default Register;
