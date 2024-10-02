import React, { useState, useEffect } from "react";
import { HeaderStyle } from "./Header.style";
import { Nav } from "../Nav/Nav";
import { HeaderText } from "../HeaderText/HeaderText";
import bolig7 from "../../images/bolig-7.jpg";
import bolig8 from "../../images/bolig-8.jpg";
import bolig9 from "../../images/bolig-9.jpg";

export const Header = ({ scrollToAboutUs, scrollToContact, scrollToGallery, scrollToPriser}) => {
    const images = [
        {src: bolig7, alt: "Vakkert designet stue med moderne møbler."}, 
        {src: bolig8, alt: "Romslig kjøkkenområde med stilige innredninger."}, 
        {src: bolig9, alt:"Elegant soverom med en beroligende atmosfære."}];

    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((currentIndex) => (currentIndex + 1) % images.length);
        }, 8000); 
 
        return () => clearInterval(intervalId);  
    }, []);

    return (
        <HeaderStyle $bgimage={images[currentImageIndex].src}>
            <Nav 
                scrollToPriser={scrollToPriser}
                scrollToContact={scrollToContact}
                scrollToAboutUs={scrollToAboutUs} 
                scrollToGallery={scrollToGallery} 
            />
            <HeaderText currentImageIndex={currentImageIndex} />
        </HeaderStyle>
    )
}
