import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus-visible {
        outline: 2px solid #3af6fc;
    }

    body {
        font-family: 'Nunito', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.primaryText};
        background-color: ${theme.colors.primaryBg};
        line-height: 1.2;
    }

    a {
        text-decoration: none;
    }

    ul {
        list-style: none;
    }

    button {
        background-color: unset;
        border: none;
    }

    p,
    small {
        color: ${theme.colors.secondaryText};
        font-family: Nunito, sans-serif;
    }

    h1 {
        color: ${theme.colors.accent};
        font-family: Nunito, sans-serif;
        font-weight: 700;
        font-size: 20px;
        margin-bottom: 12px;
        text-transform: uppercase;
    }

    section {
        padding-bottom: 145px;
        
        @media ${theme.media.mobile} {
            padding-bottom: 80px;
            
        }
    }

    section:last-of-type {
        padding-bottom: 0;
    }





`