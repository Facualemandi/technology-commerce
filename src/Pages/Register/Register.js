import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import imgRegister from "../../Images/Register.png";

import styled from "styled-components";

const Main = styled.main`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 150px;
  height: 70vh;
  border-radius: 10px;
  border: 1px solid rgba(209, 209, 209, 0.567);

  @media (min-width: 900px) {
    display: flex;
    flex-direction: row;
  }
`;

const Form = styled.form`
  height: 80vh;
  width: 90vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 900px) {
    width: 50vw;
    display: flex;
    justify-content: center;
    height: 250px;
    border: 1px solid rgba(209, 209, 209, 0.567);
  }
`;

const Input = styled.input`
  padding: 5px;
  border: 1px solid #ebebeb;
  margin: 5px;
  padding: 10px;
`;

const Label = styled.label`
  font-family: "Roboto", sans-serif;
  margin: 5px;
`;

const Buttom = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #77c1f9;
  border: none;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
  width: 90vw;

  @media (min-width: 900px) {
    width: 50vw;
  }
`;

const Img = styled.img`
  width: 90vw;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 900px) {
    border-top-right-radius: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }
`;

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
`;

const Register = () => {
  const { signUp } = useAuth();
  const navigate = useNavigate();

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
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Main>
        <Img alt="Tecnología" src={imgRegister} />

        <Form onSubmit={handleSubmit}>
          <Paragraph>Bienvenidos a Technology</Paragraph>

          <Label htmlFor="email">email</Label>
          <Input
            type={"email"}
            name="email"
            placeholder="Ingresa tu Email"
            onChange={handleChnade}
          />

          <Label htmlFor="password">Contraseña</Label>
          <Input
            type={"password"}
            name="password"
            placeholder="Ingresa una contraseña"
            onChange={handleChnade}
          />

          <Buttom>Registrarme</Buttom>
        </Form>
      </Main>
    </>
  );
};

export default Register;
