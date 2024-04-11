import React, { useRef } from "react";
import { HomeStyle } from "./Home.style";
import { Layout } from "../Layout/Layout";
import { AboutUs } from "../AboutUs/AboutUs";
import { Contact } from "../Contact/Contact";
import { Gallery } from "../Gallery/Gallery";
import { Priser } from "../Priser/Priser";

export const Home = () => {
    const aboutUsRef = useRef(null);
    const contactRef = useRef(null);
    const galleryRef = useRef(null);
    const priserRef = useRef(null);

    const scrollToPriser = () => {
        priserRef.current?.scrollIntoView({ behavior: 'smooth' });
    };
    
    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' }); 
    };

    const scrollToGallery = () => {
        galleryRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HomeStyle>
            <Layout 
            scrollToGallery={scrollToGallery}  
            scrollToAboutUs={scrollToAboutUs}
            scrollToPriser={scrollToPriser} 
            scrollToContact={scrollToContact} 
            > 
                <Gallery ref={galleryRef} />            
                <AboutUs ref={aboutUsRef} />
                <Priser ref={priserRef} />
                <Contact ref={contactRef} />          
            </Layout>
        </HomeStyle> 
    ) 
}
