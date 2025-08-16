import styled from "styled-components";

export const PriserContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px rgba(255, 255, 255);
  margin: auto;
  min-height: 100%;

  .subparagraf {
    font-family: 'Lora', serif;
    font-style: italic;
    color: #000;
  }

  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #FAFAFA;
    padding: 10px 30px;
    box-shadow: 0 0 0 2px rgb(240, 234, 214);
    border-radius: 1px;
    width: 96%;
    margin-block: 40px;
    text-align: center;
    margin-inline: auto;

    @media(max-width: 700px) {
      padding: 10px;
    }

    @media(max-width: 320px) {
      width: 97%;
      padding: 6px;
    }
}

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap: 25px;
    margin-inline: auto;
    margin-top: 20px;

    div {
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
    
    button {
      box-shadow: 0 1px 3px rgba(143, 124, 107, 0.7);
      font-size: 20px;
      border-radius: 3px;
      font-family: 'Cormorant Garamond', serif;
      font-weight: bold;
      padding: 6px 15px;
      border: 2px solid transparent;
      transition: box-shadow 0.2s ease;
      color: #000;
      background: #F0EAD6;
      border: 1px solid #000;
      
      &:hover  {
        box-shadow: 0 1px 3px rgba(100, 80, 65, 0.9);
      }
    }

    button.active {
      border: 2px solid #000;
    }

    @media(max-width: 900px) {

      button {
        padding: 6px 10px;
        font-size: 19px;
      }

    }

    @media(max-width: 700px) {

      button {
        padding: 6px 10px;
        font-size: 18px;
      }

    }

    @media(max-width: 600px) {
      div {
        display: flex;
        flex-direction: column;
        gap: 9px;
        min-width: 200px;
      }
  
      button {
        padding: 2px 0px;
        font-size: 19px;
        min-width: 200px;
      }
    }

    @media(max-width: 550px) {
      flex-direction: column;
    }

  }

  

  

  h3 {
    padding-inline: 5px;
    font-family: 'Lora', serif;
    font-size: 28px; 
    margin-top: 20px; 
    color: #000;

    @media(max-width: 900px) {
      font-size: 24px;

    }
  }

  .price {
    margin-top: 40px;
    color: #000;
  }

  .price-section {
    max-width: 800px;
    margin-inline: auto;
  }

  p{
    font-size: 18px;
    font-family: 'Lora', serif;
    color: #000;

    @media(max-width: 900px) {
      font-size: 17px;
    }

    @media(max-width: 700px) {
      font-size: 15px;
    }
  }

  .bullet {
    font-size: 20px;
    font-weight: bold;
  }

  .active {
    border: 5px solid #000;
  }
`  

export const PriserWrapper = styled.div`
  box-sizing: border-box;
  min-height: 100vh;
  min-height: 100dvh;
  font-family: PlayfairDisplay, sans serif;
  background: #e3ddcd;
  border: 1px solid transparent;
  padding-block: 30px 60px;

  h2 {
   text-align: center;
   font-size: 45px;
   margin-top: 20px;
   font-family: 'Lora', serif;
   color: #000;
   height: fit-content;
   max-height: 60px;
   margin-inline: auto;
  }

  @media(max-width: 800px) {
    height: 100%;
    min-height: 100%;
    padding-block: 60px 100px;
  }
`

