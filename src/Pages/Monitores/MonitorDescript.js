import React from "react";
import { StyleProduct } from "../../Styles/StyleProduct";
import styled from "styled-components";
import { useAuth } from "../../Context/authContext";
import Nav from "../../Components/Nav";
import ModalAddCart from "../../Components/ModalAddCart";
import Footer from "../../Components/Footer";
import ButtomReturn from "../../Components/ButtomReturn";
import { NavLink } from "react-router-dom";

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

const MonitorDescript = () => {
  const {
    producto,
    amount,
    addAmount,
    deleteAmount,
    addProductCart,
    modalAdd,
  } = useAuth();

  const { description, name, id, price, imgdesk, especificaciones, espec } =
    producto;

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
          {espec === undefined ? (
            <p>No hay especificaciones</p>
          ) : (
            <Ul>
              {espec.map((item) => (
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
      <NavLink to={"/Monitores"}>
        <ButtomReturn />
      </NavLink>

      <Footer />
    </>
  );
};

export default MonitorDescript;
