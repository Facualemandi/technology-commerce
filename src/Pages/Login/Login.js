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

  @media (min-width: 780px) {
    display: flex;
    flex-direction: row;
  }
`;

const Form = styled.form`
  width: 90vw;
  display: flex;
  flex-direction: column;

  @media (min-width: 780px) {
    width: 40vw;
    display: flex;
    justify-content: center;
    height: 400px;
    margin-left: 10px;
  }
`;
const Section = styled.section`
  border: 2px solid rgba(209, 209, 209, 0.567);
  height: 75vh;
  border-radius: 10px;

  @media (min-width: 780px) {
    height: auto;
    display: flex;
    border-radius: 10px;
    border: 2px solid rgba(209, 209, 209, 0.567);
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
  margin: 5px;

  @media (min-width: 780px) {
    margin: 5px;
  }
`;

const Img = styled.img`
  width: 90vw;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;

  @media (min-width: 780px) {
    border-top-right-radius: 0px;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: 400px;
    width: 40vw;
  }
`;

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
`;

const Errors = styled.p`
  color: red;
  font-size: 12px;
  margin-left: 5px;
  font-family: "Roboto", sans-serif;
`;

const Register = () => {
  const { login } = useAuth();
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
      await login(user.email, user.password);
      navigate("/");
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
    }
  };

  return (
    <>
      <Main>
        <Section>
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
            {invalidEmail && <Errors>{invalidEmail}</Errors>}

            <Label htmlFor="password">Contraseña</Label>
            <Input
              type={"password"}
              name="password"
              placeholder="Ingresa una contraseña"
              onChange={handleChnade}
            />
            {errorPass && <Errors>{errorPass}</Errors>}

            <Buttom>Ingresar</Buttom>
          </Form>
        </Section>
      </Main>
    </>
  );
};

export default Register;
