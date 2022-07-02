import React from "react";
import styled from "styled-components";
import { useAuth } from "../../Context/authContext";
import conectividad from "../../Images/IconsSvg/conectividada.png";
import ssd from "../../Images/IconsSvg/ssd.png";
import thePantalla from "../../Images/IconsSvg/monitor.png";
import theRam from "../../Images/IconsSvg/ram.png";
import theProcesador from "../../Images/IconsSvg/procesador.png";
import theSistem from "../../Images/IconsSvg/window.png";

const Main = styled.main`
  width: 100vw;
`;
const SectionImg = styled.section`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  width: 300px;
  height: 300px;
`;

const SectionName = styled.section`
  width: 95vw;
  margin: auto;
  border-left: 5px solid #9fd3ab;
`;

const Name = styled.p`
  margin: 10px;
  font-family: "Montserrat", sans-serif;
`;
const Price = styled.p`
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 24px;
`;
const Description = styled.p`
  margin: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

const SectionDescription = styled.section`
  width: 95vw;
  margin: auto;
  border-left: 5px solid #a090d4;
`;

const SectionItems = styled.section`
  width: 95vw;
  height: auto;
  display: flex;
  flex-direction: column;
  margin: auto;
`;

const ImgSvg = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const SectionNameItems = styled.section`
  display: flex;
  align-items: center;
`;

const ItemName = styled.p`
  font-size: 18px;
  font-family: "Poppins", sans-serif;
`;

const Ul = styled.ul`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
  font-weight: 300;
`;
const Li = styled.li`
  margin: 5px;
  margin-left: 50px;
`;

const SectionButtom = styled.section`
  width: 95vw;
  margin: auto;
  border-left: 5px solid #bce4ff;
`;
const Buttom = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
  color: white;
  margin: auto;
  width: 300px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #8bcfff;
  margin-top: 25px;
  box-shadow: 0px 4px 5px 0px rgba(175, 175, 175, 0.594);
`;

const Product = () => {
  const { theNotebook } = useAuth();

  const {
    almacenamiento,
    description,
    name,
    pantalla,
    price,
    procesador,
    ram,
    sistema,
    imgdesk,
  } = theNotebook;

  const storage = Object.values(almacenamiento);
  const screen = Object.values(pantalla);
  const processor = Object.values(procesador);
  const memoryRam = Object.values(ram);
  const sistem = Object.values(sistema);

  console.log(storage, screen, processor, memoryRam, sistem);

  return (
    <>
      <Main>
        <SectionImg>
          <Img alt="" src={imgdesk} />
        </SectionImg>

        <SectionName>
          <Name>{name}</Name>
          <Price>${price}</Price>
          <Description>{description}</Description>
        </SectionName>

        <SectionDescription>
          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={ssd} />
              <ItemName>Almacenamiento</ItemName>
            </SectionNameItems>

            <Ul>
              {storage.map((item) => (
                <Li>
                  <p>{item}</p>
                </Li>
              ))}
            </Ul>
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={conectividad} />
              <ItemName>Conectividad</ItemName>
            </SectionNameItems>
            <Ul>
              {storage.map((item) => (
                <Li>
                  <p>{item}</p>
                </Li>
              ))}
            </Ul>
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={theRam} />
              <ItemName>Memoria Ram</ItemName>
            </SectionNameItems>
            <Ul>
              {memoryRam.map((item) => (
                <Li>
                  <p>{item}</p>
                </Li>
              ))}
            </Ul>
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={thePantalla} />
              <ItemName>Pantalla</ItemName>
            </SectionNameItems>
            <Ul>
              {screen.map((item) => (
                <Li>
                  <p>{item}</p>
                </Li>
              ))}
            </Ul>
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={theProcesador} />
              <ItemName>Procesador</ItemName>
            </SectionNameItems>
            <Ul>
              {processor.map((item) => (
                <Li>
                  <p>{item}</p>
                </Li>
              ))}
            </Ul>
          </SectionItems>

          <SectionItems>
            <SectionNameItems>
              <ImgSvg alt="SSD" src={theSistem} />
              <ItemName>Sistema Operativo</ItemName>
            </SectionNameItems>
            <Ul>
              {sistem.map((item) => (
                <Li>
                  <p>{item}</p>
                </Li>
              ))}
            </Ul>
          </SectionItems>
        </SectionDescription>

        <SectionButtom>
          <Buttom>Comprar</Buttom>
        </SectionButtom>
      </Main>
    </>
  );
};

export default Product;
