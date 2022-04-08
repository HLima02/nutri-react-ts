import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {margin: 0; padding: 0; box-sizing: border-box; font-family: 'Roboto', sans-serif;}
  ul, li {list-style-type: none;}
  a {text-decoration: none;}
  html, body {
    width: 100%;
    min-width: 320px;
    height: 100%;
  }
`;