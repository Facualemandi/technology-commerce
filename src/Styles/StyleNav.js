import React from "react";
import styled from "styled-components";

import { FiAlignLeft } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

export const StyleNav = () => {
  const NavBar = styled.nav`
    height: 60px;
    background-color: #37373f;
    display: flex;
    justify-content: space-between;
    align-items: center;
  `;

  const IconBurger = styled(FiAlignLeft)`
    width: 50px;
    height: 40px;
    color: white;
    margin: 5px;

    @media (min-width: 760px) {
      display: none;
    }
  `;

  const IconCart = styled(BsCart3)`
    width: 30px;
    height: 30px;
    color: white;
    margin: 5px;
    margin-right: 10px;

    @media (min-width: 760px) {
      display: none;
    }
  `;

  return {
    NavBar,
    IconBurger,
    IconCart
  };
};
