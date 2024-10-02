import styled from "styled-components";

export const FooterStyle = styled.footer`
  background: #000;
  max-width: 100%;
  height: 100%;
  border: 2px solid transparent;

  .footer-content {
    width: fit-content;
    padding: 15px 10px;
    margin-left: 60px;

    @media(max-width: 500px) {
      margin: auto;
    }
  }

  h2 {
     font-family: 'Dancing Script', serif;
     font-size: 40px;
     margin: 0;
     color: #fff;
     font-weight: 100; 
  }

  a {
    color: #fff;
    font-family: 'Roboto', sans-serif;
  }
  
  
  
` 