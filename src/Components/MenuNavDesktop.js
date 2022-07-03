import React from "react";
import { useLogOut } from "../Hooks/useLogOut";
import { StyleMenuNavDesktop } from "../Styles/StyleMenuNavDesktop";

const { Section, Ul, Li, IconCart, Buttom } = StyleMenuNavDesktop();

const MenuNavDesktop = () => {
  const { handleLogOut } = useLogOut();

  return (
    <Section>
      <Buttom onClick={handleLogOut}>Cerrar Sesion</Buttom>
      <Ul>
        <Li>Volver</Li>
        <Li>Notebooks</Li>
        <Li>Perifericos</Li>
        <Li>Placas de Video</Li>
        <Li>Monitores</Li>
        <Li>Tablets</Li>
      </Ul>
      <IconCart />
    </Section>
  );
};

export default MenuNavDesktop;
