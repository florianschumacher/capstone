import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:   whitesmoke;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: hsla(0, 0%, 8%);
    font-size: 112.5%;
  }`;

export default GlobalStyle;