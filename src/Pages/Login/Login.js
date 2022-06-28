import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import imgRegister from "../../Images/Register.png";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";
import { useLogin } from "../../Hooks/useLogin";
import { StyleLogin } from "../../Styles/StyleLogin";


const {
  Main,
  Form,
  Section,
  Input,
  Label,
  Buttom,
  Img,
  Paragraph,
  Errors,
  NoAccounts,
  StyleLink,
} = StyleLogin()

const Register = () => {

  const {
    invalidEmail,
    errorPass,
    notUser,
    handleSubmit,
    handleChnade,
    handleGoogleSign,
  } = useLogin();

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
              No tienes cuenta?{" "}
              <StyleLink to={"/Register"}>Registrarse</StyleLink>
            </NoAccounts>
          </Form>
        </Section>
      </Main>
    </>
  );
};

export default Register;
