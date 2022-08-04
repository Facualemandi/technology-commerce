import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useAuth } from "../Context/authContext";
import { StyleHomeProducts } from "../Styles/StyleHomeProducts";
import Nav from "./Nav";
import { BsCartX } from "react-icons/bs";
import Footer from "./Footer";
import ButtomReturn from "./ButtomReturn";
import { NavLink } from "react-router-dom";

const {
  Parragraph,
  Section,
  SectionContianer,
  NameProduct,
  Price,
  Img,
  SectionImg,
  TheNavLink,
} = StyleHomeProducts();

const Container = styled.section`
  margin-top: 70px;
  height: auto;
  min-height: 70vh;
`;

const CarritoVacio = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 22px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const SectionCloseCart = styled.section`
  width: 100vw;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const CartIcon = styled(BsCartX)`
  width: 35px;
  height: 35px;
  margin-top: 15px;
`;
const AmountProduct = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
  position: absolute;
  top: 15px;
  right: 15px;
  border-radius: 100%;
  padding: 5px;
  box-shadow: 0px 0px 5px 0px rgba(158, 158, 158, 0.635);
`;
const ButtomDelete = styled.button`
border: 1px solid red;
width: 95%;
display: flex;
margin: 10px auto;
padding: 5px;
justify-content: center;
align-items: center;
border-radius: 5px;
font-family: sans-serif;
border: none;
background-color: #ffc2c0;
font-weight: bold;

@media (min-width: 780px) {
  cursor: pointer;
}
`;

const Cart = () => {
  const { productCart, setProductCart, handleProduct } = useAuth();

  const handleDelete = (e, id) => {
    e.preventDefault();
    const deleteProduct = productCart.findIndex((el) => el.id === id);
    const newObj = [...productCart];
    newObj.splice(deleteProduct, 1);

    return setProductCart(newObj);
  };

  return (
    <>
      <Nav />

      <Container>
        <Parragraph>Productos Agregados al carrito</Parragraph>
        {productCart.length === 0 && (
          <>
            <SectionCloseCart>
              <CarritoVacio>
                No has agregado ningún producto al carrito
              </CarritoVacio>
              <CartIcon />
            </SectionCloseCart>
          </>
        )}
        <SectionContianer>
          {productCart.map((note) => (
            <>
              <TheNavLink to={`/Home`} key={note.id}>
                <Section onClick={() => handleProduct(note)}>
                  <SectionImg>
                    <Img alt={note.name} src={note.img} />
                  </SectionImg>
                  <Price>${note.price}</Price>
                  <NameProduct>{note.name}</NameProduct>
                </Section>
                <AmountProduct>x{note.amount}</AmountProduct>
                <ButtomDelete onClick={(e) => handleDelete(e, note.id)}>
                  Eliminar Producto
                </ButtomDelete>
              </TheNavLink>
            </>
          ))}
        </SectionContianer>
      </Container>
      <NavLink to={"/Home"}>
        <ButtomReturn />
      </NavLink>

      <Footer />
    </>
  );
};

export default Cart;
