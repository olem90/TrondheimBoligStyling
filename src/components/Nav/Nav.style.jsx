
/*
export const NavStyle = styled.nav`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  min-width: 100%;
  margin-inline: auto;   
  height: 110px; 
  background: #000; 

  a {
    color: #C0A16B;  
    font-size: 20px;
    font-family: 'Lora', serif;
    transition: .3s ease;
    
    &:hover {
      color: #D4AF37; 
    }
  }  

  .navLinks {
    display: flex;
    margin-left: auto;
    margin-block: auto;
  }  

  .priser-link {
    margin-right: 65px; 
  }

  .om-oss-link {
   margin-right: 65px; 
  }

  .kontakt-oss-link {
    margin-right: 145px; 
  }

  .gallery-link {  
    margin-right: 65px;
  }

  @media(max-width: 1000px) {

    a {
      font-size: 18px;
    }

    .priser-link {
      margin-right: 45px; 
    }

    .om-oss-link {
      margin-right: 45px; 
    }

    .kontakt-oss-link {
      margin-right: 80px;    
    }

    .gallery-link {  
      margin-right: 45px;   
    }
  }

  @media(max-width: 800px) {

    .priser-link {
      margin-right: 35px; 
    }

    .om-oss-link {
      margin-right: 35px; 
    }

    .kontakt-oss-link {
      margin-right: 40px;  
    }

    .gallery-link {  
      margin-right: 35px;   
    }
  }

  @media(max-width: 700px) {

    .priser-link {
      margin-right: 25px; 
    }

    .om-oss-link {
      margin-right: 25px; 
    }

    .kontakt-oss-link {
      margin-right: 25px;  
    }

    .gallery-link {  
      margin-right: 25px;   
    }
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

  @media(max-width: 800px) {
    width: 170px;
  }
`
*/


import styled from "styled-components";

export const NavStyle = styled.nav`
  box-sizing: border-box;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 110px; 
  background: #000; 
  padding: 0 20px;

  .navLinks {
    display: flex;
    gap: 20px;
    transition: max-height 0.3s ease;

    a {
      color: #C0A16B;  
      font-size: 20px;
      font-family: 'Lora', serif;
      transition: .3s ease;
      text-decoration: none;

      &:hover {
        color: #D4AF37; 
      }
    }

    &.open {
      display: flex;
      flex-direction: column;
      position: absolute;
      justify-content: center;
      align-items: center;
      top: 0px;
      left: 0;
      width: 100%;
      min-height: 100svh; 
      background: rgba(0, 0, 0, 0.9);
      max-height: 500px;
      z-index: 99;

      a {
        font-weight: bold;
        font-size: 22px;
      }
    }
  }  

  @media(max-width: 650px) {
    .navLinks {
      display: none;
      &.open {
        display: flex;
      }
    }
  }
`;

export const LogoStyle = styled.div`
  width: 200px;
  max-height: 110px;   
  display: flex; 
  align-items: center;

  .logo {
    width: 100%;  
    max-height: 100%;  
    object-fit: cover; 
  }

  @media(max-width: 800px) {
    width: 170px;
  }
`;

export const HamburgerButton = styled.button`
  display: none;
  background: #000;
  border: none;
  outline: 1px solid transparent;
  cursor: pointer;
  width: 40px;
  height: 20px;
  position: relative;
  margin-right: 20px;

  &:focus-visible,
  &:focus,
  &:active {
    outline: 1px solid transparent;
    background: #000;
  }

  span, span::before, span::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: #C0A16B;  
    position: absolute;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 100;
  }

  span::before {
    transform: translateY(-8px);
  }

  span::after {
    transform: translateY(8px);
  }

  &.open span {
    transform: rotate(45deg);

    &::before {
      transform: rotate(-90deg);
      
    }

    &::after {
      opacity: 0;
    }
  }

  @media(max-width: 650px) {
    display: block;
  }
`;
