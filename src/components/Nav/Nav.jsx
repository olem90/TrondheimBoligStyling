import { NavLink, Link } from "react-router-dom";
import { NavStyle, LogoStyle } from "./Nav.style";
import logo from "../../images/tbs-logo.png"

export const Nav = ({ scrollToAboutUs, scrollToContact }) => {
    return (
        <NavStyle>
            <LogoStyle>
                <img className="logo" src={logo}></img> 
            </LogoStyle>
            <div className="navLinks">
                <NavLink onClick={scrollToAboutUs} className="om-oss-link">Om Oss</NavLink>
                <NavLink onClick={scrollToContact} className="kontakt-oss-link">Kontakt Oss</NavLink>  
            </div>
        </NavStyle>
    )
}