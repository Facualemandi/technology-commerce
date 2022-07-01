import React from "react";
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
import { StyleMarks } from "../Styles/StyleMarks";

const { Parragraph, Section, MarksImages, Main, Image, ImageRounder, Mark } =
  StyleMarks();


  
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
