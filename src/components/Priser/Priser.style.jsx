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

  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background: white;
    box-shadow: 
        0 0 0 4px #d4af37, /* Inner shadow */
        0 0 0 8px #b8860b, /* Middle shadow */
        0 0 25px 10px rgba(0, 0, 0, 0.3);
    border-radius: 3px; 
    width: fit-content; 
    margin: auto;
    margin-top: 90px;
    text-align: center;
    
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
      font-family: 'Cormorant Garamond', serif;
      font-weight: bold; 
    }
  }

  h2 {
   text-align: center;
   font-size: 45px;
   margin-top: 90px;
   font-family: 'Cormorant Garamond', serif; 
  }

  h3 {
    padding-inline: 5px;
    font-family: 'Cormorant Garamond', serif;
    font-size: 28px; 
    margin-top: 20px; 
  }

  .price {
    margin-top: 40px; 
  }

  .price-section {
    max-width: 800px;
    margin-inline: auto;
  }

  p{
    font-size: 18px;
    font-family: 'Roboto', serif;
  }

  .bullet {
    font-size: 20px;
    font-weight: bold;
  }
`  

export const PriserWrapper = styled.div`
  font-family: PlayfairDisplay, sans serif; 
  background: #F7F5EB;   
  border: 1px solid transparent;
  height:100dvh; 
`   

