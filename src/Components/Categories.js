import React from "react";
import Microprocesadores from "../Images/ImagesCategorie/Microprocesador.png";
import Monitores from "../Images/ImagesCategorie/Monitores.png";
import PlacasDeVideo from "../Images/ImagesCategorie/PlacasDeVideo.png";
import Notebooks from "../Images/ImagesCategorie/Notebooks.png";
import Perifericos from "../Images/ImagesCategorie/Perifericos.png";
import styled from "styled-components";

const Main = styled.main`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
`;
const Image = styled.img`
  width: 50px;
  height: 50px;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Paragraph = styled.p`
  font-size: 12px;
  font-family: "Montserrat", sans-serif;
  margin-top: 10px;
`;

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
