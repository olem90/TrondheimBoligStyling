import styled from "styled-components";

export const ContactStyle = styled.div`
  box-sizing: border-box;
  margin: auto;
  display: flex;
  flex-direction: column;
  width: 100%;

  h1 {
    text-align: center;
    color: #E0F7FA;
    font-family: 'Dancing Script', serif;
    font-size: 64px;
    font-weight: bold; 
  }
  
  h2 {
    color: #000;
    text-align: center;
    font-family: 'Dancing Script', serif;
    font-weight: bold;
    font-size: 34px;
  }

  .kontakt {
    display: flex;
    flex-direction: column;
    width: clamp(400px, 50%, 500px); 
    margin-inline: auto;
    padding-block: 20px;
    
    div {
      margin-inline: auto;
      width: 100%;
      max-height: fit-content;
      margin-top: 10px;
      
      a {
        font-size: 25px;
        white-space: nowrap;  
        color: #E0F7FA;
 
        &:hover {
          color: #fff;
          cursor: pointer; 
        }
      }

      .insta-icon {
        color: #fff;
        background: purple;
        border-radius: 5px;
      }

      .phone-icon {
        color: #2ecc71;
      }

      @media(max-width: 500px) {
        width: clamp(350px, 50%, 500px); 
      }
  }
` 

export const ContactFormStyle = styled.form`  
  box-sizing: border-box;
  width: clamp(400px, 50%, 500px); 
  display: flex; 
  flex-direction: column;
  border: 2px solid #6E4B3A;
  padding: 20px;
  margin: auto;
  background: #F0EDE5;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(143, 124, 107, 0.1);
  
  button {
    background-color: transparent;
    color: #8F7C6B;  
    margin-top: 12px; 
    border-radius: 5px;  
    font-weight: bold;
    font-size: 25px;
    border: 2px solid transparent;
    font-family: 'Dancing Script', serif;
    padding: 5px;
    border: 2px solid #8F7C6B;
    box-shadow: 0 4px 6px rgba(110, 75, 58, 0.3), /* Darker shadow */
                0 1px 3px rgba(143, 124, 107, 0.1); /* Lighter shadow */
    transition: box-shadow 0.3s ease;

    &:hover {
      box-shadow: 0 6px 8px rgba(110, 75, 58, 0.4), 
                  0 2px 4px rgba(143, 124, 107, 0.2);
    }
  } 
 
  input {
    padding: 5px;
    background: #fff; 
    border-radius: 3px; 
    height: 20px;
    border: 1px solid #B0A295;
    font-family: 'Roboto', sans-serif;
    color: #333333;
  }

  input:focus,
  input:focus,
  textarea:focus {
    border-color: #8A6E5A;
    box-shadow: 0 0 0 1px rgba(138, 110, 90, 0.25);
    outline: 1px solid #6E4B3A;
  }

  label {
    margin-block: 5px;
    color: #333333; 
  }

  span {
    color: #dc3545;
    font-size: 15px;
  }

  textarea {
    padding:5px;
    background: #fff;
    border: 1px solid #D2B48C;
    min-height: 100px;
    border-radius: 4px;
    color: #333333;
    max-width: 600px;
    font-family: 'Roboto', sans-serif;
    font-size: 13px; 
    margin-bottom: 20px;
    resize: vertical;
    transition: border-color 0.3s ease;
  }

  .valid {
    border-color: #1E7B32; /* Green border for valid input */
    outline: none;
  }

.invalid {
    border-color: #dc3545;
}

@media(max-width: 500px) {
  width: clamp(350px, 50%, 500px); 
}
`

export const ContactStyleWrapper = styled.section`
  box-sizing: border-box;
  background: #1B3A57;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`