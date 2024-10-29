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
      font-family: 'Lora','roboto', serif;
      transition: .3s ease;
      text-decoration: none;

      &:hover {
        color: #D4AF37; 
      }
    }

    .closeButton {
        display: none;
        position: absolute;
        top: 20px;
        right: 20px;
        font-size: 24px;
        color: #C0A16B;
        background: none;
        border: none;
        cursor: pointer;
        z-index: 100;
        
        &:hover {
          color: #D4AF37;
        }
      }

    &.open {
      display: flex;
      flex-direction: column;
      position: fixed;
      justify-content: center;
      align-items: center;
      top: 0;
      left: 0;
      width: 100%;
      min-height: 100vh; 
      min-height: 100svh; 
      background: rgba(0, 0, 0, 0.9);
      max-height: 500px;
      z-index: 99;

      .closeButton {
        display: block;
      }

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

  &.open {
    span, span::before, span::after {
    content: '';
    display: block;
    width: 100%;
    height: 3px;
    background: #C0A16B;  
    position: fixed;
    transition: transform 0.3s ease, opacity 0.3s ease;
    z-index: 100;
  }
  }

  span::before {
    transform: translateY(-8px);
  }

  span::after {
    transform: translateY(8px);
  }

  &.open span {
    transform: rotate(45deg);
    display: none;

    &::before {
      display: none;
    }

    &::after {
      opacity: 0;
    }
  }

  @media(max-width: 650px) {
    display: block;
  }
`;
