import styled from "styled-components";

export const GalleryStyle = styled.div`
  box-sizing: border-box; 
  width: 90%;
  display: flex;
  flex-direction: column;  
  margin: auto;

  @media(max-width: 500px) {
        min-width: 95%;
  }

  @media(max-width: 400px) {
        min-width: 95%;
        max-height: 670px;
  }

  .h2-front {
    text-align: center;  
    font-size: 54px;
    color: #000;
    font-family: 'Cormorant Garamond', serif; 
    font-weight: bold; 
    margin: 0 0 30px 0; 
  }

  .h2-back {
        font-size: 48px;
        color: #000;
        font-family: 'Cormorant Garamond', serif;
        margin: auto;
        padding-bottom: 20px;

      }
 
  .gallery-page {  
    box-sizing: border-box; 
    width: 100%;
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
      right: 0;
      height: 100%;
      backface-visibility: hidden;
      transform: rotateY(0deg);
      display: flex;
      display-content: center;
      align-items: center;
      visibility: hidden;
      flex-direction: column;
      max-width: fit-content;
      margin: auto;
 
      .pagination-buttons {
        box-sizing: border-box;
        display: flex;
        margin-top: 15px;
        min-width: 100%;
        
        button {
          border: none;
          padding: 5px 8px;
          margin-inline: 2px;
        }
           
        .lukk-galleri {    
          display: flex;
          margin-right: auto;    
          justify-content: center;
          align-items: center;    
          width: 100px;   
          padding: 1px; 
          color: #000;
          text-decoration: underline;
          margin-left: 0;
          padding-left: 0;
        }  
 
        .current-page {
          font-weight: bold;
          text-decoration: underline 2px solid #000;
        }
        
      @media(max-width: 1500px) {
          width: 90%;
        }

       @media(max-width: 1100px) {
          width: 100%;
        }

        @media(max-width: 500px) {
          min-width: 100%;
        }
      } 

      .images-container {
        box-sizing: border-box;
        max-width: fit-content;
        gap: 10px 100px;
        min-height: 100%;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        
        img {
          max-height: 190px;
          height: 100%;
          width: 100%;
          object-fit: cover;

          @media(max-width: 1100px) {
            max-height: 180px;
            width: clamp(120px, 100%, 320px);
            aspect-ratio: 16 / 12;
          }
          
          @media(max-width: 900px) {
            min-height: 180px;
            aspect-ratio: 16 / 12;
          }

          @media(max-width: 500px) {
            min-height: 150px;
          }
        }
        
        @media(max-width: 1500px) {
          gap: 5px 40px;
          width: 100%;
        }

        @media(max-width: 1100px) {
          gap: 5px 30px;
        }

        @media(max-width:700px) {
            grid-template-columns: repeat(2, 1fr);
            gap: 5px 20px;
          }

        @media(max-width: 500px) {
          min-height: 90%;
          gap: 5px 10px;
        }

        @media(max-width: 400px) {
          min-height: 80%;
          gap: 5px 10px;
        }
      }
         //.back media queries
        @media(max-width: 500px) {
          min-width: 100%;
        }

        @media(max-width: 400px) {
          max-height: fit-content;
        }
    } 

    .front {
      box-sizing: border-box; 
      backface-visibility: hidden;   
      opacity: 1;
      height: 100%;
      margin: auto;
      max-width: 1000px;
      transition: opacity 0.3s ease;
      display: flex;
      flex-direction : column;
      border: 4px solid gold;

      @media(max-width: 400px) {
        border: 2px solid red;
      }
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
    width: 100%; 
    max-width: 1200px; 
    object-fit: cover;    
    height: 500px;       
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
    transition: border 0.3s ease; 
    white-space: nowrap; 

    &:hover { 
      cursor: pointer;
      border: 2px solid #8B5E3C; 
  } 

    @media(max-width: 400px) {
      font-size: 34px;
      margin-top: 10px;
    }

    @media(max-width: 300px) {
      font-size: 30px;
      margin-top: 10px;
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
  color: #000;
  font-size: 40px; 
`;
 
export const ModalContent = styled.div`  
  box-sizing: border-box;  
  padding: 15px;  
  position: relative; 
  display: flex;    
  flex-direction: column;
  background-color: #FAF9F6;
  background: rgb(245, 245, 220);
  border: 7px solid silver;
  border-radius: 3px;  
  max-width: 760px;  
  max-height: 610px;   
  min-width: 760px;     
  min-height: 610px;   
  overflow: hidden;
  
  .prev, .next { 
    position: absolute;     
    top: 46%; 
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
    outline: 1px solid transparent;

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
    white-space: nowrap; 
    scrollbar-width: thin;
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
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const GalleryStyleWrapper = styled.section`
  box-sizing: border-box; 
  min-height: 100svh;
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F0E1D1;
`
