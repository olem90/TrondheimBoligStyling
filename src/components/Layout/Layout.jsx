import { LayoutStyles } from "./Layout.style";
import { Footer } from "../Footer/Footer";
import { Header } from "../Header/Header";

export const Layout = ({ children, scrollToAboutUs, scrollToContact }) => {
    return (
        <LayoutStyles>
            <Header scrollToContact={scrollToContact}
            scrollToAboutUs={scrollToAboutUs} />
            {children}
            <Footer />
        </LayoutStyles>
    )
}
