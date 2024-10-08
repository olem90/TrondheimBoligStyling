import styled from "styled-components";

export const PriserContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 2px rgba(255, 255, 255);
  margin-inline: auto;

  .subparagraf {
    font-family: 'Lora', serif;
    font-style: italic;
    color: #000;
  }

  .frame {
    display: flex;
    align-items: center;
    justify-content: center;
    background: white;
    padding: 10px 30px;
    box-shadow:
        0 0 0 2px rgba(25, 25, 112, 0.1), 
        0 0 4px 2px rgba(0, 0, 128, 0.4);
    border-radius: 1px;
    width: clamp(500px, 50%, 100%);
    margin-block: 40px;

    text-align: center;
    margin-inline: auto;

    @media(max-width: 1200px) {
      width: clamp(400px, 60%, 100%);

    }

    @media(max-width: 900px) {
      width: clamp(400px, 75%, 100%);
    }

    @media(max-width: 700px) {
      width: clamp(240px, 85%, 100%);
      padding: 10px 20px;
    }

    @media(max-width: 500px) {
      width: clamp(200px, 85%, 98%);
      padding: 7px 14px;
    }

    @media(max-width: 320px) {
      width: clamp(200px, 85%, 98%);
      padding: 5px 10px;
    }
}

  .buttons-container {
    display: flex;
    flex-direction: row;
    gap:  25px;
    margin: auto;
    width: fit-content;

    div {
      display: flex;
      flex-direction: row;
      gap: 25px;
    }
    
    button {
      box-shadow: 0 1px 3px rgba(143, 124, 107, 0.7);
      font-size: 20px;
      border-radius: 5px;
      font-family: 'Cormorant Garamond', serif;
      font-weight: bold;
      padding: 6px 15px;
      border: 2px solid transparent;
      transition: box-shadow 0.2s ease;
      color: #000;
      background: #F7F5EB;

      &:hover  {
        box-shadow: 0 1px 3px rgba(100, 80, 65, 0.9);
      }
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
  
      button {
        padding: 2px 4px;
        font-size: 19px;
      }

    }

    @media(max-width: 550px) {
      flex-direction: column;

      .helstyling-btn {
        margin-left: 61px;
      }
    }

  }

  h2 {
   text-align: center;
   font-size: 45px;
   margin-top: 60px;
   font-family: 'Lora', serif;
   color: #000;
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
`  

export const PriserWrapper = styled.div`
  box-sizing: border-box;
  font-family: PlayfairDisplay, sans serif; 
  background: #F7F5EB;   
  border: 1px solid transparent;
  padding-bottom: 180px;
  padding-top: 90px;
`   

