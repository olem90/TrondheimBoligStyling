import { HeaderStyle } from "./Header.style";
import { Nav } from "../Nav/Nav";
import { HeaderText } from "../HeaderText/HeaderText";

export const Header = ({ scrollToAboutUs, scrollToContact, scrollToGallery }) => {
    return (
        <HeaderStyle>
            <Nav 
            scrollToContact={scrollToContact}
            scrollToAboutUs={scrollToAboutUs} 
            scrollToGallery={scrollToGallery}
            />
            <HeaderText />
        </HeaderStyle>
    )
}
