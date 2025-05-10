import { createGlobalStyle } from 'styled-components';

export const GlobalStyledStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body {
    font-family: 'Roboto', sans-serif;
    font-size: 1rem;
    line-height: 1.6;
    color: #E5E7EB;
    background: #111827;
  }
`;

