import React from "react";
import styled from "styled-components";
import intelCore from "../Images/intelCore.jpg";
import intelRounder from "../Images/IntelRounder.jpg";

const Parragraph = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: auto;
  margin-top: 10px;
  width: 300px;

  @media (min-width: 760px) {
    width: 90%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    font-size: 22px;
  }
`;

const Section = styled.section`
  display: flex;
  width: 700px;
  overflow: scroll;
`;

const MarksImages = styled.p`
  margin: 15px;
  width: 150px;
  height: 235px;
  position: relative;
  border-radius: 10px;
  background-color: #e0e0e0a9;
`;

const Main = styled.main`
  overflow: scroll;
`;

const Image = styled.img`
  width: 150px;
  height: 150px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const ImageRounder = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 100%;
  position: absolute;
  bottom: 45px;
  left: 35px;
`;

const Mark = styled.p`
  margin-top: 45px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  color: green;
`;

const Marks = () => {
  return (
    <Main>
      <Parragraph>Encontra las mejores marcas y al mejor precio!</Parragraph>

      <Section>
        <MarksImages>
          <Image alt="Intel Core" src={intelCore} />
          <ImageRounder alt="Intel Core" src={intelRounder} />

          <Mark>Intel</Mark>
        </MarksImages>

        <MarksImages>Facu</MarksImages>
        <MarksImages>Facu</MarksImages>
      </Section>
    </Main>
  );
};

export default Marks;
