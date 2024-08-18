import styled from "styled-components";

export const HeaderTextStyle = styled.div`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  padding: 10px;
  background: rgba(0, 0, 0, 0.6); 
  text-align: center;
  margin-block: auto; 
  width: 100%; 
  border-radius: 5px; 
  z-index: 99; 
  font-family: 'Cormorant Garamond', serif; 
`   

export const HeaderTextStyleContainer = styled.div`
  display: block;
  margin-top: 50px;
  position: absolute; 
  font-family: 'Cormorant Garamond', serif; 
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%); 
` 
 
export const HeaderTextStyle2 = styled(HeaderTextStyle)` 
font-size: 38px;  
font-family: 'Cormorant Garamond', serif;
padding: 10px;
background: rgba(0, 0, 0, 0.6); 
`
 