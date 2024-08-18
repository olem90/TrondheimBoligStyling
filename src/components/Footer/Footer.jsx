import { FooterStyle } from "./Footer.style";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

export const Footer = () => {
    return (
        <FooterStyle>
            <div className="footer-content">
                <div>
                    <h2>Kontakt oss:</h2>
                    <p>
                        <a>
                          <FontAwesomeIcon icon={faPhone} /> 93271886
                        </a>
                    </p>
                </div>

                <div>
                    <p>
                        <a className="instagram-icon" href="https://www.instagram.com/trondheimboligstyling/?igsh=MWZhMW1hNm14OGY5bQ%3D%3D" target="_blank">
                          <FontAwesomeIcon icon={faInstagram} /> Trondheimboligstyling
                        </a>  
                    </p>
                </div>
            </div>
        </FooterStyle>
    )
}