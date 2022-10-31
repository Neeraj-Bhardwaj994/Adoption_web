import styled from "styled-components";

export const Wrap = styled.div`
  color: #fff;
`;

export const Section = styled.section`
  // margin: 3em 0;
`;

export const Uppertext = styled.h1`
  font-size: 4em;
  text-align: center;
  color: #013870;
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 3em;
  }

  @media (max-width: 440px) {
    font-size: 2em;
  }
`;

export const Lowertext = styled.h4`
  font-size: 2.5em;
  text-align: center;
  color: #013870;


  @media (max-width: 768px) {
    font-size: 1.5em;
    margin: 1em 0;
  }

  @media (max-width: 440px) {
    font-size: 1em;
  }
`;

export const SecSection = styled.section`
  align-items: center;
`;

export const UppertextSec = styled.h1`
  text-decoration: underline;
  margin: 0.7em 0;
  color: #013870;

  @media (max-width: 768px) {
    font-size: 1.4em;
  }

  @media (max-width: 440px) {
    font-size: 1.2em;
  }
`;

export const ButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em 0;
`;

export const Copyrighttext = styled.h6`
 text-align: center; 
 color: #594545;
`;


export const Smalltext = styled.h6`
  font-size: 1.5em;
  color: #594545;
`;