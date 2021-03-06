import React from "react";
import { FcLeft } from "react-icons/fc";
import styled from "styled-components";

const Return = styled(FcLeft)`
  position: fixed;
  bottom: 15px;
  right: 15px;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgba(193, 193, 193, 0.667);
  cursor: pointer;
  background-color: #f8f8f8;
  display: flex;
  margin: auto;

  @media (min-width: 780px) {
    display: none;
  }
`;

const ButtomReturn = () => {
  return (
    <>
      <Return>Volver</Return>
    </>
  );
};

export default ButtomReturn;
