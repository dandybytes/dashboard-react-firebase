import {createGlobalStyle} from 'styled-components';

export const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
        box-sizing: border-box;
    }

    body {
        background: ${({theme}) => theme.primaryBackground};
        color: ${({theme}) => theme.textColor};
        height: 100vh;
        margin: 0;
        padding: 0;
        font-family: 'Roboto', sans-serif;
    }

    a {
        text-decoration: none;
    }
`;
