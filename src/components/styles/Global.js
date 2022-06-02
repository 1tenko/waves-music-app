import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #fafaf9;
        font-family: 'Lato', sans-serif;
    }
    html {
        background-color: #1c1917;
    }

    h3,h4 {
        font-weight: 400;
    }
    * {
    scrollbar-width: thin;
    scrollbar-color: rgba(168, 162, 158, 0.5) transparent;
  }
  *::-webkit-scrollbar {
    width: 5px;
  }
  *::-webkit-scrollbar-track {
    background: transparent;
  }
  *::-webkit-scrollbar-thumb {
    background-color: rgba(168, 162, 158, 0.5);
    border-radius: 20px;
    border: transparent;
  }
    
`;

export default GlobalStyles;
