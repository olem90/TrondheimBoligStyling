import styled from "styled-components";

export const HeaderTextStyle = styled.div`
  color: #fff;
  font-size: 42px;
  font-weight: bold;
  padding: 6px;
  background: rgba(0, 0, 0, 0.6); 
  text-align: center;
  margin-block: auto; 
  width: 100%;
  border-radius: 5px; 
  z-index: 99;
  white-space: nowrap;
  font-family: 'Dancing Script', 'roboto', 'Lora', serif;

  @media(max-width: 800px) {
    font-size: 36px;
  }

  @media(max-width: 600px) {
    font-size: 30px;
  }

  @media(max-width: 400px) {
    font-size: 24px;
  }

  @media(max-width: 300px) {
    font-size: 20px;
  }
`   

export const HeaderTextStyleContainer = styled.div`
  display: block;
  margin-top: 50px;
  position: absolute; 
  font-family: 'Dancing Script', 'roboto', 'Lora', serif;
  top: 50%; 
  left: 50%; 
  transform: translate(-50%, -50%);
` 
 
export const HeaderTextStyle2 = styled(HeaderTextStyle)` 
font-size: 38px;  
font-family: 'Dancing Script', 'roboto', 'Lora', serif;

  @media(max-width: 800px) {
    font-size: 36px;
  }

  @media(max-width: 600px) {
    font-size: 30px;
  }

  @media(max-width: 400px) {
    font-size: 24px;
  }

  @media(max-width: 300px) {
    font-size: 20px;
  }
`
 