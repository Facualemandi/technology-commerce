import React from "react";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNavDesktop } from "../Styles/StyleMenuNavDesktop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtomReturn from "./ButtomReturn";
import { useAuth } from "../Context/authContext";

const { Section, Ul, Li, IconCart, Buttom } = StyleMenuNavDesktop();

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const NavSection = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const AmountProducts = styled.p`
  color: white;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  margin-right: 5px;
`;

const Inicio = styled.p`
  font-family: "Montserrat", sans-serif;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
  padding: 5px;
  border-radius: 5px;

  &&:hover {
    background-color: #52525d;
  }
`;

const InicioNavLink = styled(NavLink)`
  text-decoration: none;
`;

const MenuNavDesktop = () => {
  const { productCart } = useAuth();
  const { handleLogOut } = useLogOut();

  return (
    <Section>
      <Buttom onClick={handleLogOut}>Cerrar Sesion</Buttom>
      <InicioNavLink to="/Home">
        <Inicio>Inicio</Inicio>
      </InicioNavLink>
      <Ul>
        <Nav to={"/Notebooks"}>
          <Li>Notebooks</Li>
        </Nav>
        <Nav to={"/Perifericos"}>
          <Li>Perifericos</Li>
        </Nav>
        <Nav to={"/PlacasDeVideo"}>
          <Li>Placas de Video</Li>
        </Nav>
        <Nav to={"/Monitores"}>
          <Li>Monitores</Li>
        </Nav>
        <Nav to={"/Procesadores"}>
          <Li>Microprocesadores</Li>
        </Nav>
      </Ul>

      <NavSection to="/Cart">
        <AmountProducts>{productCart.length}</AmountProducts>
        <IconCart />
      </NavSection>
    </Section>
  );
};

export default MenuNavDesktop;
