import { createGlobalStyle } from 'styled-components';
/* global로 적용할 style component = reset.css */
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }
`;

export default GlobalStyle;
