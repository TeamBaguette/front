import { createGlobalStyle } from 'styled-components';
/* global로 적용할 style component = reset.css */
const GlobalStyle = createGlobalStyle`
  *{
    box-sizing: border-box;
  }

  div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video, button {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  #root{
    min-height: 100%;
  }
  
  /* 임시 */
  .page_wrap{
    height: 100%;
    min-height: 100vh;

    // 좌우 여백
    &.p_19{
      padding-left: 1.9rem;
      padding-right: 1.9rem;
    }

    &.p_28{
      padding-left: 2.8rem;
      padding-right: 2.8rem;
    }

    // 하단 메뉴바가 있을경우 하단 여백 
    &.bm{
      padding-bottom: calc(5rem + env(safe-area-inset-bottom));
    }
  }
`;

export default GlobalStyle;
