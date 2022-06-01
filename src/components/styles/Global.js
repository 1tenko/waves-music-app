import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #18181b;
        color: white;
        font-family: 'Fira Code';
    }
    h1,h2,h3 {
        color: #e5e5e5
    }
    
`;

export default GlobalStyles;
