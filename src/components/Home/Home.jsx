import React, { useRef } from "react";
import { HomeStyle } from "./Home.style";
import { Layout } from "../Layout/Layout";
import { AboutUs } from "../AboutUs/AboutUs";
import { Contact } from "../Contact/Contact";
import { Gallery } from "../Gallery/Gallery";

export const Home = () => {
    const aboutUsRef = useRef(null);
    const contactRef = useRef(null);


    const scrollToAboutUs = () => {
        aboutUsRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <HomeStyle>
            <Layout 
            scrollToAboutUs={scrollToAboutUs}
            scrollToContact={scrollToContact}
            >
                <Gallery /> 
                <AboutUs ref={aboutUsRef} />
                <Contact ref={contactRef} /> 
            </Layout>
        </HomeStyle>
    )
}
