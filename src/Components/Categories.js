import React from "react";
import Microprocesadores from "../Images/ImagesCategorie/Microprocesador.png";
import Monitores from "../Images/ImagesCategorie/Monitores.png";
import PlacasDeVideo from "../Images/ImagesCategorie/PlacasDeVideo.png";
import Notebooks from "../Images/ImagesCategorie/Notebooks.png";
import Perifericos from "../Images/ImagesCategorie/Perifericos.png";
import { StyleCategories } from "../Styles/StyleCategories";
import { NavLink } from "react-router-dom";

const { Main, Image, Section, Paragraph } = StyleCategories();

const Categories = () => {
  return (
    <>
      <Main>
        <NavLink to={"/PlacasDeVideo"}>
          <Section>
            <Image alt="Microprocesador" src={PlacasDeVideo} />
            <Paragraph>Placas de Video</Paragraph>
          </Section>
        </NavLink>

        <NavLink to={"/Procesadores"}>
          <Section>
            <Image alt="Microprocesador" src={Microprocesadores} />
            <Paragraph>Procesadores</Paragraph>
          </Section>
        </NavLink>

        <NavLink to={"/Notebooks"}>
          <Section>
            <Image alt="Microprocesador" src={Notebooks} />
            <Paragraph>Notebooks</Paragraph>
          </Section>
        </NavLink>

        <NavLink to={'/Perifericos'}>
          <Section>
            <Image alt="Microprocesador" src={Perifericos} />
            <Paragraph>Perifericos</Paragraph>
          </Section>
        </NavLink>

        <NavLink to={"/Monitores"}>
          <Section>
            <Image alt="Microprocesador" src={Monitores} />
            <Paragraph>Monitores</Paragraph>
          </Section>
        </NavLink>
      </Main>
    </>
  );
};

export default Categories;
