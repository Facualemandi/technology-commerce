import React from "react";
import { StyleProduct } from "../../Styles/StyleProduct";
import styled from "styled-components";
import { useAuth } from "../../Context/authContext";
import Nav from "../../Components/Nav";

const {
  Img,
  SectionImg,
  Name,
  Price,
  Description,
  SectionName,
  ButtomDesktop,
  Ul,
  Li,
  Main,
  SectionDesktopNotebook,
  SectionButtom,
  Buttom,
  SectionAmount,
  Minus,
  Amount,
  Add,
} = StyleProduct();

const UlPlaca = styled.section`
  border-left: 5px solid #a090d4;
  margin: 10px;
  width: 95vw;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 760px) {
    border-top: 1px solid grey;
    border-left: none;
    width: 50vw;
  }
`;

const Caracteristica = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  margin: 15px;
`;

const MonitorDescript = () => {
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
    especificaciones,
  } = producto;

  const items = Object.values(especificaciones);

  return (
    <>
      <Nav />
      
      <Main>
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

        <UlPlaca>
          <Caracteristica>Caracteristicas</Caracteristica>
          <Ul>
            {items.map((item) => (
              <Li>-{item}</Li>
            ))}
          </Ul>
        </UlPlaca>
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

export default MonitorDescript;
