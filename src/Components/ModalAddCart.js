import React from "react";
import styled from "styled-components";
import { useAuth } from "../Context/authContext";
import { FcApproval } from "react-icons/fc";

const SectionModal = styled.p`
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: auto;
  height: 300px;
  position: fixed;
  top: 150px;
`;

const SectionParragraph = styled.section`
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 10px 0px rgba(188, 188, 188, 0.69);

  @media (min-width: 780px){
    width: 80vw;
  }
  @media (min-width: 1080px){
    width: 70vw;
  }
  @media (min-width: 1380px){
    width: 60vw;
  }
  @media (min-width: 1680px){
    width: 30vw;
  }
`;

const IconAddCart = styled(FcApproval)`
  width: 70px;
  height: 70px;
  margin-bottom: 15px;
`;

const ProductAdd = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: 18px;
`;

const ModalAddCart = () => {
  const { openModal } = useAuth();

  return (
    <SectionModal>
      <SectionParragraph>
        <IconAddCart />
        <ProductAdd>Producto agregado al carrito</ProductAdd>
      </SectionParragraph>
    </SectionModal>
  );
};

export default ModalAddCart;
