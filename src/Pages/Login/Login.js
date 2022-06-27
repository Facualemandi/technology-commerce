import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import imgRegister from "../../Images/Register.png";
import { FcGoogle } from "react-icons/fc";

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
  border: 1px solid rgba(209, 209, 209, 0.567);
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
  font-family: "Monserrat", sans-serif;
  margin: 5px;
`;

const Buttom = styled.button`
  padding: 10px;
  border-radius: 5px;
  background-color: #77c1f9;
  border: none;
  font-family: "Montserrat", sans-serif;
  color: white;
  margin: 5px;
  background-color: ${(props) => props.bg};
  color: ${({ color }) => color};
  border: ${({ border }) => border};
  cursor: pointer;

  @media (min-width: 780px) {
    margin: 5px;
    &&:hover{
      background-color: #e8fffa;
      box-shadow: 0px 0px 5px 0px rgba(135, 135, 135, 0.402);
      color: black;
    }
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

const NoAccounts = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

const StyleLink = styled(NavLink)`
  margin-left: 5px;
  text-decoration: none;
  color: black;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
  
  &&:hover{
    border-bottom: 1px solid black;
  }
`;

const Register = () => {
  const { login, logInWithGoogle } = useAuth();
  const navigate = useNavigate();

  const [invalidEmail, setInvalidEmail] = useState("");
  const [errorPass, setErrorPass] = useState("");
  const [notUser, setNotUser] = useState("");

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChnade = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };

  const handleGoogleSign = async () => {
    await logInWithGoogle();
    navigate("/");
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
      if (error.code === "auth/user-not-found") {
        setNotUser("El usuario no existe");
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
            {notUser && <Errors>{notUser}</Errors>}

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
            <Buttom
              border="1px solid rgba(209, 209, 209, 0.567)"
              bg="white"
              color="black"
              onClick={handleGoogleSign}
            >
              Ingresar Con Google <FcGoogle />{" "}
            </Buttom>
            <NoAccounts>
              No tienes cuenta? <StyleLink to={"/Register"}>Registrarse</StyleLink>
            </NoAccounts>
          </Form>
        </Section>
      </Main>
    </>
  );
};

export default Register;
