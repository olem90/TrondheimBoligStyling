import styled from "styled-components";

export const GalleryStyle = styled.div`
  box-sizing: border-box; 
  width: 80%;  
  margin-inline: auto;
  display: flex; 
  flex-direction: column;  
  margin: auto;  
  position: relative;  
  height: 90%;
  
  .h2-front {
    text-align: center;  
    font-size: 54px;
    color: #000;
    font-family: 'Cormorant Garamond', serif; 
    font-weight: bold; 
    margin: 0 0 30px 0; 
  }
 
  .gallery-page {  
    box-sizing: border-box; 
    width: 100%;
    height: 100%;
    padding: 15px;
    transform-style: preserve-3d;   
    transition: transform 0.8s;  
    transform-origin: center;   
    perspective: 1000px;    
    margin: auto;

    .back {
      box-sizing: border-box; 
      position: absolute;
      top: 0;
      left: 0; 
      width: 100%; 
      height: 100%;
      backface-visibility: hidden;  
      transform: rotateY(0deg);
      display: flex; 
      justify-content: center; 
      align-items: center;   
      visibility: hidden; 
      flex-direction: column;
 
      .pagination-buttons {  
        box-sizing: border-box;  
        display: flex; 
        margin-top: 50px; 
        padding: 5p;
        width: 88%;
        
        button {
          border: none;
          outline: none; 
        }
           
        .lukk-galleri {    
          display: flex;
          margin-left: 240px;
          margin-right: auto;    
          justify-content: center;
          align-items: center;    
          width: 100px;   
          padding: 1px; 
          color: #000;
          text-decoration: underline;
          margin-left: 0;
        }  
 
        .current-page {
          font-weight: bold;
          text-decoration: underline 2px solid #000;
        }   
      } 

      .gallery-h2 { 
        font-size: 54px;
        color: #000;
        font-family: 'Cormorant Garamond', serif; 
        margin: 0 0 30px 0;
      }
 
      .images-container {
        box-sizing: border-box;  
        width: 88%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);  
        gap: 25px 80px; 
        
        img { 
          max-height: 210px;  
          min-width: 100%;    
          object-fit: cover;    
 
          &:hover  {
            opacity: 1;
          }
        }
      }
    } 

    .front {
      box-sizing: border-box; 
      backface-visibility: hidden;   
      opacity: 1; 
      transition: opacity 0.3s ease;
    }

    &.flipped { 
      transform: rotateY(180deg); 

      .back {
        transform: rotateY(180deg);
        visibility: visible;
      }
    }

    
  } 
   
  .gallery-front-img { 
    min-width: 100%;    
    object-fit: cover;    
    height: 600px;       
    margin-inline: auto;  
    background-color: rgba(255, 255, 255, 0.4);     
    opacity: 1; 
  }  
  
  .galleri-link {
    border: 2px solid transparent;
    padding: 7px 18px; 
    color: #8B5E3C;
    font-weight: bold;
    display: flex;
    max-width: fit-content; 
    border-radius: 5px;
    margin-inline: auto;
    font-size: 44px;
    font-family: Lora, PlayfairDisplay, sans serif;
    margin-top: 35px;
    transition: border 0.3s ease; 

    &:hover { 
      cursor: pointer;
      border: 2px solid #8B5E3C; 
  } 
  }   
`      

export const ClickableImage = styled.button`
  border: none;
  background: none;
  padding: 0; 
  cursor: pointer;
  max-height: 210px;  
`;

export const CloseButton = styled.span`
  position: absolute;
  top: 0px;
  right: 20px; 
  cursor: pointer;    
  font-size: 40px; 
`;
 
export const ModalContent = styled.div`  
  box-sizing: border-box;  
  padding: 15px;  
  position: relative; 
  display: flex;    
  flex-direction: column;
  background-color: #fff;
  border: 7px solid silver; 
  border-radius: 7px;  
  max-width: 760px;  
  max-height: 610px;   
  min-width: 760px;     
  min-height: 610px;   
  overflow: hidden;
  
  .prev, .next { 
    position: absolute;     
    top: 50%; 
    transform: translateY(-50%);
    border: none;
    cursor: pointer;
    font-size: 66px;  
    display: flex;  
    justify-content: center;  
    align-items: center;   
    max-width: 60px; 
    background: rgba(255, 255, 255, 0.5);   
    padding: 20px;
    transition: opacity 0.5s ease;

    &:hover {
      background: rgba(255, 255, 255, 0.8); 
    }
  }      
  
  .next { 
    right: 20px;  
  }
 
  .prev {
    left: 20px;  
  } 
  
  .modal-img {  
    margin: 0;  
    max-width: 715px;     
    min-width: 715px;      
    max-height: 470px;   
    min-height: 470px;       
  }   

  .thumbnails {  
    display: flex;
    margin-top: 5px;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap; /* Ensures thumbnails are in a single row */ 
    scrollbar-width: thin; /* Makes the scrollbar thinner (for supported browsers) */  
    scrollbar-color: #888 #e0e0e0;
    gap: 10px;
    min-height: 94px;
 
  .thumb-img {
    max-width: 100px;
    min-width: 100px;
    max-height: 80px;
    min-height: 80px;
  }

  .thumb-img.active {
    border: 2px solid #000;
  }
  }
`; 

export const ModalBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transform: translateY(-12%);
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  min-height: 80vh;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;
 
export const GalleryStyleWrapper = styled.section` 
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F0E1D1;
`  


