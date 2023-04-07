import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Arial', sans-serif;
        font-size: 14px;
    }

    body {
        min-height: 100vh;
        font-family: 'Rubik', sans-serif;
        border: 1px solid red;
    }
`;
