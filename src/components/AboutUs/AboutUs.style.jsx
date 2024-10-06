import styled from "styled-components";

export const AboutUsStyle = styled.div`
  width: 65%; 
  margin: auto;
  color: #fff;

  h1 {
    text-align: center;
    font-family: 'Dancing Script', serif;
    font-size: 65px;
  }

  .marita1 {
    width: 100%;
    max-width: 300px;
    float: left;
    border-radius: 3px;
    margin: 0 30px 0 0;
  }

  @media (max-width: 1600px) {
    width: 75%;
  }

  @media (max-width: 1400px) {
    width: 80%;
  }

   @media (max-width: 1200px) {
    width: 85%;

    .marita1 {
      max-width: 280px;
    }
  }
  
  @media (max-width: 900px) {
    width: 94%;

    .marita1 {
      max-width: 260px;
      margin: 0 25px 0 0;
    }
  }

  @media (max-width: 700px) {
    width: 96%;

    .marita1 {
      max-width: 240px;
      margin: 0 12px 0 0;
      padding: 2px;
    }
  }

  @media (max-width: 600px) {
    width: 96%;

    .marita1 {
      max-width: 180px;
      margin: 0 12px 0 0;
    }
  }

  @media (max-width: 500px) {
    width: 96%;

    .marita1 {
      max-width: 160px;
      margin: 0 12px 0 0;
    }
  }
`

export const AboutUsStyleWrapper = styled.section` 
  box-sizing: border-box;
  background: #172338;
  min-height: 100svh;
  display: flex;
  align-items: center;
  justify-content: center;
` 

export const AboutUsContainer = styled.section`   
  display: block;
  border-radius: 3px;
  width: 85%;
  margin-inline: auto;

  @media (max-width: 1600px) {
    width: 90%;
  }

  @media (max-width: 1400px) {
    width: 95%;
  }

  @media (max-width: 1200px) {
    width: 99%;
  }
` 

export const AboutUsText = styled.div`   
  width: 100%;
  font-family: 'Cormorant Garamond', serif;
  font-size: 20px;

  p {
    
  }
` 


