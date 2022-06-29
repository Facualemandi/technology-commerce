import React, { useState } from "react";
import imgRegister from "../../Images/Venexcomputacion.png";
import { FcGoogle } from "react-icons/fc";
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
  SectionDesktop,
} = StyleLogin();

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
            <Buttom
              border="1px solid rgba(209, 209, 209, 0.567)"
              bg="white"
              color="black"
              onClick={handleGoogleSign}
              hover='white'
            >
              Ingresar Con Google <FcGoogle />{" "}
            </Buttom>
            <NoAccounts>
              No tienes cuenta?{" "}
              <StyleLink to={"/Register"}>Registrarse</StyleLink>
            </NoAccounts>
          </SectionDesktop>
        </Section>
      </Main>
    </>
  );
};

export default Register;
