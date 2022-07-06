import React, { useState } from "react";
import MenuNav from "./MenuNav";
import MenuNavDesktop from "./MenuNavDesktop";
import { StyleNav } from "../Styles/StyleNav";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../Context/authContext";
import Search from "./Search";

const { NavBar, IconBurger, IconCart } = StyleNav();

const NavSection = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;

const AmountProducts = styled.p`
  color: white;
  font-size: 22px;
  font-family: "Roboto", sans-serif;
  font-weight: lighter;
  @media (min-width: 780px) {
    display: none;
  }
`;

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const { productCart } = useAuth();

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
        <MenuNavDesktop />
        {/* <Search/> */}
        <NavSection to="/Cart">
          <AmountProducts>{productCart.length}</AmountProducts>
          <IconCart />
        </NavSection>
      </NavBar>
    </>
  );
};

export default Nav;
