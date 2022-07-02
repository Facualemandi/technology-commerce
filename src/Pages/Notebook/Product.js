import React from "react";
import styled from "styled-components";
import Nav from "../../Components/Nav";
import { useAuth } from "../../Context/authContext";

const Img = styled.img`
  width: 80vw;
  height: 400px;
  display: flex;
  margin: auto;

  @media (min-width: 760px) {
    height: 300px;
    width: 300px;
  }

  @media (min-width: 1260px) {
    height: 400px;
    width: 400px;
  }
  @media (min-width: 1560px) {
    height: 500px;
    width: 500px;
  }
`;
const SectionImg = styled.section`
  width: 100vw;
  background: #8e9eab; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to right,
    #eef2f3,
    #8e9eab
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #eef2f3, #8e9eab);

  @media (min-width: 760px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const Main = styled.main`
  margin-top: 60px;

  @media (min-width: 760px) {
    display: flex;
    width: 95vw;
    margin: auto;
    margin-top: 150px;
    border: 1px solid grey;
    padding: 10px;
    border-radius: 10px;
  }

  @media (min-width: 1260px) {
    width: 80vw;
  }
  @media (min-width: 1560px) {
    height: 500px;
    width: 500px;
    width: 60vw;
  }
`;

const Name = styled.p`
  font-family: "Montserrat", sans-serif;
  margin: 10px;
`;
const Price = styled.p`
  font-family: "Montserrat", sans-serif;
  color: black;
  font-size: 33px;
  margin: 10px;
`;

const Description = styled.li`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
  margin-bottom: 10px;
`;
const Item = styled.li`
  margin-bottom: 10px;
  font-family: "Montserrat", sans-serif;
  font-size: 14px;
`;

const Ul = styled.ul`
  list-style: none;
  padding: 10px;
  border-left: 5px solid #c08ee1;
  margin: 10px;
`;

const SectionPriceName = styled.section`
  border-left: 5px solid #76cb8b;
  margin: 10px;
`;

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: 300px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-bottom: 20px;
  background-color: #8babff;
  font-size: 18px;
  font-weight: bold;
  color: white;
  box-shadow: 0px 3px 5px 0px #6790efb7;
`;

const SectionButton = styled.section`
  border-left: 5px solid #8babff;
  margin: 10px;
`;

const SectionDesktop = styled.section`
  display: flex;
  flex-direction: column;
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

  console.log(theNotebook);
  return (
    <>
      <Nav />
      <Main>
        <SectionImg>
          <Img alt="" src={imgdesk} />
        </SectionImg>

        <SectionDesktop>
          <SectionPriceName>
            <Name>{name}</Name>
            <Price>${price}</Price>
          </SectionPriceName>

          <Ul>
            <Description>{description}</Description>
            <Item>- Resolución: {pantalla}</Item>
            <Item>- Procesdaor: {procesador}</Item>
            <Item>- Ram: {ram}</Item>
            <Item>- Sistema Operativo: {sistema}</Item>
            <Item>- Almacenamiento: {almacenamiento}</Item>
          </Ul>

          <SectionButton>
            <Button>Comprar</Button>
          </SectionButton>
        </SectionDesktop>
      </Main>
    </>
  );
};

export default Product;
