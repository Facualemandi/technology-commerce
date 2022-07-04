import React from "react";
import { useAuth } from "../../Context/authContext";
import conectividad from "../../Images/IconsSvg/conectividada.png";
import ssd from "../../Images/IconsSvg/ssd.png";
import thePantalla from "../../Images/IconsSvg/monitor.png";
import theRam from "../../Images/IconsSvg/ram.png";
import theProcesador from "../../Images/IconsSvg/procesador.png";
import theSistem from "../../Images/IconsSvg/window.png";
import Nav from "../../Components/Nav";
import { StyleProduct } from "../../Styles/StyleProduct";

const {
  Main,
  SectionImg,
  Img,
  SectionName,
  Name,
  Price,
  Description,
  SectionDescription,
  SectionItems,
  ImgSvg,
  SectionNameItems,
  ItemName,
  Ul,
  Li,
  SectionButtom,
  Buttom,
  ButtomDesktop,
  SectionDesktopNotebook,
  Return,
  ParragraphRerutn,
  SectionAmount,
  Amount,
  Add,
  Minus,
} = StyleProduct();

const Notebook = () => {
  const { producto } = useAuth();

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
  } = producto;

  const storage = Object.values(almacenamiento);
  const screen = Object.values(pantalla);
  const processor = Object.values(procesador);
  const memoryRam = Object.values(ram);
  const sistem = Object.values(sistema);

  console.log(storage, screen, processor, memoryRam, sistem);

  return (
    <>
      <Nav />
      <Main>
        <Return to={"/Home"}>
          <ParragraphRerutn>Volver</ParragraphRerutn>
        </Return>

        <SectionDesktopNotebook>
          <SectionImg>
            <Img alt="Notebook" src={imgdesk} />
          </SectionImg>

          <SectionName>
            <Name>{name}</Name>
            <Price>${price}</Price>
            <Description>{description}</Description>

            <ButtomDesktop>Comprar</ButtomDesktop>
          </SectionName>
        </SectionDesktopNotebook>

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
          <SectionAmount>
            <Minus>Minus</Minus>
            <Amount>0</Amount>
            <Add>More</Add>
          </SectionAmount>
        </SectionButtom>
      </Main>
    </>
  );
};

export default Notebook;
