import React, { useState } from "react";
import imgRegister from "../../Images/Venexcomputacion.png";
import { FcGoogle } from "react-icons/fc";
import { useLogin } from "../../Hooks/useLogin";
import { StyleLogin } from "../../Styles/StyleLogin";
import styled from "styled-components";

const {
  Main,
  Form,
  Section,
  Input,
  Buttom,
  Img,
  Errors,
  NoAccounts,
  StyleLink,
  SectionDesktop,
  LoginParragraph,
} = StyleLogin();

const Invitado = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  margin: 5px;
  font-weight: bold;
  display: flex;
  margin: auto;
  margin-top: 20px;
  margin-bottom: 10px;
`;

const EmailInvitado = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 5px;
  display: flex;
  margin: 5px auto;
`;

const PwInvitado = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 5px auto;
`;

const Bold = styled.b`
  margin-right: 5px;
`;

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

          <SectionDesktop>
            <Form onSubmit={handleSubmit}>
              {notUser && <Errors>{notUser}</Errors>}
              <LoginParragraph>Login</LoginParragraph>
              {/* <Label htmlFor="email">email</Label> */}
              <Input
                type={"email"}
                name="email"
                placeholder="Ingresa tu Email"
                onChange={handleChnade}
              />
              {invalidEmail && <Errors>{invalidEmail}</Errors>}

              {/* <Label htmlFor="password">Contraseña</Label> */}
              <Input
                type={"password"}
                name="password"
                placeholder="Ingresa una contraseña"
                onChange={handleChnade}
              />
              {errorPass && <Errors>{errorPass}</Errors>}

              <Buttom>Ingresar</Buttom>
            </Form>
            <Buttom
              border="1px solid rgba(209, 209, 209, 0.567)"
              bg="white"
              color="black"
              onClick={handleGoogleSign}
              hover="white"
            >
              Ingresar Con Google <FcGoogle />{" "}
            </Buttom>
            <NoAccounts>
              No tienes cuenta?{" "}
              <StyleLink to={"/Register"}>Registrarse</StyleLink>
            </NoAccounts>
            <Invitado>Querés entrar como invitado/a ?</Invitado>
            <EmailInvitado>
              <Bold>Email:</Bold> usuarioprueba@gmail.com
            </EmailInvitado>
            <PwInvitado>
              <Bold>Contraseña:</Bold> usuarioprueba
            </PwInvitado>
          </SectionDesktop>
        </Section>
      </Main>
    </>
  );
};

export default Register;
