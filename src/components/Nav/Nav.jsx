import { NavLink } from "react-router-dom";
import React, { useState, useEffect, useRef } from "react";
import { NavStyle, LogoStyle, HamburgerButton } from "./Nav.style";
import logo from "../../images/tbs-logo.png";

export const Nav = ({ scrollToAboutUs, scrollToContact, scrollToGallery, scrollToPriser }) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const navRef = useRef(null);  
    const hamburgerRef = useRef(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            // Check if the click was outside of the menu or hamburger button
            if (navRef.current && !navRef.current.contains(event.target) && 
                hamburgerRef.current && !hamburgerRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <NavStyle>
            <LogoStyle>
                <img className="logo" src={logo} alt="Trondheim Boligstyling logo med en stilisert gull 'T' inni en sirkulær ramme, med firmanavnet 'Trondheim Boligstyling' skrevet under i elegante, gullfargede store bokstaver."></img> 
            </LogoStyle>
            <HamburgerButton ref={hamburgerRef} onClick={toggleMenu} className={menuOpen ? 'open' : ''}>
                <span></span>
            </HamburgerButton>
            <div ref={navRef} className={`navLinks ${menuOpen ? 'open' : ''}`}>
                <button className="closeButton" onClick={toggleMenu}>✕</button>
                <NavLink onClick={() => {scrollToGallery(); closeMenu();}} className="gallery-link">Galleri</NavLink>
                <NavLink onClick={() => {scrollToAboutUs(); closeMenu();}} className="om-oss-link">Om Oss</NavLink>
                <NavLink onClick={() => { scrollToPriser(); closeMenu(); }} className="priser-link">Priser</NavLink>
                <NavLink onClick={() => { scrollToContact(); closeMenu(); }} className="kontakt-oss-link">Kontakt Oss</NavLink>
            </div>
        </NavStyle>
    ) 
}  

