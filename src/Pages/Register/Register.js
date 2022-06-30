import React, { useState } from "react";
import venex from "../../Images/Venexcomputacion.png";
import { StyleRegister } from "../../Styles/StyleRegister";
import { UseRegister } from "../../Hooks/UseRegister";
import { StyleLogin } from "../../Styles/StyleLogin";

const { Main, Form, Errors, Return, RegParr } = StyleRegister();

const { Buttom, Section, Img, Input, SectionDesktop, } = StyleLogin();

const Register = () => {
  const { invalidEmail, errorPass, handleChnade, handleSubmit } = UseRegister();


  return (
    <>
      <Main>
        <Section>
          <Img alt="Tecnología" src={venex} />

          <SectionDesktop>
            <RegParr>Registrarse</RegParr>

            <Form onSubmit={handleSubmit}>
              <Input
                type={"email"}
                name="email"
                placeholder="Ingresa un Email"
                onChange={handleChnade}
              />
              {invalidEmail && <Errors>{invalidEmail}</Errors>}

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
          </SectionDesktop>
        </Section>
      </Main>
    </>
  );
};

export default Register;
