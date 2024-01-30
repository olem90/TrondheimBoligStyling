import styled from "styled-components";

export const NavStyle = styled.nav`
  color: #fff;
  display: flex;
  justify-content: center;
  min-width: 100%;
  margin-inline: auto;   
  height: 110px; 
  background: #000; 

  a {
    color: gold; 
    font-size: 20px;
  }  

  .navLinks {
    margin-left: auto;   
    margin-block: auto;  
  } 
  .om-oss-link {
   margin-right: 65px; 
  }

  .kontakt-oss-link {
    margin-right: 65px;  
  }

  .gallery-link {  
    margin-right: 145px;   
  }
` 

export const LogoStyle = styled.div`
  width: 200px;
  margin-left: 30px;   
  max-height: 110px;   
  display: flex; 
  align-items: center;

  .logo {
    width: 100%;  
    max-height: 100%;  
    object-fit: cover; 
  }  
`