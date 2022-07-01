import React from "react";
import styled from "styled-components";
import intelCore from "../Images/intelCore.jpg";
import Nvidia from "../Images/Nvidia.jpg";
import HyperX from "../Images/HyperX.jpg";
import RedDragon from "../Images/RedDragon.jpg";
import Ryzen from "../Images/Ryzen.jpg";
import Logitech from "../Images/Logitech.jpg";
import intelRounder from "../Images/IntelRounder.jpg";
import HyperXRounder from "../Images/HyperXRounder.jpg";
import LogitechRounder from "../Images/LogitechRounder.jpg";
import AmdRounder from "../Images/AmdRounder.jpg";
import RedDragonRounder from "../Images/RedDragonRounder.jpg";
import NvidiaRounder from "../Images/NvidiaRounder.jpg";

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
    width: 1080px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    margin-top: 20px;
    font-size: 22px;
  }
`;

const Section = styled.section`
  display: flex;
  width: auto;
  overflow: scroll;

  @media (min-width: 760px) {
    overflow: scroll;
    width: auto;
    display: flex;
    margin: auto;
    justify-content: space-around;
    cursor: pointer;
  }

  @media (min-width: 1080px){
    width: 1080px;
    overflow-y: hidden;
    overflow-x: hidden;
  }

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

  @media (min-width: 760px) {
    overflow: hidden;
    overflow-y: hidden;
  }
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
  font-size: 22px;
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

        <MarksImages>
          <Image alt="Intel Core" src={HyperX} />
          <ImageRounder alt="Intel Core" src={HyperXRounder} />

          <Mark>HyperX</Mark>
        </MarksImages>

        <MarksImages>
          <Image alt="Intel Core" src={Logitech} />
          <ImageRounder alt="Intel Core" src={LogitechRounder} />

          <Mark>Logitech</Mark>
        </MarksImages>

        <MarksImages>
          <Image alt="Intel Core" src={Ryzen} />
          <ImageRounder alt="Intel Core" src={AmdRounder} />

          <Mark>Ryzen</Mark>
        </MarksImages>

        <MarksImages>
          <Image alt="Intel Core" src={RedDragon} />
          <ImageRounder alt="Intel Core" src={RedDragonRounder} />

          <Mark>Nvidia</Mark>
        </MarksImages>

        <MarksImages>
          <Image alt="Intel Core" src={Nvidia} />
          <ImageRounder alt="Intel Core" src={NvidiaRounder} />

          <Mark>Nvidia</Mark>
        </MarksImages>
      </Section>
    </Main>
  );
};

export default Marks;
