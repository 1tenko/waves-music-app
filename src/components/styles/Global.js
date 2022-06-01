import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        color: #e5e5e5;
        font-family: 'Lato', sans-serif;
    }
    html {
        background-color: #18181b;
    }

    h3,h4 {
        font-weight: 400;
    }
    
`;

export default GlobalStyles;
