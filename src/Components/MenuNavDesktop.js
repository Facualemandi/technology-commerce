import React from "react";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNavDesktop } from "../Styles/StyleMenuNavDesktop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import ButtomReturn from "./ButtomReturn";

const { Section, Ul, Li, IconCart, Buttom } = StyleMenuNavDesktop();

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const MenuNavDesktop = () => {
  const { handleLogOut } = useLogOut();

  return (
    <Section>
      <Buttom onClick={handleLogOut}>Cerrar Sesion</Buttom>
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
      <IconCart />
    </Section>
  );
};

export default MenuNavDesktop;
