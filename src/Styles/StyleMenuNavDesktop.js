import React from "react";
import { BsCart3 } from "react-icons/bs";
import styled from "styled-components";

const Section = styled.section`
  display: none;

  @media (min-width: 780px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    margin-top: 60px;
    height: 50px;
    width: 100vw;
    background-color: #37373f;
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-family: "Montserrat", sans-serif;
  font-weight: 300;

  @media (min-width: 780px) {
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 50px;
    width: 90%;
  }
`;

const Li = styled.li`
  padding: 5px;
  border-radius: 5px;
  color: white;

  @media (min-width: 780px) {
    &&:hover {
      background-color: #4e4e53;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

const IconCart = styled(BsCart3)`
  display: none;

  @media (min-width: 780px) {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const Buttom = styled.button`
  font-family: "Montserrat", sans-serif;
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  transition: 0.5s;
  margin-left: 25px;
  padding-top: 5px;
  background-color: rgb(40, 40, 46);
  color: white;
  font-size: 16px;

  &&:hover {
    background-color: #545459;
    transition: 0.5s;
  }
`;

export const StyleMenuNavDesktop = () => {
  return {
    Section,
    Ul,
    Li,
    IconCart,
    Buttom,
  };
};
