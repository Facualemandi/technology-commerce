import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import ButtomReturn from "../../Components/ButtomReturn";
import Footer from "../../Components/Footer";
import ModalAddCart from "../../Components/ModalAddCart";
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
  SectionAmountDesktop,
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
  const {
    producto,
    amount,
    addAmount,
    deleteAmount,
    addProductCart,
    modalAdd,
  } = useAuth();

  const { description, name, price, imgdesk, especificaciones, id } = producto;

  return (
    <>
      <Nav />
      {modalAdd && <ModalAddCart />}

      <Main>
        <SectionDesktopNotebook>
          <SectionImg>
            <Img alt="Notebook" src={imgdesk} />
          </SectionImg>

          <SectionName>
            <Name>{name}</Name>
            <Price>${price}</Price>
            <Description>{description}</Description>

            <SectionAmountDesktop>
              <Minus onClick={deleteAmount}>Minus</Minus>
              <Amount>{amount}</Amount>
              <Add onClick={addAmount}>More</Add>
            </SectionAmountDesktop>
            <ButtomDesktop onClick={() => addProductCart(producto, id)}>
              Comprar
            </ButtomDesktop>
          </SectionName>
        </SectionDesktopNotebook>

        <UlPlaca>
          <Caracteristica>Caracteristicas</Caracteristica>
          {especificaciones === undefined ? (
            <p>No hay especificaciones</p>
          ) : (
            <Ul>
              {especificaciones.map((item) => (
                <Li>-{item}</Li>
              ))}
            </Ul>
          )}
        </UlPlaca>
        <SectionButtom>
          <SectionAmount>
            <Minus onClick={deleteAmount}>Minus</Minus>
            <Amount>{amount}</Amount>
            <Add onClick={addAmount}>More</Add>
          </SectionAmount>

          <Buttom onClick={() => addProductCart(producto, id)}>Comprar</Buttom>
        </SectionButtom>
      </Main>

      <NavLink to={"/PlacasDeVideo"}>
        <ButtomReturn />
      </NavLink>

      <Footer />
    </>
  );
};

export default PlacaDeVideo;
