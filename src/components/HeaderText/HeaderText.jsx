import { HeaderTextStyle, HeaderTextStyle2 } from "./HeaderText.style";
import { HeaderTextStyleContainer } from "./HeaderText.style";

export const HeaderText = ({ currentImageIndex }) => {

    let textContent;
    switch (currentImageIndex) {
        case 0:
            textContent = (
                <>
                    <HeaderTextStyle>
                        Avslør Ditt Hjems Skjønnhet.
                    </HeaderTextStyle>
                </> 
            );
            break;
        case 1:
            textContent = (
                <>
                    <HeaderTextStyle2>
                        Gjør Ditt Hjem Uimotståelig.
                    </HeaderTextStyle2>
                </> 
            );
            break;
        case 2:
            textContent = (
                <>
                <HeaderTextStyle>
                    Fra bolig til drømmested.
                </HeaderTextStyle>
            </> 
            );
            break;
        // Add more cases as needed for more images
        default:
            textContent = (
                "Skjønnhet i Hver Detalj."
            );
    }

    return <HeaderTextStyleContainer>{textContent}</HeaderTextStyleContainer>;
};
