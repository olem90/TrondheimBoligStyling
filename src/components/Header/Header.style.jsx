import styled from "styled-components";

export const HeaderStyle = styled.header`
  height: 100dvh;
  width: 100%;
  display: flex;
  position: relative;
   
  &::before {
    content: '';
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: url(${props => props.$bgimage});
    background-size: cover;
    background-position: center;
    z-index: -1;
  }
`