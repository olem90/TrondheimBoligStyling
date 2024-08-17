import styled from "styled-components";

export const PriserContainer = styled.div`
  padding: 30px;
  max-width: 50%;  
  margin: auto; 
  box-shadow: 2px rgba(255, 255, 255);
  margin-block: 30px;

  .subparagraf {
    font-size: 16px;
  }

  .buttons-container {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    gap: 15px;
      
    button {
      border: 1px solid #000;
      font-size: 20px;
      border-radius: 5px;
    }
  }

  h2 {
   text-align: center;
   font-size: 32px;
   margin-top: 90px;
  }

  p, h3 {
    padding-inline: 5px;
  }

  .price {
    margin-top: 40px; 
  }

  .price-section {
    max-width: 800px;
    margin-inline: auto;
  }

  h3 {
    margin-top: 85px;
  }

  p{
    font-size: 18px;
  }
`  

export const PriserWrapper = styled.div`
  font-family: PlayfairDisplay, sans serif; 
  background: #F7F5EB;   
  border: 1px solid transparent;
  height:100dvh; 
`   