import styled from "styled-components";

export const GalleryStyle = styled.div`
  width: 80%;  
  margin-inline: auto;
  display: flex; 
  flex-direction: column;  
  margin: auto; 
  position: relative;  
  height: 80%;  
 
  .gallery-page { 
    width: 90%;
    position: relative; 
    transform-style: preserve-3d;
    transition: transform 0.8s; 
    transform-origin: center;  
    perspective: 1000px;    
    margin: auto;   

    h1 {
      width: 68%; 
      margin: auto;
      padding-block: 7px; 
    }

    .back { 
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

      .lukk-galleri {
        border: 2px solid red;
        margin-top: auto; 
        display: flex; 
        margin-right: auto;      
        width: 100px;
        position: absolute; 
        bottom: 0;
        padding: 7px;  
      }

      .images-container {
        width: 100%; 
        display: grid;
        grid-template-columns: repeat(3, 1fr);  
        gap: 40px 20px;   
        

        img { 
          max-height: 240px;   
          min-width: 100%;   
          object-fit: cover;  

          &:hover  {
            opacity: 1; 
          }
        }
      }
    } 

    .front {
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

    .flipped .front {
      opacity: 0; 
    } 
  }
   
  img { 
    width: 100%;    
    object-fit: contain;   
    max-height: 600px;        
    margin-inline: auto;  
    background-color: rgba(255, 255, 255, 0.4);  
    transition: opacity 0.6s ease; 

    &:hover {
      opacity: 0.5;  
    } 
  
  }  
  
  .galleri-link {  
    width: auto;   
    border: none;
    height: 20px;
    padding: 7px; 
    color: #000;
    opacity: 0;   
    transition: opacity 1.1s ease, transform 1.1s ease;    
    position: absolute;  
    bottom: 7px;         
    left: 52%;     
    top: 70%; 
    font-size: 34px;   
    text-decoration: underline;  
    transform: translate(-50%, -50%) scale(0.9);   
  } 

  
  &:hover .galleri-link { 
    opacity: 1; 
    transform: translate(-50%, -50%) scale(1); 
  }
`      

export const GalleryStyleWrapper = styled.section` 
  background: #F8F8F8;
  height: 100vh;  
  display: flex;
  justify-content: center; 
  align-items: center;    
  border: 2px solid gold;
` 

