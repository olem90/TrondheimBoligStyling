import styled from "styled-components";

export const HeaderTextStyle = styled.div`
  color: #fff;
  font-size: 28px;
  font-weight: bold;
  padding: 10px;
  text-align: center;
  margin-block: auto; 
  width: 100%; 
  border-radius: 5px; 
  z-index: 99;
`  

export const HeaderTextStyleContainer = styled.div`
  display: block;
  margin-top: 50px;
  position: absolute; 
  top: 360px; 
  left: 50%; 
  transform: translate(-70%, -50%); 

  :nth-child(1) {
    margin-top: 70px; 
  }

  :nth-child(2) { 
    margin-left: 180px;
    margin-top: 70px; 
  }
` 