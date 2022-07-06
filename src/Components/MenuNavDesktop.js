import React from "react";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNavDesktop } from "../Styles/StyleMenuNavDesktop";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { useAuth } from "../Context/authContext";
import { TbUser } from "react-icons/tb";

const { Section, Ul, Li, IconCart, Buttom } = StyleMenuNavDesktop();

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
  margin: 10px;
`;

const NavSection = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
const AmountProducts = styled.p`
  @media (min-width: 780px) {
    color: white;
    font-size: 22px;
    font-family: "Roboto", sans-serif;
    font-weight: lighter;
    margin-right: 5px;
  }
`;

const Inicio = styled.p`
  font-family: "Montserrat", sans-serif;
  color: white;
  cursor: pointer;
  text-decoration: none;
  transition: 0.5s;
  padding: 5px;
  border-radius: 5px;
  font-size: 16px;

  &&:hover {
    background-color: #52525d;
  }
`;

const InicioNavLink = styled(NavLink)`
  text-decoration: none;
  margin-left: 15px;
`;

const SectionUser = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const NameUser = styled.p`
  color: white;
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  font-weight: 300;
`;

const IconUser = styled(TbUser)`
  padding: 5px;
  border-radius: 100%;
  border: 1px solid grey;
  width: 25px;
  height: 25px;
  margin-right: 10px;
  color: white;
  margin-left: 20px;
`;

const ContainerUser = styled.section`
  display: none;
  @media (min-width: 780px) {
    display: flex;
    align-items: center;
    text-align: center;
    position: fixed;
    top: 0px;
    z-index: 1231231;
    background-color: #28282e;
    color: black;
    margin: 0;
    width: 100vw;
    height: 40px;
    padding-bottom: 5px;
    padding-top: 5px;
  }
`;

const MenuNavDesktop = () => {
  const { productCart, user } = useAuth();
  const { handleLogOut } = useLogOut();

  return (
    <>
      <Section>
        <ContainerUser>
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

          <Buttom onClick={handleLogOut}>Cerrar Sesion</Buttom>

          <InicioNavLink to="/Home">
            <Inicio>Inicio</Inicio>
          </InicioNavLink>
        </ContainerUser>
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
    </>
  );
};

export default MenuNavDesktop;
