import styled from "styled-components";

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
    background-image: url(${props => props.$bgimage});
    background-size: cover; 
    background-position: center;
    filter: brightness(70%); 
    z-index: -1;  
  }
`