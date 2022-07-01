import React, { useState } from "react";
import MenuNav from "./MenuNav";
import MenuNavDesktop from "./MenuNavDesktop";
import { StyleNav } from "../Styles/StyleNav";

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

  return (
    <>
      <NavBar>
        <IconBurger onClick={openNav} />
        {openMenu && <MenuNav openMenu={openMenu} />}
        <MenuNavDesktop />
        <IconCart />
      </NavBar>
    </>
  );
};

export default Nav;
