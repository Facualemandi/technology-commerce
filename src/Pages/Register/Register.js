import React from "react";
import venex from "../../Images/Venexcomputacion.png";
import { StyleRegister } from "../../Styles/StyleRegister";
import { UseRegister } from "../../Hooks/UseRegister";

const {
  Main,
  Form,
  Section,
  Input,
  Label,
  Buttom,
  Img,
  Errors,
  Return,
} = StyleRegister();

const Register = () => {
  const { invalidEmail, errorPass, handleChnade, handleSubmit } = UseRegister();

  return (
    <>
      <Main>
        <Section>
          <Img alt="Tecnología" src={venex} />

          <Form onSubmit={handleSubmit}>
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

            <Buttom>Registrarme</Buttom>

            <Return to={"/"}>Volver</Return>
          </Form>
        </Section>
      </Main>
    </>
  );
};

export default Register;
