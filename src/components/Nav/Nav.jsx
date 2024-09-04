import { NavLink } from "react-router-dom";
import React, { useState } from "react";
import { NavStyle, LogoStyle, HamburgerButton } from "./Nav.style";
import logo from "../../images/tbs-logo.png"

export const Nav = ({ scrollToAboutUs, scrollToContact, scrollToGallery, scrollToPriser }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    return (
        <NavStyle>
            <LogoStyle>
                <img className="logo" src={logo} alt="Trondheim Boligstyling-logo med en stilisert gull 'T' inni en sirkulær ramme, med firmanavnet 'Trondheim Boligstyling' skrevet under i elegante, gullfargede store bokstaver."></img> 
            </LogoStyle>
            <HamburgerButton onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
                <span></span>
            </HamburgerButton>
            <div className={`navLinks ${menuOpen ? 'open' : ''}`}>
                <NavLink onClick={() => { scrollToPriser(); closeMenu(); }} className="priser-link">Priser</NavLink>
                <NavLink onClick={() => {scrollToGallery(); closeMenu();}} className="gallery-link">Galleri</NavLink>
                <NavLink onClick={() => {scrollToAboutUs(); closeMenu();}} className="om-oss-link">Om Oss</NavLink>
                <NavLink onClick={() => { scrollToContact(); closeMenu(); }} className="kontakt-oss-link">Kontakt Oss</NavLink>
            </div>
        </NavStyle>
    ) 
}  

