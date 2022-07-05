import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNav } from "../Styles/StyleMenuNav";

const { Section, Ul, Li, Buttom } = StyleMenuNav();

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const MenuNav = () => {
  const { handleLogOut } = useLogOut();

  return (
    <>
      <Section>
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

        <Buttom onClick={handleLogOut}>Cerrar Sesion</Buttom>
      </Section>
    </>
  );
};

export default MenuNav;
