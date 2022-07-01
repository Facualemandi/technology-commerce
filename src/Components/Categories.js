import React from "react";
import Microprocesadores from "../Images/ImagesCategorie/Microprocesador.png";
import Monitores from "../Images/ImagesCategorie/Monitores.png";
import PlacasDeVideo from "../Images/ImagesCategorie/PlacasDeVideo.png";
import Notebooks from "../Images/ImagesCategorie/Notebooks.png";
import Perifericos from "../Images/ImagesCategorie/Perifericos.png";
import { StyleCategories } from "../Styles/StyleCategories";

const { Main, Image, Section, Paragraph } = StyleCategories();

const Categories = () => {
  return (
    <>
      <Main>
        <Section>
          <Image alt="Microprocesador" src={PlacasDeVideo} />
          <Paragraph>Placas de Video</Paragraph>
        </Section>

        <Section>
          <Image alt="Microprocesador" src={Microprocesadores} />
          <Paragraph>Micro-Procesadores</Paragraph>
        </Section>

        <Section>
          <Image alt="Microprocesador" src={Notebooks} />
          <Paragraph>Notebooks</Paragraph>
        </Section>

        <Section>
          <Image alt="Microprocesador" src={Perifericos} />
          <Paragraph>Perifericos</Paragraph>
        </Section>

        <Section>
          <Image alt="Microprocesador" src={Monitores} />
          <Paragraph>Monitores</Paragraph>
        </Section>
      </Main>
    </>
  );
};

export default Categories;
