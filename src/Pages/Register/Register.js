import React, { useState } from "react";
import { useAuth } from "../../Context/authContext";
import styled from "styled-components";
import imgRegister from "../../Images/Register.png";
import StyleRegister from "../../Styled/StyleRegister";

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


  const Form = styled.form`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 70vw;
  height: auto;
  margin: auto;
  border: 1px solid #ebebeb;
  border-radius: 10px;
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
  padding: 5px;
  border-radius: 5px;
  background-color: #77c1f9;
  border: none;
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
  box-shadow: 0px 0px 10px 0px rgba(159, 159, 159, 0.464);
`;

const Img = styled.img`
  width: 100%;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Paragraph = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  font-weight: bold;
  margin: 10px auto;
`;



  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Section>
          <Img alt="Tecnología" src={imgRegister} />

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
        </Section>
      </Form>
    </>
  );
};

export default Register;
