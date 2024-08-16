import { LayoutStyles } from "./Layout.style";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children, scrollToAboutUs, scrollToContact, scrollToGallery, scrollToPriser }) => {
    return (
        <LayoutStyles>
            <Header 
                scrollToPriser={scrollToPriser}
                scrollToContact={scrollToContact}
                scrollToAboutUs={scrollToAboutUs} 
                scrollToGallery={scrollToGallery}
                />
                {children}
            <Footer />
        </LayoutStyles> 
    )
}
