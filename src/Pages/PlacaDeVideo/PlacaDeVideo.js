import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useAuth } from "../../Context/authContext";
import { StyleProduct } from "../../Styles/StyleProduct";

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

const PlacaDeVideo = () => {
  const { producto, amount, addAmount, deleteAmount, addProductCart } =
    useAuth();

  const { description, name, price, imgdesk, especificaciones, id } = producto;

  const items = Object.values(especificaciones);
  console.log(producto)

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
          <Buttom onClick={() => addProductCart(producto, id)}>Comprar</Buttom>
          <SectionAmount>
            <Minus onClick={deleteAmount}>Minus</Minus>
            <Amount>{amount}</Amount>
            <Add onClick={addAmount}>More</Add>
          </SectionAmount>
        </SectionButtom>
      </Main>
    </>
  );
};

export default PlacaDeVideo;
