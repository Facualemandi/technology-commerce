import React from "react";
import styled from "styled-components";
import { FiAlignLeft } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";

const NavBar = styled.nav`
  height: 60px;
  background-color: rgb(45, 66, 152);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const IconBurger = styled(FiAlignLeft)`
  width: 50px;
  height: 40px;
  color: white;
  margin: 5px;
`;

const IconCart = styled(BsCart3)`
  width: 30px;
  height: 30px;
  color: white;
  margin: 5px;
  margin-right: 10px;
`;
const Nav = () => {
  return (
    <>
      <NavBar>
        <IconBurger />
        <IconCart />
      </NavBar>
    </>
  );
};

export default Nav;
