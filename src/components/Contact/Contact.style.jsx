import styled from "styled-components";

export const ContactStyle = styled.div`
  width:800px;
  margin: auto;    

  .insta-icon {
    font-size: 34px; 
    background: blue; 
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;    
    
    &:hover {
      cursor: pointer;
    }
  } 
`

export const ContactFormStyle = styled.form`  
  box-sizing: border-box;
  width: 800px;
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
    padding: 3px;  
  }

  textarea {
    padding: 5px;  
  }
`

export const ContactStyleWrapper = styled.section`
  box-sizing: border-box; 
  background: #F8F8F8; 
  height: 100vh;   
  display: flex;
  flex-direction: column;  
`