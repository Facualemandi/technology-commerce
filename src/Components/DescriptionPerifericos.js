import React from "react";
import { useAuth } from "../Context/authContext";
import Nav from "./Nav";
import { StyleProduct } from "../Styles/StyleProduct";
import ModalAddCart from "./ModalAddCart";
import Footer from "./Footer";
import ButtomReturn from "./ButtomReturn";
import { NavLink } from "react-router-dom";

const {
  Main,
  SectionImg,
  Img,
  SectionName,
  Name,
  Price,
  Description,
  Ul,
  Li,
  SectionButtom,
  Buttom,
  SectionDesktopNotebook,
  SectionAmount,
  Amount,
  Add,
  Minus,
  UlPlaca,
  Caracteristica,
  SectionAmountDesktop,
  ButtomDesktop,
} = StyleProduct();

const DescriptionPerifericos = () => {
  const {
    producto,
    amount,
    addAmount,
    deleteAmount,
    addProductCart,
    modalAdd,
  } = useAuth();

  const { description, name, price, imgdesk, id, espec } = producto;


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
          <Buttom onClick={() => addProductCart(producto, id)}>Comprar</Buttom>
          <SectionAmount>
            <Minus onClick={deleteAmount}>Minus</Minus>
            <Amount>{amount}</Amount>
            <Add onClick={addAmount}>More</Add>
          </SectionAmount>
        </SectionButtom>
      </Main>

      <NavLink to={"/Perifericos"}>
        <ButtomReturn />
      </NavLink>

      <Footer />
    </>
  );
};

export default DescriptionPerifericos;
