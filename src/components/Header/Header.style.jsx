import styled from "styled-components";
import testImage from "../../images/testImage.jpg";

export const HeaderStyle = styled.header` 
  height: 100vh; 
  display: flex;
  position: relative; 

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${testImage});
    background-size: cover;
    background-position: center;
    filter: brightness(70%);
    z-index: -1; 

    animation: increaseBrightness 6s ease-in-out; 
  }

  @keyframes increaseBrightness {
    0%, 100% { filter: brightness(50%); } // Starts and ends at lower brightness
    69% { filter: brightness(100%); } // Brightness increases to 100% in the middle  
    100% { filter: brightness(100%); }
  }
`  



