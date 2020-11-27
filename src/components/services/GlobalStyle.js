import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background: hsla(27, 90%, 96%);
    font-family: Open-Sans, Helvetica, Sans-Serif;
    color: hsla(0, 0%, 8%);
    font-size: 112.5%
  }
`;

export default GlobalStyle;