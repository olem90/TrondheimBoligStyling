import styled from "styled-components";

export const ContactStyle = styled.div`
  width:800px;
  margin: auto;
  display: flex; 
  
  h2 {
    color: #fff;
  }
` 

export const ContactFormStyle = styled.form`  
  box-sizing: border-box;
  width: 500px;
  display: flex; 
  flex-direction: column;
  border: 3px solid #000;  
  padding: 20px;
  margin: auto;
  color: #fff;
  background: linear-gradient(to right, #6a11cb, #6a11cb,  #2579fc);   
  
  button {
    background: #000; 
    color: #fff;  
    margin-top: 12px; 
    border-radius: 5px;  
    font-weight: bold;  
  } 
 
  input {
    padding: 3px;
    background: inherit;
    border: 0;
    border-bottom: 2px solid rgba(255, 255, 255, 0.9);
  } 

  textarea {
    padding: 5px;
    background: inherit;  
    border: 0; 
  }
`

export const ContactFormStyle2 = styled(ContactFormStyle)` 
  color: #000; 
  height: 100%; 
  background: #fff;
  
  h2 {  
    color: #000;
  }
`

export const ContactStyleWrapper = styled.section`
  box-sizing: border-box; 
  background: #F8F8F8; 
  height: 100vh;   
  display: flex;
  flex-direction: column;  
`