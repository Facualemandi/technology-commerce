import React from 'react'
import styled from "styled-components";

export const StyleHomeProducts = () => {

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

  @media (min-width: 760px) {
    max-width: 1080px;
    display: flex;
    margin: 20px auto;
  }
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

  @media (min-width: 570px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 960px) {
    max-width: 1080px;
    height: 330px;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const Img = styled.img`
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;
  width: 100%;
  height: 185px;
  background: #9da5bd;
  background: -webkit-linear-gradient(to top, #e1e6ef, #9da5bd);
  background: linear-gradient(to top, #e1e6ef, #9da5bd);
`;

const NameProduct = styled.p`
  font-family: "Montserrat";
  font-weight: 300;
  font-size: 14px;
  margin: 5px;
  width: 200px;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: grey;
`;

const Price = styled.p`
  font-family: "Montserrat", sans-serif;
  margin-top: 15px;
  font-size: 24px;
  margin: 10px;
  margin-top: 10px;
`;

  return {
    Main,
    Parragraph,
    Section,
    SectionContianer,
    NameProduct,
    Price,
    Img
  }
}
