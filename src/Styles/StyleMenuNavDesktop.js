import React from "react";
import { BsCart3 } from "react-icons/bs";
import styled from "styled-components";

const Section = styled.section`
  width: 50%;
  height: 93.6vh;
  position: absolute;
  z-index: 100;
  top: 60px;
  background-color: #13387e;
  display: none;

  @media (min-width: 760px) {
    display: flex;
    justify-content: space-around;
    align-items: center;
    text-align: center;
    top: 0px;
    height: 60px;
    width: 100vw;
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-family: sans-serif;

  @media (min-width: 760px) {
    display: flex;
    width: auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 60px;
  }
`;

const Li = styled.li`
  padding: 5px;
  border-radius: 5px;
  color: white;
  margin: 10px;
  margin-top: 10px;

  @media (min-width: 760px) {
    &&:hover {
      background-color: #3252a1;
      transition: 0.5s;
      cursor: pointer;
    }
  }
`;

const IconCart = styled(BsCart3)`
  display: none;

  @media (min-width: 760px) {
    display: block;
    width: 30px;
    height: 30px;
    color: white;
  }
`;

const Buttom = styled.button`
  font-family: "Roboto", sans-serif;
  padding: 5px;
  border-radius: 5px;
  border: none;
  background-color: #3756a5;
  color: white;
  cursor: pointer;
  transition: 0.5s;

  &&:hover {
    background-color: #4765b1;
    transition: 0.5s;
  }
`;

export const StyleMenuNavDesktop = () => {
  return {
    Section,
    Ul,
    Li,
    IconCart,
    Buttom
  };
};
