import { createGlobalStyle } from 'styled-components';
import harryPotterBg from "../img/HarryPotter.jpg"
import magicFont from '../assets/fonts/Magic.otf'

export const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'Magic';
    src: url(${magicFont}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Magic', cursive, serif;
    background-color: #121212; 
    color:#f7b958;
    margin: 0;
    padding: 0;
    background-image: url(${harryPotterBg});
    background-size: 400px 400px;;     
    background-position: center; 
    background-repeat: repeat;
  }

  select, button {
    font-family: 'Magic', cursive, serif;
  }
`;
