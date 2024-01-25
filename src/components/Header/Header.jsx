import { HeaderStyle } from "./Header.style";
import { Nav } from "../Nav/Nav";
import { HeaderText } from "../HeaderText/HeaderText";

export const Header = ({ scrollToAboutUs, scrollToContact }) => {
    return (
        <HeaderStyle>
            <Nav scrollToContact={scrollToContact}
            scrollToAboutUs={scrollToAboutUs} />
            <HeaderText />
        </HeaderStyle>
    )
}
