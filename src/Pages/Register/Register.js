import { async } from "@firebase/util";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/authContext";
import imgRegister from "../../Images/Register.png";
import StyleRegister from "../../Styled/StyleRegister";

const { Form, Section, Input, Label, Buttom, Img, Paragraph } = StyleRegister();

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
        console.log(error.message)
     }
  };

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
