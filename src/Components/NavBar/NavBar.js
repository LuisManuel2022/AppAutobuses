import React, { useState } from "react";
import { GiCuauhtli } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { FaTimes } from "react-icons/fa"
import {
  IconLogo,
  IconLogoMobile,
  Menu,
  MenuItem,
  MenuItemLink,
  NavBarContainer,
  NavBarWrapper,
} from "./NavBar.elements";

const NavBar = () => {
  const [click, setClick] = useState(false);

  const changeClick = () => {
    setClick(!click);
  }
  return (
    <>
    
      <NavBarContainer>
      
        <NavBarWrapper>
          <IconLogo>
            <GiCuauhtli size={"2em"} />
            Autobuses Teotihuacan
          </IconLogo>
          <IconLogoMobile onClick={() => changeClick()}>
            {
              click ? <FaTimes/> : <FaBars/>
            }
          </IconLogoMobile>
          <Menu click={click}>
            <MenuItem>
              <MenuItemLink href='/' onClick={() => changeClick()}>INICIO</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="/about" onClick={() => changeClick()}>NOSOTROS</MenuItemLink>
            </MenuItem>
           
            <MenuItem>
              <MenuItemLink onClick={() => changeClick()}>FACTURACIÓN</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => changeClick()}>CONTACTO</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => changeClick()}>BOLSA DE TRABAJO</MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink onClick={() => changeClick()}>FAQS</MenuItemLink>
            </MenuItem>
          </Menu>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  );
};

export default NavBar;
