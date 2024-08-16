import styled from "styled-components";

export const HeaderTextStyle = styled.div`
  color: #fff;
  font-size: 38px;
  font-weight: bold;
  padding: 0;
  padding-inline: 7px;
  background: rgba(0, 0, 0, 0.6); 
  text-align: center;
  margin-block: auto; 
  width: 100%; 
  border-radius: 5px; 
  z-index: 99; 
  font-family: PlayfairDisplay, sans serif; 
`   

export const HeaderTextStyleContainer = styled.div`
  display: block;
  margin-top: 50px;
  position: absolute; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
` 
 
export const HeaderTextStyle2 = styled(HeaderTextStyle)` 
font-size: 38px;  
font-family: PlayfairDisplay, sans serif;
padding: 0;
padding-inline: 7px;
background: rgba(0, 0, 0, 0.6); 
`
 