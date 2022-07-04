import React, { useState } from "react";
import MenuNav from "./MenuNav";
import MenuNavDesktop from "./MenuNavDesktop";
import { StyleNav } from "../Styles/StyleNav";
import { NavLink } from "react-router-dom";

const { NavBar, IconBurger, IconCart } = StyleNav();

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

  const openCart = () => {
    
  };

  return (
    <>
      <NavBar>
        <IconBurger onClick={openNav} />
        {openMenu && <MenuNav openMenu={openMenu} />}
        <MenuNavDesktop />
        <NavLink to='/Cart'>
          <IconCart onClick={openCart} />
        </NavLink>
      </NavBar>
    </>
  );
};

export default Nav;
