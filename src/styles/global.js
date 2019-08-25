import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html,body,#root{
    height: 100%;
  }
  body{
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    background: #f4f4f4;
    font-family: 'Montserrat', sans-serif;
    color: #ffffff;
  }
`;

export default GlobalStyle;
