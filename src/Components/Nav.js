import React, { useState } from "react";
import styled from "styled-components";
import { FiAlignLeft } from "react-icons/fi";
import { BsCart3 } from "react-icons/bs";
import MenuNav from "./MenuNav";
import MenuNavDesktop from "./MenuNavDesktop";
const NavBar = styled.nav`
  height: 60px;
  background-color: #082061;
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
    display: flex;
    z-index: 200;
    position: absolute;
    right: 30px;
  }
`;

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const openNav = () => {
    console.log("Nav abierto");
    if (!openMenu) {
      setOpenMenu(true);
    } else {
      setOpenMenu(false);
    }
  };

  return (
    <>
      <NavBar>
        <IconBurger onClick={openNav} />
        {openMenu && <MenuNav openMenu={openMenu} />}
        <MenuNavDesktop/>
        <IconCart />
      </NavBar>
    </>
  );
};

export default Nav;
