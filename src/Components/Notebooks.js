import React from "react";
import styled from "styled-components";
import Loader from "../Loader/Loader";

const Main = styled.main`
  width: 100vw;
`;

const Parragraph = styled.p`
  font-family: "Montserrat";
  width: 90vw;
  display: flex;
  margin: auto;
  margin-top: 50px;
  font-weight: bold;
  color: #303030;
  font-size: 20px;
  margin-left: 10px;
  margin-bottom: 10px;
`;

const Section = styled.section`
  border: 1px solid #e0e0e0a9;
  border-radius: 10px;
  height: auto;
  width: 90%;
  margin: 10px;
`;

const SectionContianer = styled.section`
  width: 100vw;
  display: grid;
  margin: auto;
  grid-template-columns: repeat(2, 1fr);
  padding: 10px;
`;
const Img = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  height: 150px;
  background: #9da5bd;
  background: -webkit-linear-gradient(to top, #e1e6ef, #9da5bd);
  background: linear-gradient(to top, #e1e6ef, #9da5bd);
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
  margin: 10px;
  margin-top: 10px;
`;

const Notebooks = ({ notebook, loaging }) => {
  return (
    <Main>
      <Parragraph>Elegí la mejor Notebook para trabajar o jugar!</Parragraph>

      <SectionContianer>
        {notebook.map((note) => (
          <>
            {loaging && <Loader />}

            {!loaging && (
              <Section>
                <Img alt={note.name} src={note.img} />
                <NameProduct>{note.name}</NameProduct>
                <Price>${note.price}</Price>
              </Section>
            )}
          </>
        ))}
      </SectionContianer>
    </Main>
  );
};

export default Notebooks;
