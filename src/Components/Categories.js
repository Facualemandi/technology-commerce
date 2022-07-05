import React from "react";
import Microprocesadores from "../Images/ImagesCategorie/Microprocesador.png";
import Monitores from "../Images/ImagesCategorie/Monitores.png";
import PlacasDeVideo from "../Images/ImagesCategorie/PlacasDeVideo.png";
import Notebooks from "../Images/ImagesCategorie/Notebooks.png";
import Perifericos from "../Images/ImagesCategorie/Perifericos.png";
import { StyleCategories } from "../Styles/StyleCategories";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const { Main, Image, Section, Paragraph } = StyleCategories();

const Nav = styled(NavLink)`
  text-decoration: none;
  color: black;
`;
const Categories = () => {
  return (
    <>
      <Main>
        <Nav to={"/PlacasDeVideo"}>
          <Section>
            <Image alt="Microprocesador" src={PlacasDeVideo} />
            <Paragraph>Placas de Video</Paragraph>
          </Section>
        </Nav>

        <Nav to={"/Procesadores"}>
          <Section>
            <Image alt="Microprocesador" src={Microprocesadores} />
            <Paragraph>Procesadores</Paragraph>
          </Section>
        </Nav>

        <Nav to={"/Notebooks"}>
          <Section>
            <Image alt="Microprocesador" src={Notebooks} />
            <Paragraph>Notebooks</Paragraph>
          </Section>
        </Nav>

        <Nav to={"/Perifericos"}>
          <Section>
            <Image alt="Microprocesador" src={Perifericos} />
            <Paragraph>Perifericos</Paragraph>
          </Section>
        </Nav>

        <Nav to={"/Monitores"}>
          <Section>
            <Image alt="Microprocesador" src={Monitores} />
            <Paragraph>Monitores</Paragraph>
          </Section>
        </Nav>
      </Main>
    </>
  );
};

export default Categories;
