import styled from "styled-components";

export const GalleryStyle = styled.div`
  box-sizing: border-box; 
  width: 90%;
  display: flex;
  flex-direction: column;  
  margin: auto;

  @media(max-width: 500px) {
        width: 95%;
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
    padding-block: 30px;

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
          background: #000;
          color: #fff;
          border-radius: 5px;
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
          text-decoration: underline 2px solid #fff;
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
    }

    @media(max-width: 300px) {
      font-size: 30px;
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

export const CloseButton = styled.button`
  box-sizing: border-box;
  position: absolute;
  top: 15px;
  right: 15px; 
  cursor: pointer;
  color: #000;
  font-size: 55px;
  padding: 0;
  height: 42px;
  border: none;
  background: rgba(255, 255, 255, 0.33);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  @media(max-width: 800px) {
    font-size: 40px;
    max-height: 32px;
  }
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
  max-width: 90%;  
  max-height: 90%;
  width: 820px;
  height: auto;
  overflow: hidden;

  @media(max-width: 450px) {
    max-width: 98%;
  }
  
  .prev, .next { 
    position: absolute;     
    top: 46%;
    transform: translateY(-50%);
    border: none;
    border-radius: 3px;
    cursor: pointer;
    font-size: 40px;  
    display: flex;  
    justify-content: center;  
    align-items: center;   
    max-width: 36px;
    background: rgba(255, 255, 255, 0.33);
    padding: 10px;
    transition: opacity 0.5s ease;
    outline: 1px solid transparent;

    @media(max-width: 600px) {
     font-size: 32px;
     padding: 6px 2px;
    }

    @media(max-width: 450px) {
      font-size: 25px;
    }

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
    min-width: 100%; 
    min-height: 550px;
    max-height: 550px;

    @media(max-width: 600px) {
      min-height: 420px;
      max-height: 420px;
    }

    @media(max-width: 450px) {
      min-height: 340px;
      max-height: 340px;
    }
  }   

  .thumbnails {  
    display: flex;
    overflow-x: auto;
    overflow-y: hidden;
    white-space: nowrap; 
    scrollbar-width: thin;
    scrollbar-color: #888 #e0e0e0;
    gap: 10px;
    align-items: center;
    min-height: 92px;
 
  .thumb-img {
    max-width: 100px;
    min-width: 100px;
    max-height: 80px;
    min-height: 80px;

    @media(max-width: 600px) {
      max-width: 90px;
      min-width: 90px;
      max-height: 70px;
      min-height: 70px;
    }

    @media(max-width: 450px) {
      max-width: 70px;
      min-width: 70px;
      max-height: 70px;
      min-height: 70px;
    }

    @media(max-width: 350px) {
      max-width: 60px;
      min-width: 60px;
      max-height: 60px;
      min-height: 60px;
    }


  }

  .thumb-img.active {
    border: 2px solid #0B0C1A;
  }
  }
`;

export const ModalBackdrop = styled.div`
  box-sizing: border-box;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`;

export const GalleryStyleWrapper = styled.section`
  box-sizing: border-box;
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%; 
  display: flex;
  justify-content: center;
  align-items: center;
  background: #F0E1D1;

  @media(max-width: 800px) {
    height: 100%;
    min-height: 100%;
    padding-block: 40px 60px;
  }
`