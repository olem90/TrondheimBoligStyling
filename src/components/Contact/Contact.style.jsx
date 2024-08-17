import styled from "styled-components";

export const ContactStyle = styled.div`
  
  margin: auto;
  display: flex;
  flex-direction: column;

  h1 {
    text-align: center;
  }
  
  h2 {
    color: #000;
    text-align: center;
  }

  .kontakt {
    display: flex;
    flex-direction: column;
    width: inherit; 
    padding: 20px 0;
    margin-top: 30px;
    
    div {
      margin-inline: auto;
      width: 50%;
      margin-top: 10px;
      
      a {
        font-size: 25px;
        white-space: nowrap;  
        color: #2C3E50;
 
        &:hover {
          color: #1A242F;
          cursor: pointer; 
        }
      }
  }
` 

export const ContactFormStyle = styled.form`  
  box-sizing: border-box;
  width: 600px;
  display: flex; 
  flex-direction: column;
  border: 3px solid #000;  
  padding: 20px;
  margin: auto;
  
  button {
    background: #000; 
    color: #fff;  
    margin-top: 12px; 
    border-radius: 5px;  
    font-weight: bold;  
  } 
 
  input {
    padding: 5px;
    background: #fff; 
    border-radius: 3px; 
    height: 20px;
    border: 1px solid #000;
  } 

  label {
    margin-block: 5px;
  }

  textarea {
    padding: 10px;
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

  textarea:focus {
    border-color: #4B2E1F;
  }
`

export const ContactStyleWrapper = styled.section`
  box-sizing: border-box; 
  background: #F3E5C8; 
  height: 100vh;   
  display: flex;
  flex-direction: column;
`