import React from "react";
import styled from "styled-components";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNav } from "../Styles/StyleMenuNav";

const { Section, Ul, Li, Buttom } = StyleMenuNav();

const MenuNav = () => {
  const { handleLogOut } = useLogOut();

  return (
    <>
      <Section>
        <Ul>
          <Li>Notebooks</Li>
          <Li>Perifericos</Li>
          <Li>Placas de Video</Li>
          <Li>Monitores</Li>
          <Li>Tablets</Li>
        </Ul>

        <Buttom onClick={handleLogOut}>Cerrar Sesion</Buttom>
      </Section>
    </>
  );
};

export default MenuNav;
