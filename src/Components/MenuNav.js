import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Context/authContext";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNav } from "../Styles/StyleMenuNav";
import { TbUser } from "react-icons/tb";

const { Section, Ul, Li, Buttom } = StyleMenuNav();

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;

const SectionUser = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 10px;
`;

const IconUser = styled(TbUser)`
  padding: 5px;
  border-radius: 100%;
  border: 1px solid grey;
  width: 35px;
  height: 35px;
  margin-right: 10px;
  color: white;
`;

const NameUser = styled.p`
  color: white;
`;

const MenuNav = () => {
  const { handleLogOut } = useLogOut();
  const { user } = useAuth();

  return (
    <>
      <Section>
        <Ul>
          {user.displayName && (
            <SectionUser>
              <IconUser />
              <NameUser>{user.displayName}</NameUser>
            </SectionUser>
          )}

          {!user.displayName && (
            <SectionUser>
              <IconUser />
              <NameUser>Bienvenido Usuario!</NameUser>
            </SectionUser>
          )}

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
