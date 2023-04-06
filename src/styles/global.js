import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    /*     border: 1px solid black; */
    }

    body {
        min-height: 100vh;
        font-family: 'Rubik', sans-serif;
        border: 1px solid red;
    }
`;
