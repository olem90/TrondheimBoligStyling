import styled from "styled-components";

export const GalleryStyle = styled.div`
  width: 600px;  
  margin-inline: auto;
  display: flex; 
  flex-direction: column;  
  margin-block: auto; 
  position: relative; 
 
  .page {
    perspective: 1000px;
  }

  .front, .back {
    backface-visibility: hidden;
    transform-style: preserve-3d;
    transition: transform 0.8s cubic-bezier(0.75, 0, 0.85, 1);
  }

  .back {
    transform: rotateY(180deg);
  } 

  &.flipped .front {
    transform: rotateY(-180deg);
  }

  .gallery-wrapper {
     
    img {
      width: 300px;  
    }
  }

  .images-container {
    width: 100%;
    
  } 
 
  &.flipped {
    animation: flipPage 0.6s forwards;
    width: 100%; 
    dispay: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px; 
  }

  @keyframes flipPage {
    0% {
      transform: rotateY(0) rotateX(0) translateZ(0);
    }
    100% {
      transform: rotateY(-160deg) rotateX(-10deg) translateZ(-150px); // Adjust for effect
    }
  }
   
  img {
    width: 100%; 
    object-fit: contain;  
    max-height: 100%;       
    margin-inline: auto;  
    background-color: rgba(255, 255, 255, 0.4); 
    transition: opacity 0.6s ease;
  }  
  
  .galleri-link { 
    width: auto;     
    padding: 7px;
    color: #000;   
    opacity: 0;   
    transition: opacity 1.5s ease, transform 1.5s ease; 
    position: absolute;
    bottom: 7px;        
    left: 50%;  
    font-size: 24px;
    text-decoration: underline;  
    transform: translate(-50%, -50%) scale(0.9); 
  }

  &:hover img {
    opacity: 0.5;  
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
  perspective: 1500px;
   
  .gallery-wrapper {
    border: 2px solid red; 
    max-width: 80%;  
    margin-inline: auto;
  } 
` 