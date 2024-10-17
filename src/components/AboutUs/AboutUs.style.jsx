import styled from "styled-components";

export const AboutUsStyle = styled.div`
  width: 65%; 
  margin: auto;
  color: #fff;
  padding: 20px;

  h1 {
    text-align: center;
    font-family: 'Dancing Script', serif;
    font-size: 65px;
    margin: 0;
    padding-bottom: 30px;

    @media (max-width: 500px) {
      font-size: 44px;
      padding-bottom: 16px;
    }
  }

  .marita1 {
    width: 100%;
    max-width: 280px;
    float: left;
    border-radius: 3px;
    margin: 0 30px 0 0;
  }

  @media (max-width: 1600px) {
    width: 78%;
  }

  @media (max-width: 1400px) {
    width: 85%;
  }

  @media (max-width: 1200px) {
    width: 90%;

    .marita1 {
      max-width: 260px;
      margin: 0 25px 10px 0;
    }
  }
  
  @media (max-width: 900px) {
    width: 98%;
  }

  @media (max-width: 700px) {
    width: 98%;
    margin: 0;
    padding: 10px;

    .marita1 {
      max-width: 240px;
      margin: 0 12px 6px 0;
      padding: 2px;
    }
  }

  @media (max-width: 600px) {

    .marita1 {
      max-width: 190px;
    }
  }

  @media (max-width: 500px) {
    padding: 6px;

    .marita1 {
      max-width: 160px;
      margin: 0 12px 0 0;
    }
  }

  @media (max-width: 350px) {

    .marita1 {
      max-width: 130px;
    }
  }
`

export const AboutUsStyleWrapper = styled.section` 
  box-sizing: border-box;
  background: #172338;
  min-height: 100vh;
  min-height: 100dvh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media(max-width: 600px) {
    height: 100%;
    min-height: 100%;
  }
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

  @media (max-width: 500px) {
    font-size: 16px;
  }

  @media (max-width: 350px) {
    font-size: 15px;
  }

` 





