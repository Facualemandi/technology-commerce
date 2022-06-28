import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import imgRegister from "../../Images/Register.png";

import styled from "styled-components";
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
  Paragraph,
  Errors,
  Return,
} = StyleRegister();

const Register = () => {
  const { invalidEmail, errorPass, handleChnade, handleSubmit } = UseRegister();

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

            <Buttom>Registrarme</Buttom>

            <Return to={"/"}>Volver</Return>
          </Form>
        </Section>
      </Main>
    </>
  );
};

export default Register;
