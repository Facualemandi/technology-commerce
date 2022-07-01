import React from "react";
import styled from "styled-components";

const Main = styled.main`
  width: 100vw;
`;

const Parragraph = styled.p`
  font-family: "Montserrat";
  width: 100vw;
  display: flex;
  margin: auto;
  margin-top: 50px;
  font-weight: bold;
  color: #303030;
`;

const Section = styled.section`
  width: 150px;
  margin: 10px;
  border: 1px solid #e0e0e0a9;
  border-radius: 10px;
  height: auto;
`;

const SectionContianer = styled.section`
  width: 100vw;
  display: flex;
`;
const Img = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  height: 150px;
  background: #757f9a; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #d7dde8,
    #757f9a
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #d7dde8,
    #757f9a
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const NameProduct = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  margin: 5px;
`;

const Price = styled.p`
  font-family: "Montserrat", sans-serif;
  margin-top: 15px;
  font-size: 16px;
  margin: 5px;
`;

const Notebooks = ({ notebook }) => {
  return (
    <Main>
      <Parragraph>Elegí la mejor Notebook para trabajar o jugar!</Parragraph>

      <SectionContianer>
        {notebook.map((note) => (
          <Section>
            <Img alt={note.name} src={note.img} />
            <NameProduct>{note.name}</NameProduct>
            <Price>${note.price}</Price>
          </Section>
        ))}
      </SectionContianer>
    </Main>
  );
};

export default Notebooks;
